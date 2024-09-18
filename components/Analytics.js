import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ls from 'local-storage';

const CookiePopup = ({ onClose }) => {
  const [textVisible, setTextVisible] = useState(false);
  const buttonRef = useRef(null);


  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTextVisible(true);
    }, 100);

    return () => {
      clearTimeout(textTimeout);
    };
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', onClose);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', onClose);
      }
    };
  }, [onClose]);




  return (

    <div id='analytics' className={`flex fixed w-full max-w-full h-full font-sans items-center bg-indigo-900 bg-opacity-90 border-4 border-gray-100 border-dashed justify-center z-50 ${textVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className='w-full md:max-w-md max-w-full h-auto px-6 md:px-0'>
        <p className='text-lg md:text-xl text-center font-bold text-white pb-2'>Este site usa cookies</p>
        <p className='text-md md:text-lg text-white text-left text-justify'>Este site utiliza cookies unicamente para melhorar sua experiência de navegação. Nenhum dado pessoal será coletado sem a sua autorização. Clique em aceitar e navegue com total segurança!
          <Link href="/terms" className={"underline hover:no-underline text-sm md:text-md px-3 py-1 font-medium text-white"}>Termos &amp; Condições</Link></p>

        <br />
        <div className='w-full flex justify-center'>
          <button ref={buttonRef} className='rounded-full text-lg md:text-xl w-32 h-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-600 text-white border-2 border-white cursor-pointer transform transition hover:scale-105 duration-200 ease-in-out'>Aceitar</button>
        </div>
      </div>
    </div >
  );
};

const App = () => {
  const [isClient, setIsClient] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(!ls.get('cookieAccepted'));

  useEffect(() => {
    setIsClient(true);
    if (!showCookiePopup) {

      // Carrega o script do Analytics somente se os cookies foram aceitos
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`;
      script.async = true;
      document.body.appendChild(script);

      // Configuração e inicialização do Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
        cookie_flags: 'SameSite=None;Secure',
        page_path: window.location.pathname,
      });

    }
  }, [showCookiePopup]);

  const handleCloseCookiePopup = () => {
    ls.set('cookieAccepted', true);
    setShowCookiePopup(false);
  };

  return (
    <React.Fragment>
      {isClient && showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
      {/* Renderiza o Analytics somente após o usuário aceitar os cookies */}
    </React.Fragment>
  );
};

export default App;