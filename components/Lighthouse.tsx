import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Howl } from 'howler';

interface LoadingItemProps {
  text: string;
}

const LoadingItem: React.FC<LoadingItemProps> = ({ text }) => {

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 1.0, });

  const [percentage, setPercentage] = useState(0);

  const autoFx = useRef<Howl | null>(null);

  useEffect(() => {
    autoFx.current = new Howl({
      src: ['../effects/loading7.mp3'],
      volume: 0.2,
    });

    return () => {
      // Limpa o áudio ao desmontar o componente
      if (autoFx.current) {
        autoFx.current.stop();
        autoFx.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        }
      }, 17);
      // Limpar o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
    } else {
      setPercentage(0);
    }
  }, [percentage, inView]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      autoFx.current?.play();
    } else {
      setIsVisible(false);
      autoFx.current?.stop();
    }
  }, [inView]);


  return (
    <div id='loading' className='loading' ref={ref}>
      {isVisible && (
        <div className=''>
          <div className='outer-shadow'></div>
          <div className='inner-shadow'></div>
          <div className='hold left'>
            <div className='fill'></div>
          </div>
          <div className='hold right'>
            <div className='fill'></div>
          </div>
          <div className='percentage text-xl md:text-2xl'>{percentage}%</div>
          <div className='text-center text-gray-800 pt-24 font-bold text-md md:text-lg'>{text}</div>
        </div>
      )}
    </div>
  );
};

const Lighthouse: React.FC = () => {
  const items = ['Melhores Práticas', 'Responsivo', 'Acessível', 'Segurança', 'SEO', 'PWA'];

  return (
    <>
      <div className="pb-6 flex mx-auto border-t-8 border-b-8 border-green-600 border-dashed grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4 w-3/4 max-w-3/4">
        {items.map((item, index) => (
          <LoadingItem key={index} text={item} />
        ))}
      </div>

    </>
  );
};

export default Lighthouse;