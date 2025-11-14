// pages/index.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Howl, Howler } from 'howler';
import {
  FaVolumeMute, FaVolumeUp, FaMailBulk, FaMapMarkerAlt, FaWhatsapp,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSun, FaRegMoon, FaBars, FaTimes
} from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiTailwindcss, SiTypescript, SiNetlify, SiVercel, SiFacebook } from 'react-icons/si';

// componentes dinâmicos (preservando comportamento do original)
const SocialShare = dynamic(() => import('../components/SocialShare'), { ssr: false });
const Analytics = dynamic(() => import('../components/Analytics'), { ssr: false });
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';
import Projetos from '../components/Projetos';

const IconJump = ({ icon, delay }) => (
  <div className={`animate-jump mx-1`} style={{ animationDelay: `${delay}s` }}>
    {icon}
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [bgColor, setBgColor] = useState('bg-gray-300');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lightbulbOn, setLightbulbOn] = useState(true);
  const [muted, setMuted] = useState(true);

  // refs para Howl (vem só no cliente)
  const clickFxRef = useRef<Howl | null>(null);
  const clickCvFxRef = useRef<Howl | null>(null);
  const hoverFxRef = useRef<Howl | null>(null);
  const toggleFxRef = useRef<Howl | null>(null);
  const whatsFxRef = useRef<Howl | null>(null);
  const bgSoundRef = useRef<Howl | null>(null);

  // inicializar sons apenas no cliente
  useEffect(() => {
    if (typeof window === 'undefined') return;

    clickFxRef.current = new Howl({ src: ['/effects/clickFx.mp3'], volume: 0.5 });
    clickCvFxRef.current = new Howl({ src: ['/effects/clickCvFx.mp3'], volume: 1.0 });
    hoverFxRef.current = new Howl({ src: ['/effects/hoverFx.mp3'], volume: 0.5 });
    toggleFxRef.current = new Howl({ src: ['/effects/toogleFx.mp3'], volume: 0.5 });
    whatsFxRef.current = new Howl({ src: ['/effects/whatsFx2.mp3'], volume: 0.3 });

    // pré-carregar música de fundo (mas não tocar automaticamente)
    bgSoundRef.current = new Howl({ src: ['/sounds/sound3.mp3'], volume: 0.4, loop: true });

    // garantir que Howler respeite estado inicial muted
    Howler.mute(muted);
  }, []); // rodar só no mount

  // controle mute
  const toggleMute = useCallback(() => {
    const newMuted = !Howler._muted;
    Howler.mute(newMuted);
    setMuted(newMuted);
    if (bgSoundRef.current) {
      if (newMuted) bgSoundRef.current.stop();
      else bgSoundRef.current.play();
    }
  }, []);

  // efeitos
  const handleClick = useCallback(() => clickFxRef.current?.play(), []);
  const handleCvClick = useCallback(() => clickCvFxRef.current?.play(), []);
  const handleHover = useCallback(() => hoverFxRef.current?.play(), []);
  const whatsupHover = useCallback(() => whatsFxRef.current?.play(), []);
  const handleToggleFx = useCallback(() => toggleFxRef.current?.play(), []);

  // animação dos icons (mantive a sua técnica)
  useEffect(() => {
    const toggleAnimateJump = () => {
      document.querySelectorAll('.animate-jump').forEach((element) => {
        element.classList.remove('animate-jump');
        // forçar reflow para reiniciar a animação
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        element.offsetWidth;
        element.classList.add('animate-jump');
      });
    };
    const intervalId = setInterval(toggleAnimateJump, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // funções de menu / tabs
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    clickFxRef.current?.play();
  }, []);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((s) => !s);
    clickFxRef.current?.play();
  }, []);

  const handleLightbulbClick = useCallback(() => {
    setBgColor((prev) => (prev === 'bg-gray-700' ? 'bg-gray-300' : 'bg-gray-700'));
    setLightbulbOn((s) => !s);
    toggleFxRef.current?.play();
  }, []);

  const techIcons = useMemo(() => ([
    <FaHtml5 className="w-7 h-7 text-orange-500" key="html" />,
    <FaCss3Alt className="w-7 h-7 text-blue-500" key="css" />,
    <FaJs className="w-7 h-7 text-yellow-500" key="js" />,
    <FaReact className="w-7 h-7 text-blue-400" key="react" />,
    <FaNodeJs className="w-7 h-7 text-green-500" key="node" />,
    <SiTailwindcss className="w-7 h-7 text-indigo-500" key="tw" />,
    <SiTypescript className="w-6 h-6 text-blue-600 my-0.5" key="ts" />
  ]), []);

  return (
    <>
      <Head>
        <title>Desenvolvedor Web React.Js | Matheus S. Lopes</title>
        <meta name="description" content="Desenvolvedor web especializado em React.js, Next.js, e Tailwind CSS. Criação de sites otimizados e responsivos para empresas e landing pages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/images/foto1.webp" as="image" fetchpriority="high" />
      </Head>

      <div className={`z-10 flex overflow-y-auto w-full max-w-full h-full min-h-screen bg-no-repeat items-start justify-center mx-auto bg-opacity-60 ${bgColor}`}>
        <div className="flex flex-col md:flex-row w-screen mx-auto max-w-6xl gap-4 px-2 md:px-4 py-2 md:py-4">

          {/* Sidebar (mantenho classes originais; ajusto z-index via style para evitar bloqueio) */}
          <div className="w-full justify-center md:max-w-1/4 items-center md:w-1/3 bg-white bg-opacity-80 rounded h-full p-4 sm:order-1 shadow-lg border-2 border-gray-400 relative"
            style={{ zIndex: 50 }}>

            {/* Volume button */}
            <button onClick={toggleMute} onMouseEnter={handleHover} title="Audio" aria-label="Audio">
              {muted ? <FaVolumeMute title='Ativar Efeitos Sonoros' className='text-gray-500 w-10 h-10 p-2 rounded-full hover:bg-white' /> : <FaVolumeUp title="Desativar Efeitos Sonoros" className='text-purple-500 w-10 h-10 p-2 rounded-full hover:bg-white' />}
            </button>

            <div className="flex mx-auto rounded-full w-40 h-40 will-change-transform">
              <Image
                src="/images/foto1.webp"
                alt="Foto do Matheus"
                width={320}
                height={320}
                priority
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="rounded-full transition-transform hover:scale-105 duration-300 will-change-transform"
              />
            </div>

            <div className="text-center pt-4">
              <h1 className="text-lg lg:text-xl text-white font-medium rounded-md p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
                Matheus S. Lopes
              </h1>
              <p className="text-sm md:text-md p-1 pt-2 text-gray-500">Bacharel em Ciência da Computação</p>
              <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />
              <div className="mt-2 animate-gradient">
                <h2 className="text-2xl">Desenvolvedor Web</h2>
                <h2 className="text-sm md:text-md lg:text-lg">React.js / Next.js / Tailwind.css</h2>
              </div>

              <div className="flex justify-center mt-2 pt-3">
                {techIcons.map((icon, i) => <IconJump key={i} icon={icon} delay={i * 0.2} />)}
              </div>

              <hr className="my-6 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              {/* Currículo: uso Link -> <a> para compatibilidade */}
              <Link href="/currículo.pdf" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" title="Abrir currículo em nova aba" onClick={handleCvClick}>
                  <button className="rounded-full shadow-md text-md mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-700 text-white transform transition hover:scale-105 duration-200 ease-in-out">
                    Currículo.pdf
                  </button>
                </a>
              </Link>

              <hr className="my-4 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              <div className="pt-4">
                <a href="https://api.whatsapp.com/send?phone=5519996750375" target="_blank" rel="noopener noreferrer" title="Entre em contato pelo WhatsApp"
                  onClick={handleClick} onMouseEnter={whatsupHover} className="group relative flex w-max mx-auto h-auto p-2 px-4 font-medium overflow-hidden rounded-lg bg-gray-100 text-md shadow-md">
                  <div className="absolute inset-0 w-2 bg-green-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <FaWhatsapp className="relative w-6 h-6 text-green-700 group-hover:text-white" />
                  <span className="relative text-gray-800 group-hover:text-white pl-1 my-auto">55 (19) 99675-0375</span>
                </a>
              </div>

              <div className="flex justify-center py-2 pt-10">
                <ul className="flex gap-4 md:gap-6">
                  <li onClick={handleClick}><a href="https://www.linkedin.com/in/matheus-dev-nextjs/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 transition hover:text-[#142039]"><SiLinkedin className="w-8 h-8 text-gray-500 hover:text-sky-600" /></a></li>

                  <li onClick={handleClick}><a href="https://app.netlify.com/teams/next-dev-frontend/sites" target="_blank" rel="noopener noreferrer" title="Netlify" className="text-gray-500 transition hover:text-green-800"><SiNetlify className="w-9 h-9 text-gray-500 hover:text-green-800" /></a></li>

                  <li onClick={handleClick}><a href="https://vercel.com/matheus-santos-lopes-projects" target="_blank" rel="noopener noreferrer" title="Vercel" className="text-gray-500 transition hover:text-black"><SiVercel className="w-8 h-8 text-gray-500 hover:text-black" /></a></li>

                  <li onClick={handleClick}><a href="https://github.com/next-dev-frontend" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-500 transition hover:text-[#142039]"><SiGithub className="w-8 h-8 text-gray-500 hover:text-gray-900" /></a></li>
                </ul>
              </div>

              <div className="text-md flex items-center justify-center gap-1 pt-6 pb-4">
                <FaMailBulk className="w-4 h-4 text-blue-500" />
                <a href="mailto:matheus.dev.frontend@gmail.com" onClick={handleClick} className="text-sm md:text-md text-gray-500 hover:text-blue-500 underline">matheus.dev.frontend@gmail.com</a>
              </div>

              <div className="text-sm md:text-md flex items-center justify-center gap-0 md:gap-1 my-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                <p className='text-gray-500'>Santo Antônio de Posse - SP</p>
              </div>

              <hr className="h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

              <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
                <div className="mx-auto w-full p-1 max-w-max rounded">
                  <p className="wrap rounded text-center text-xs text-gray-600">©2023. Todos os direitos reservados!</p>
                </div>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4 flex flex-col sm:order-2 text-sm md:text-md lg:text-lg z-30">
            <div className="flex justify-between items-center mb-2 w-full">
              <div className="md:hidden z-40">
                <button aria-label="menu de opções" className={`p-2 rounded-full shadow-md mb-2 transition-colors ${isMenuOpen ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-purple-500 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`} onClick={handleMenuToggle}>
                  {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
              </div>

              <div className={`z-10 hidden md:flex ${isMenuOpen ? 'hidden' : ''}`}>
                <button onClick={() => handleTabChange('tab1')} aria-label="Sobre o Matheus" className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Sobre</button>

                <button onClick={() => handleTabChange('tab2')} aria-label="Stack atual" className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Tecnologias</button>

                <button onClick={() => handleTabChange('tab3')} aria-label="Projetos recentes" className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Projetos</button>
              </div>

              <label htmlFor="lightbulb-toggle" className="relative h-8 w-14 cursor-pointer">
                <input onChange={handleLightbulbClick} checked={lightbulbOn} aria-label="Menu de opções" type="checkbox" id="lightbulb-toggle" className="peer sr-only" />
                <span className={`absolute inset-y-0 start-0 m-1 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white transition-all ${lightbulbOn ? 'peer-checked:start-6 peer-checked:text-white' : ''}`}>
                  {lightbulbOn ? <FaRegMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
                </span>
                <span className={`absolute inset-0 rounded-full shadow-md bg-white bg-opacity-80 transition ${lightbulbOn ? 'peer-checked:bg-white bg-opacity-90' : ''}`}></span>
              </label>

            </div>

            {/* Dropdown Menu para Mobile */}
            {isMenuOpen && (
              <div className="md:hidden absolute bg-transparent pl-11 pt-0 z-30">
                <div className="flex flex-col border-2 border-gray-100 rounded-md gap-2 p-2 items-center justify-center bg-purple-700 bg-opacity-80 shadow-md relative">
                  <button onClick={() => handleTabChange('tab1')} aria-label="Sobre o Matheus" className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Sobre</button>

                  <button onClick={() => handleTabChange('tab2')} aria-label="Stack atual" className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Tecnologias</button>

                  <button onClick={() => handleTabChange('tab3')} aria-label="Projetos recentes" className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}>Projetos</button>
                </div>
              </div>
            )}

            {/* Conteúdo das abas */}
            {activeTab === 'tab1' && <Sobre />}
            {activeTab === 'tab2' && <Tecnologias />}
            {activeTab === 'tab3' && <Projetos />}

          </div>
        </div>
      </div>

      {/* Footer quick links (mantive os hrefs originais) */}
      <div className={`flex right-0 w-full text-center justify-center gap-4 text-xs px-1 py-1 bg-gray-500 bg-opacity-50`}>
        <Link href="/termos" legacyBehavior><a onClick={handleClick} className='my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de uso" rel="noopener noreferrer">Termos &amp; Condições</a></Link>
        <Link href="/politica" legacyBehavior><a onClick={handleClick} className='my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="veja os termos de privacidade" rel="noopener noreferrer">Política de Privacidade</a></Link>
        <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" onClick={handleClick} className='my-auto no-underline hover:underline px-3 py-1 text-white bg-pink-700 bg-opacity-30 rounded-full' title="imagens by Pixabay">Áudio por Pixabay</a>
      </div>

      <SocialShare />
      <Analytics />
    </>
  );
}
