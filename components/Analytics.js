import React, { useState, useEffect, useRef } from 'react';
import ls from 'local-storage';

const CookiePopup = ({ onClose }) => {
  const buttonRef = useRef(null);

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
    <div id='analytics' className='fixed bottom-0 p-20 flex items-center w-full justify-center z-50'>
      <div className='modal p-4 bg-[#142039] border-4 rounded border-[#27ae60]'>
        <p className='text-center font-bold text-white'>This site uses cookies</p>
        <br />
        <p className='text-white'>This website uses cookies to improve your user experience. By continuing to browse the site, you agree to the use of cookies.</p>
        <br />
        <div className="flex justify-center">
          <button ref={buttonRef} className='bg-[#27ae60] border-4 rounded border-white text-lg p-4 cursor-pointer'>Accepted</button>
        </div>
      </div>
    </div>
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