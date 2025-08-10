// components/Analytics.js
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

const CookiePopup = ({ onClose }) => {
  const [textVisible, setTextVisible] = useState(false);
  const rafRef = useRef(null);

  // Aplica fade-in no próximo frame para evitar reflows
  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => setTextVisible(true));
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      id="analytics"
      role="dialog"
      aria-modal="true"
      aria-label="Aviso de cookies"
      className={`fixed inset-0 z-50 flex items-center justify-center font-sans 
        ${textVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      {/* Camada de fundo isolada para evitar repaints pesados */}
      <div className="absolute inset-0 bg-indigo-700 bg-opacity-90 pointer-events-none"></div>

      <div className="relative w-full max-w-md px-6 md:px-0">
        <p className="pb-2 text-lg font-bold text-center text-white md:text-xl">
          Este site usa cookies
        </p>
        <p className="text-md text-justify text-white md:text-lg">
          Este site utiliza cookies unicamente para melhorar sua experiência de
          navegação. Nenhum dado pessoal será coletado sem a sua autorização.
          Clique em aceitar e navegue com total segurança!{" "}
          <Link
            href="/terms"
            className="px-3 py-1 text-sm font-medium text-white underline hover:no-underline md:text-md"
          >
            Termos &amp; Condições
          </Link>
        </p>

        <div className="flex justify-center w-full mt-4">
          <button
            onClick={onClose}
            className="w-32 px-6 pt-2.5 pb-2 mb-2 text-lg font-medium text-white bg-green-700 border-2 border-white rounded-full cursor-pointer transform transition hover:scale-105 duration-200 ease-in-out"
            aria-label="Aceitar cookies"
          >
            Aceitar!
          </button>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const [isClient, setIsClient] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  // Inicializa no cliente
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      try {
        const accepted = localStorage.getItem("cookieAccepted") === "true";
        setShowCookiePopup(!accepted);
      } catch {
        setShowCookiePopup(true);
      }
      setInitialized(true);
    }
  }, []);

  const handleCloseCookiePopup = () => {
    try {
      localStorage.setItem("cookieAccepted", "true");
    } catch { }
    setShowCookiePopup(false);
  };

  const shouldRenderGA =
    initialized &&
    isClient &&
    !showCookiePopup &&
    !!process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <>
      {initialized && isClient && showCookiePopup && (
        <CookiePopup onClose={handleCloseCookiePopup} />
      )}

      {shouldRenderGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="lazyOnload" // carrega só após o load
          />
          <Script id="ga-init" strategy="lazyOnload">
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
