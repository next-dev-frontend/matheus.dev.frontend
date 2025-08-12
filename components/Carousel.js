import React, { useState } from 'react';
import Image from 'next/image';
import { Howl } from 'howler';

const images = ['/images/foto1.webp', '/images/foto2.webp', '/images/foto3.webp']; // Adicione os caminhos das suas imagens aqui

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  //efeito sonoro de hover
  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 0.5,
  });

  const handleHover = () => {
    hoverFx.play();
  };


  return (
    <div className="relative w-full h-auto flex items-center justify-center">
      <div className="flex justify-center w-full h-auto items-center z-30">

        <div className="flex mx-auto border-4 border-indigo-500 border-double rounded-full w-40 h-40">
          <Image
            src={images[currentImage]}
            // alt={`Foto ${currentImage + 1}`}
            alt={`Foto do Matheus`}
            width={320}
            height={320}
            priority="true"
            fetchPriority="high"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className='rounded-full transform transition hover:scale-105 duration-300 ease-in-out'
          />
        </div>

      </div>
    </div>
  );
};

export default Carousel;