import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMailBulk, FaMapMarkerAlt, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSun, FaRegMoon, FaBars, FaTimes } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { Howl, Howler } from 'howler';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('../components/Menu'));
const Carousel = dynamic(() => import('../components/Carousel'));
const SoundBack = dynamic(() => import('../components/SoundBack'));
import { useSoundEffects } from '../components/SoundEffects';
const SocialShare = dynamic(() => import('../components/SocialShare'));
const Analytics = dynamic(() => import('../components/Analytics'));

const IconJump = ({ icon, delay }) => {
  return (
    <div
      className={`animate-jump mx-1`}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon}
    </div>
  );
};

const Home: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [background, setBackground] = useState('bg-gray-700');
  const { playClickFx, playClickCvFx, playHoverFx, playWhatsFx } = useSoundEffects();

  const handleBgColorChange = (color: string) => {
    setBackground(color);
  };

  //efeito blur ao carregar página
  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTextVisible(true);
    }, 100);

    return () => {
      clearTimeout(textTimeout);
    };
  }, []);


  // animação pulo de logos das linguagens
  const toggleAnimateJump = () => {
    const elements = document.querySelectorAll('.animate-jump');
    elements.forEach((element) => {
      element.classList.remove('animate-jump');
    });

    setTimeout(() => {
      elements.forEach((element) => {
        element.classList.add('animate-jump');
      });
    }, 9); // 9 segundos
  };

  // Configurar o intervalo para reiniciar a animação a cada 9 segundos
  useEffect(() => {
    const intervalId = setInterval(toggleAnimateJump, 9000);
    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div>
      <div className={`z-10 flex overflow-y-auto w-full max-w-full h-full min-h-screen bg-no-repeat items-start justify-center mx-auto bg-opacity-60 ${background} ${textVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className={`flex flex-col md:flex-row w-screen mx-auto max-w-6xl gap-4 px-4 py-8`}>

          {/* Sidebar (Mobile: Below) */}
          <div className="w-full justify-center min-w-fit md:max-w-1/4 items-center md:w-1/3 bg-white bg-opacity-80 rounded h-full p-4 sm:order-1 shadow-lg border-2 border-gray-400 relative">

            <SoundBack />
            <Carousel />

            <div className="text-center pt-4">
              <p className="text-lg lg:text-xl text-white font-medium rounded-md p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
                Matheus S. Lopes
              </p>
              <p className="text-sm p-1 pt-2 text-gray-500">
                Bacharelado em Ciência da Computação.
              </p>
              <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />
              <div className="mt-2 animate-gradient">
                <h2 className="text-2xl">
                  Desenvolvedor Web
                </h2>
                <h2 className="text-sm md:text-md lg:text-lg">
                  React.js / Next.js / Tailwind
                </h2>
              </div>

              <div className="flex justify-center mt-2 pt-3">
                <IconJump icon={<FaHtml5 className="w-7 h-7 text-orange-500" />} delay={0.0} />
                <IconJump icon={<FaCss3Alt className="w-7 h-7 text-blue-500" />} delay={0.2} />
                <IconJump icon={<FaJs className="w-7 h-7 text-yellow-500" />} delay={0.4} />
                <IconJump icon={<FaReact className="w-7 h-7 text-blue-400" />} delay={0.6} />
                <IconJump icon={<FaNodeJs className="w-7 h-7 text-green-500" />} delay={0.8} />
                <IconJump icon={<SiTailwindcss className="w-7 h-7 text-indigo-500" />} delay={1.0} />
                <IconJump icon={<SiTypescript className="w-6 h-6 text-blue-600 my-0.5" />} delay={1.2} />
              </div>

              <hr className="my-6 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              <Link href="/currículo.pdf" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>
                <button
                  className="rounded-full shadow-md text-md mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-600 text-white transform transition hover:scale-105 duration-200 ease-in-out"
                  onClick={playClickCvFx}
                  onMouseEnter={playHoverFx}
                >
                  Currículo.pdf
                </button>
              </Link>

              <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              <div className='pt-4'>
                <Link href="https://api.whatsapp.com/send?phone=5519996750375" title="Entre em contato pelo WhatsApp" rel="noopener noreferrer" target='_blank'>
                  <button
                    className="group relative flex w-max mx-auto h-auto p-2 px-4 font-medium overflow-hidden rounded-lg bg-gray-100 text-md shadow-md"
                    onClick={playClickFx}
                    onMouseEnter={playWhatsFx}
                  >
                    <div className="absolute inset-0 w-2 bg-green-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <FaWhatsapp className="relative w-6 h-6 text-green-600 group-hover:text-white" />
                    <span className="relative text-gray-800 group-hover:text-white pl-1 my-auto">55 (19) 99675-0375</span>
                  </button>
                </Link>
              </div>


              <div className="text-md flex items-center justify-center gap-1 pt-8 pb-4">
                <FaMailBulk className="w-4 h-4 text-blue-500" />
                <Link
                  onClick={playClickFx}
                  onMouseEnter={playHoverFx}
                  href="mailto:matheus.dev.frontend@gmail.com" title="Envie uma menagem por e-mail"
                >
                  <p className='text-gray-500 hover:text-blue-500 underline hover:no-underline decoration-blue-500 decoration-2'>matheus.dev.frontend@gmail.com</p>
                </Link>
              </div>

              <div className="text-md flex items-center justify-center gap-0 md:gap-1 my-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                <p className='text-gray-500'>Santo Antônio de Posse - SP</p>
              </div>

              <div className="flex justify-center py-2 pt-4 pb-7">
                <ul className="flex gap-4 md:gap-6">
                  <li
                    onClick={playClickFx}
                    onMouseEnter={playHoverFx}
                  >
                    <a
                      href="https://github.com/next-dev-frontend"
                      title="GitHub"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-500 transition hover:text-[#142039]"
                    >
                      <span className="sr-only">GitHub</span>
                      <SiGithub className="w-8 h-8 text-gray-500 hover:text-gray-900" />
                    </a>
                  </li>

                  <li
                    onClick={playClickFx}
                    onMouseEnter={playHoverFx}
                  >
                    <a
                      href="#home"
                      title="LinkedIn"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-500 transition hover:text-[#142039]"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <SiLinkedin className="w-8 h-8 text-gray-500 hover:text-sky-600" />
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="mx-auto w-full p-1 max-w-max rounded">
                    <p className="wrap rounded text-center text-xs text-gray-600">
                      ©2023. Todos os direitos reservados!
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <Menu onBgColorChange={handleBgColorChange} />

        </div>
      </div>

      <div className={`flex w-full justify-center ${background} bg-opacity-40 text-xs py-0.5`}>
      </div>
      <div className={`flex w-full justify-center ${background} bg-opacity-20 text-xs py-0.5`}>
      </div>


      <div className={`flex right-0 w-full justify-center gap-4 text-xs py-1 bg-gray-500 bg-opacity-50`}>
        <Link onClick={playClickFx} onMouseEnter={playHoverFx} href="/terms" className='no-underline hover:underline px-3 py-1 font-medium text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de uso" rel="noopener noreferrer">
          Termos &amp; Condições
        </Link>
        <Link onClick={playClickFx} onMouseEnter={playHoverFx} href="/policy" className='no-underline hover:underline px-3 py-1 font-medium text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de privacidade" rel="noopener noreferrer">
          Política de Privacidade
        </Link>
        <Link onClick={playClickFx} onMouseEnter={playHoverFx} href="https://pixabay.com" className='no-underline hover:underline px-3 py-1 font-medium text-white bg-pink-700 bg-opacity-30 rounded-full' title="imagens by Pixabay" rel="noopener noreferrer" target='_blank'>
          Efeitos Sonoros por Pixabay
        </Link>
      </div>

      <div className={`flex w-full justify-center ${background} bg-opacity-20 text-xs py-0.5`}>
      </div>
      <div className={`flex w-full justify-center ${background} bg-opacity-40 text-xs py-0.5`}>
      </div>
      <Analytics />
      <SocialShare />

    </div>
  );
};

export default Home;