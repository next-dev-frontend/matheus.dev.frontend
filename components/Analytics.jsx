// components/Analytics.js
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

const CookiePopup = ({ onClose }) => {
  const [textVisible, setTextVisible] = useState(false);
  const rafRef = useRef(null);

  // Aplica o fade-in sincronizado com o próximo frame para reduzir reflows
  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => setTextVisible(true));
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      id="analytics"
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de cookies"
      className={`flex fixed inset-0 font-sans items-center bg-indigo-700 bg-opacity-90 border-4 border-gray-100 border-dashed justify-center z-50 ${textVisible ? "animate-fade-in" : "opacity-0"
        }`}
    >
      <div className="w-full md:max-w-md max-w-full h-auto px-6 md:px-0">
        <p className="text-lg md:text-xl text-center font-bold text-white pb-2">
          Este site usa cookies
        </p>
        <p className="text-md md:text-lg text-white text-left text-justify">
          Este site utiliza cookies unicamente para melhorar sua experiência de
          navegação. Nenhum dado pessoal será coletado sem a sua autorização.
          Clique em aceitar e navegue com total segurança!
          {" "}
          <Link href="/terms" className="underline hover:no-underline text-sm md:text-md px-3 py-1 font-medium text-white">
            Termos &amp; Condições
          </Link>
        </p>

        <br />
        <div className="w-full flex justify-center">
          <button
            onClick={onClose}
            className="rounded-full text-lg md:text-xl w-32 h-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-700 text-white border-2 border-white cursor-pointer transform transition hover:scale-105 duration-200 ease-in-out"
            aria-label="Aceitar cookies"
          >
            Aceitar!
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Analytics component
 * - mostra o popup apenas quando necessário
 * - carrega o GA somente após o usuário aceitar (renderiza <Script ... />)
 */
const Analytics = () => {
  const [isClient, setIsClient] = useState(false);
  const [initialized, setInitialized] = useState(false); // garante que já lemos localStorage
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  // inicializa no cliente (evita mismatch SSR)
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      try {
        const accepted = localStorage.getItem("cookieAccepted") === "true";
        setShowCookiePopup(!accepted);
      } catch (err) {
        // se houver problema com localStorage, assume que precisa mostrar
        setShowCookiePopup(true);
      }
      setInitialized(true);
    }
  }, []);

  // Quando o usuário aceita:
  const handleCloseCookiePopup = () => {
    try {
      localStorage.setItem("cookieAccepted", "true");
    } catch (err) {
      // ignore localStorage errors silently
    }
    setShowCookiePopup(false);
  };

  // Somente renderiza o GA se já inicializamos e cookie aceito
  const shouldRenderGA = initialized && isClient && !showCookiePopup && !!process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <>
      {/* Mostrar popup somente depois da inicialização no cliente */}
      {initialized && isClient && showCookiePopup && (
        <CookiePopup onClose={handleCloseCookiePopup} />
      )}

      {/* GA scripts: carregados de forma não-bloqueante após a página ficar interativa */}
      {shouldRenderGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="afterInteractive"
          // não definir 'async' manualmente — Next/Script cuida de carregamento
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                cookie_flags: 'SameSite=None;Secure',
                page_path: window.location.pathname
              });
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default Analytics;
