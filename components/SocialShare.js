import React, { useState, useEffect } from 'react'
import { FaShareAlt, FaTimes } from 'react-icons/fa';
import { Howl } from 'howler';


const SocialShare = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false)

  const socialClickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 0.5,
  });

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClickSocial = () => {
    socialClickFx.play();
    setOpen(!open);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className="flex items-center w-max max-w-full fixed left-1 bottom-0 z-40">

      {isVisible && (

        <button
          title="Compartilhar portifolio"
          onClick={handleClickSocial}


          className={`flex group z-50 cursor-pointer text-purple-500 hover:text-white border-2 border-indigo-500 fixed bottom-16 left-6 p-3 rounded-full shadow-md ${open ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-white' : 'bg-white text-purple-500 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-indigo-500 hover:border-white'}`}
        >
          {open ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaShareAlt className="animate-pulse w-6 h-6" />
          )}
        </button>
      )}

      {isVisible && (
        <div className={`${open ? "flex" : "hidden"} flex-col pl-1.5 md:pl-24 pb-32 md:pb-12`}>
          {/* ::Links container */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full border-2 border-gray-100 rounded-md gap-2 p-2 items-center justify-center bg-purple-700 bg-opacity-80 shadow-md relative">

            {/* :::Facebook */}
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://matheus-dev-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setOpen(!open); handleClickSocial(); }}
              className="w-16 h-16 inline-flex justify-center items-center bg-[#4267B2] hover:opacity-80"
              style={{ backgroundColor: "#4267B2" }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>

            {/* :::Email */}
            <a
              href="mailto:matheus.dev.frontend@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 inline-flex justify-center items-center bg-yellow-400 hover:opacity-80"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>

            {/* :::Copiar Link */}
            <button
              onClick={() => {
                navigator.clipboard.writeText("https://matheus-dev-react.netlify.app/");
                setOpen(!open);
                handleClickSocial();
              }}
              className="w-16 h-16 inline-flex justify-center items-center bg-gray-700 hover:opacity-80"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
              </svg>
            </button>
          </div>
        </div>

      )}

    </div>
  )
}

export default SocialShare