import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

const CookiePopup = ({ onClose }) => {
  const [textVisible, setTextVisible] = useState(false);
  const rafRef = useRef(null);

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
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 
        w-[90%] max-w-md bg-indigo-700 text-white p-4 rounded-lg shadow-lg 
        transition-all duration-300 ease-in-out
        ${textVisible ? "opacity-100" : "opacity-0"}`}
    >
      <p className="pb-2 text-lg font-bold text-center">
        Este site usa cookies
      </p>
      <p className="text-sm text-justify">
        Este site utiliza cookies unicamente para melhorar sua experiência de
        navegação. Nenhum dado pessoal será coletado sem a sua autorização.
        Clique em aceitar e navegue com total segurança!{" "}
        <Link
          href="/terms"
          className="underline hover:no-underline font-medium"
        >
          Termos &amp; Condições
        </Link>
      </p>

      <div className="flex justify-center w-full mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-700 border-2 border-white rounded-full hover:scale-105 transition-transform duration-200"
          aria-label="Aceitar cookies"
        >
          Aceitar!
        </button>
      </div>
    </div>
  );
};

const Analytics = () => {
  const [isClient, setIsClient] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      try {
        const accepted = localStorage.getItem("cookieAccepted") === "true";
        if (!accepted) {
          // Delay para não bloquear LCP
          setTimeout(() => setShowCookiePopup(true), 1000);
        }
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
