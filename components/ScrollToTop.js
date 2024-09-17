import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Howl } from 'howler';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollClickFx = new Howl({
    src: ['../effects/scrollFx.mp3'],
    volume: 1.0,
  });

  const handleScroll = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollClickFx.play();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="animation-bonce z-40 bg-white bg-opacity-80 text-purple-500 hover:text-white border-2 border-indigo-500 hover:border-white fixed hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition bottom-16 right-6 p-3 rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp className='w-6 h-6' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
