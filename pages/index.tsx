import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaVolumeMute, FaVolumeUp, FaMailBulk, FaMapMarkerAlt, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSun, FaRegMoon, FaBars, FaTimes } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiTailwindcss, SiTypescript, SiNetlify, SiVercel, SiFacebook } from 'react-icons/si';
import { Howl, Howler } from 'howler';
import Carousel from '../components/Carousel';
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';
import Projetos from '../components/Projetos';
import dynamic from 'next/dynamic';
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

const Home = () => {
  //const [textVisible, setTextVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [bgColor, setBgColor] = useState('bg-gray-300');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lightbulbOn, setLightbulbOn] = useState(true);
  const [muted, setMuted] = useState(true);
  const [sound, setSound] = useState(null);

  //pré-carregar e repetir música de fundo
  useEffect(() => {
    function preloadSound() {
      const soundToPreload = 'sound3.mp3';

      const newSound = new Howl({
        src: [`/sounds/${soundToPreload}`],
        volume: 0.4,
        loop: true,
      });

      setSound(newSound);
    }

    preloadSound();
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
    }, 5); // 9 segundos
  };

  // Configurar o intervalo para reiniciar a animação a cada 9 segundos
  useEffect(() => {
    const intervalId = setInterval(toggleAnimateJump, 5000);
    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);


  //controle do botão de música e efeitos
  const toggleMute = () => {
    const newMuted = !Howler._muted;
    Howler.mute(newMuted);
    setMuted(newMuted);

    if (newMuted) {
      if (sound) {
        sound.stop();
      }
    } else {
      if (sound) {
        sound.play();
      }
    }
  };

  // forçar Howler ser iniciado com o estado de 'muted'.
  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);


  //efeitos sonoros de clicks
  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 0.5,
  });

  //efeitos sonoros de click no botão currículo
  const clickCvFx = new Howl({
    src: ['../effects/clickCvFx.mp3'],
    volume: 1.0,
  });

  //efeitos sonoro de hover
  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 0.5,
  });

  //efeito sonoro no botão luz
  const toogleFx = new Howl({
    src: ['../effects/toogleFx.mp3'],
    volume: 0.5,
  });

  //efeito sonoro no botão whatsapp
  const whatsFx = new Howl({
    src: ['../effects/whatsFx2.mp3'],
    volume: 0.3,
  });

  //controle de click nas tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    clickFx.play();
  };

  //controle do botão menu (dispositivos móveis)
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    clickFx.play();
  };

  //controle do botão luz
  const handleLightbulbClick = () => {
    setBgColor((prevColor) => (prevColor === 'bg-gray-700' ? 'bg-gray-300' : 'bg-gray-700'));
    setLightbulbOn(!lightbulbOn);
    toogleFx.play();
  };

  //controle de som dos elementos
  const handleClick = () => {
    clickFx.play();
  };

  const handleCvClick = () => {
    clickCvFx.play();
  };

  const handleHover = () => {
    hoverFx.play();
  };

  const whatsAppHover = () => {
    whatsFx.play();
  };

  //efeito blur ao carregar página
  //useEffect(() => {
  //  const textTimeout = setTimeout(() => {
  //    setTextVisible(true);
  //  }, 100);

  //  return () => {
  //    clearTimeout(textTimeout);
  //  };
  //}, []);


  return (
    <>
      <Head>
        <title>Dev Next.js</title>
        <meta name="description" content="Neste espaço, convido você a explorar mais sobre minha formação e histórico profissional, as linguagens e metodologias que utilizo, além de acesso a códigos fonte de alguns projetos e componentes Next.js que tive a alegria de criar." />
      </Head>
      <div>

        <Analytics />

        <div className={`z-10 flex overflow-y-auto w-full max-w-full h-full min-h-screen bg-no-repeat items-start justify-center mx-auto bg-opacity-60 ${bgColor} `}>
          <div className={`flex flex-col md:flex-row w-screen mx-auto max-w-6xl gap-4 px-2 md:px-4 py-2 md:py-4`}>

            {/* Sidebar (Mobile: Below) */}
            <div className="w-full justify-center md:max-w-1/4 items-center md:w-1/3 bg-white bg-opacity-80 rounded h-full p-4 sm:order-1 shadow-lg border-2 border-gray-400 relative">

              <button onClick={toggleMute} onMouseEnter={handleHover} title='Audio'>
                {muted ? <FaVolumeMute title='Ativar Efeitos Sonoros' className='text-gray-500 w-10 h-10 p-2 rounded-full hover:bg-white' /> : <FaVolumeUp title="Desativar Efeitos Sonoros" className='text-purple-500 w-10 h-10 p-2 rounded-full hover:bg-white' />}
              </button>

              <Carousel />

              <div className="text-center pt-4">
                <h1 className="text-lg lg:text-xl text-white font-medium rounded-md p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
                  Matheus S. Lopes
                </h1>
                <p className="text-sm md:text-md p-1 pt-2 text-gray-500">
                  Bacharel em Ciência da Computação
                </p>
                <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />
                <div className="mt-2 animate-gradient">
                  <h2 className="text-2xl">
                    Desenvolvedor Web
                  </h2>
                  <h2 className="text-sm md:text-md lg:text-lg">
                    React.js / Next.js / Tailwind.css
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
                    className="rounded-full shadow-md text-md mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-700 text-white transform transition hover:scale-105 duration-200 ease-in-out"
                    onClick={handleCvClick}
                  >
                    Currículo.pdf
                  </button>
                </Link>

                <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

                <div className='pt-4'>
                  <Link href="https://api.whatsapp.com/send?phone=5519996750375" title="Entre em contato pelo WhatsApp" rel="noopener noreferrer" target='_blank'>
                    <button
                      className="group relative flex w-max mx-auto h-auto p-2 px-4 font-medium overflow-hidden rounded-lg bg-gray-100 text-md shadow-md"
                      onClick={handleClick}
                      onMouseEnter={whatsAppHover}
                    >
                      <div className="absolute inset-0 w-2 bg-green-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <FaWhatsapp className="relative w-6 h-6 text-green-700 group-hover:text-white" />
                      <span className="relative text-gray-800 group-hover:text-white pl-1 my-auto">55 (19) 99675-0375</span>
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center py-2 pt-10">
                  <ul className="flex gap-4 md:gap-6">

                    <li
                      onClick={handleClick}
                    >
                      <a
                        href="https://www.linkedin.com/in/matheus-dev-nextjs/"
                        title="LinkedIn"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-gray-500 transition hover:text-[#142039]"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <SiLinkedin className="w-8 h-8 text-gray-500 hover:text-sky-600" />
                      </a>
                    </li>

                    <li
                      onClick={handleClick}
                    >
                      <a
                        href="https://app.netlify.com/teams/next-dev-frontend/sites"
                        title="Netfily"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-gray-500 transition hover:text-green-800"
                      >
                        <span className="sr-only">Netlify</span>
                        <SiNetlify className="w-9 h-9 text-gray-500 hover:text-green-800" />
                      </a>
                    </li>

                    <li
                      onClick={handleClick}
                    >
                      <a
                        href="https://vercel.com/matheus-santos-lopes-projects"
                        title="Vercel"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-gray-500 transition hover:text-black"
                      >
                        <span className="sr-only">Vercel</span>
                        <SiVercel className="w-8 h-8 text-gray-500 hover:text-black" />
                      </a>
                    </li>

                    <li
                      onClick={handleClick}
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

                  </ul>
                </div>

                <div className="text-md flex items-center justify-center gap-1 pt-6 pb-4">
                  <FaMailBulk className="w-4 h-4 text-blue-500" />
                  <Link
                    onClick={handleClick}
                    href="mailto:matheus.dev.frontend@gmail.com" title="Envie uma menagem por e-mail"
                  >
                    <p className='text-sm md:text-md text-gray-500 hover:text-blue-500 underline hover:no-underline decoration-blue-500 decoration-2'>matheus.dev.frontend@gmail.com</p>
                  </Link>
                </div>

                <div className="text-sm md:text-md flex items-center justify-center gap-0 md:gap-1 my-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                  <p className='text-gray-500'>Santo Antônio de Posse - SP</p>
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

            {/* Content */}
            <div className="w-full md:w-3/4 flex flex-col sm:order-2 text-sm md:text-md lg:text-lg z-30">
              {/* Tab Bar */}
              <div className="flex justify-between items-center mb-2 w-full">

                <div className="md:hidden z-40">
                  <button
                    aria-label="menu de opções"
                    className={`p-2 rounded-full shadow-md mb-2 transition-colors ${isMenuOpen ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-purple-500 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                    onClick={handleMenuToggle}
                  >
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                  </button>
                </div>

                <div className={`z-10 hidden md:flex ${isMenuOpen ? 'hidden' : ''}`}>
                  <button
                    aria-label="Sobre o Matheus"
                    className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                    onClick={() => handleTabChange('tab1')}
                  >
                    Sobre
                  </button>

                  <button
                    aria-label="Stack atual"
                    className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                    onClick={() => handleTabChange('tab2')}
                  >
                    Tecnologias
                  </button>

                  <button
                    aria-label="Projetos recentes"
                    className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                    onClick={() => handleTabChange('tab3')}
                  >
                    Projetos
                  </button>

                </div>

                <label htmlFor="lightbulb-toggle" className="relative h-8 w-14 cursor-pointer">
                  <input
                    aria-label="Menu de opções"
                    type="checkbox"
                    id="lightbulb-toggle"
                    className="peer sr-only"
                    checked={lightbulbOn}
                    onChange={handleLightbulbClick}
                  />
                  <span className={`absolute inset-y-0 start-0 m-1 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white transition-all ${lightbulbOn ? 'peer-checked:start-6 peer-checked:text-white' : ''}`}>
                    {lightbulbOn ? <FaRegMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
                  </span>
                  <span className={`absolute inset-0 rounded-full shadow-md bg-white bg-opacity-80 transition ${lightbulbOn ? 'peer-checked:bg-white bg-opacity-90' : ''}`}></span>
                </label>

              </div>

              {/* Dropdown Menu para Dispositivos Móveis */}
              {isMenuOpen && (
                <div className="md:hidden absolute bg-transparent pl-11 pt-0 z-30">
                  <div className="flex flex-col border-2 border-gray-100 rounded-md gap-2 p-2 items-center justify-center bg-purple-700 bg-opacity-80 shadow-md relative">

                    <button
                      aria-label="Sobre o Matheus"
                      className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                      onClick={() => handleTabChange('tab1')}
                    >
                      Sobre
                    </button>

                    <button
                      aria-label="Stack atual"
                      className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                      onClick={() => handleTabChange('tab2')}
                    >
                      Tecnologias
                    </button>

                    <button
                      aria-label="Projetos recentes"
                      className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
                      onClick={() => handleTabChange('tab3')}
                    >
                      Projetos
                    </button>

                  </div>
                </div>
              )}

              {/* Tab Content */}
              {activeTab === 'tab1' && (
                <Sobre />
              )}
              {activeTab === 'tab2' && (
                <Tecnologias />
              )}
              {activeTab === 'tab3' && (
                <Projetos />
              )}
            </div>

          </div>
        </div>

        <div className={`flex w-full justify-center ${bgColor} bg-opacity-40 text-xs py-0.5`}>
        </div>
        <div className={`flex w-full justify-center ${bgColor} bg-opacity-20 text-xs py-0.5`}>
        </div>

        <div className={`flex right-0 w-full text-center justify-center gap-4 text-xs px-1 py-1 bg-gray-500 bg-opacity-50`}>
          <Link onClick={handleClick} href="/termos" className=' my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de uso" rel="noopener noreferrer">
            Termos &amp; Condições
          </Link>
          <Link onClick={handleClick} href="/politica" className='my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de privacidade" rel="noopener noreferrer">
            Política de Privacidade
          </Link>
          <Link onClick={handleClick} href="https://pixabay.com" className='my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="imagens by Pixabay" rel="noopener noreferrer" target='_blank'>
            Áudio por Pixabay
          </Link>
        </div>

        <div className={`flex w-full justify-center ${bgColor} bg-opacity-20 text-xs py-0.5`}>
        </div>
        <div className={`flex w-full justify-center ${bgColor} bg-opacity-40 text-xs py-0.5`}>
        </div>

        <SocialShare />

      </div>
    </>
  );
};

export default Home;