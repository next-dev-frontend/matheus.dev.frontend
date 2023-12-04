import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Howl } from 'howler';

const images = ['/images/foto1.webp', '/images/foto2.webp', '/images/foto3.webp']; // Adicione os caminhos das suas imagens aqui

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  //efeito sonoro de click
  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 1.0,
  });

  //efeito sonoro de hover
  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 1.0,
  });


  //controle de som dos elementos
  const handleClick = () => {
    clickFx.play();
  };

  const handleHover = () => {
    hoverFx.play();
  };


  const prevImgClick = event => {
    handleClick();
    prevImage();
  }

  const nextImgClick = event => {
    handleClick();
    nextImage();
  }


  return (
    <div className="relative mx-auto w-full h-auto flex items-center justify-center">
      <div className="flex justify-center w-full h-auto items-center z-30">

        <button onClick={prevImgClick} onMouseEnter={handleHover} title='Voltar' className="text-gray-600 font-bold px-2 cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <IoIosArrowBack />
        </button>

        <div className="flex mx-auto border-8 hover:border-16 border-gray-100 border-double border-dotted rounded-full w-40 h-40">
          <Image
            src={images[currentImage]}
            alt={`Foto ${currentImage + 1}`}
            width={512}
            height={512}
            priority
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className='rounded-full transform transition hover:scale-110 duration-300 ease-in-out'
          />
        </div>

        <button onClick={nextImgClick} onMouseEnter={handleHover} title='Avançar' className="text-gray-600 font-bold px-2 cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <IoIosArrowForward />
        </button>

      </div>
    </div>
  );
};

export default Carousel;