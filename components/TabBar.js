import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMailBulk, FaMapMarkerAlt, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaRegLightbulb, FaBars, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic';
const Sobre = dynamic(() => import('./Sobre'));
const Projetos = dynamic(() => import('./Projetos'));
import { SiGithub, SiLinkedin, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

const TabBar = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [bgColor, setBgColor] = useState('bg-gray-800');
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTextVisible(true);
    }, 100);

    return () => {
      clearTimeout(textTimeout);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Fechar o menu quando um item for selecionado
  };

  const handleLightbulbClick = () => {
    setBgColor((prevColor) => (prevColor === 'bg-white' ? 'bg-gray-800' : 'bg-white'));
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex w-full items-start justify-center mx-auto max-w-full h-full sm:h-screen ${bgColor} ${textVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className={`flex flex-col sm:flex-row w-full mx-auto max-w-5xl gap-4 p-4`}>

        {/* Sidebar (Mobile: Below) */}
        <div className="w-full justify-center min-w-fit md:max-w-1/4 items-center sm:w-1/3 bg-gray-200 rounded h-full p-4 sm:order-1 border-2 border-gray-400 relative">

          <div className="flex mx-auto border-4 border-gray-500 border-dashed rounded-full mb-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 hover:scale-110 transform transition-transform">
            <Image
              src="/logos/foto-matheus.webp"
              alt="logo about insurances"
              width={512}
              height={512}
              priority
              className="rounded-full" />
          </div>

          <div className={"text-center"}>

            <p className="text-sm md:text-md lg:text-lg border rounded p-1 bg-gray-100 shadow-md">
              Matheus S. Lopes
            </p>
            <p className="text-xs p-1 text-gray-500">
              Bacharelado em Ciência da Computação, 2016.
            </p>


            <div className="mt-2 animate-gradient">
              <p className="text-md md:text-lg lg:text-xl lg:text-2xl">
                Dev. Frontend
              </p>
              <p className="text-sm md:text-md lg:text-lg">
                React.js / Next.js / Tailwind
              </p>
            </div>

            <div className="flex justify-center mt-2">
              <FaHtml5 className="text-orange-500 mx-2" />
              <FaCss3Alt className="text-blue-500 mx-2" />
              <FaJs className="text-yellow-500 mx-2" />
              <FaReact className="text-blue-400 mx-2" />
              <FaNodeJs className="text-green-500 mx-2" />
              <SiTailwindcss className="text-indigo-500 mx-2" />
              <SiTypescript className="text-blue-600 mx-2" />
            </div>

            <hr className="my-6 h-0.5 w-5/6 mx-auto border-0 bg-gray-300 opacity-100 shadow-lg" />

            <div className="text-xs flex items-center justify-left gap-1 my-3">
              <FaWhatsapp className="w-4 h-4 text-green-500" />
              <Link href="https://api.whatsapp.com/send?phone=5519996750375" title="Entre em contato pelo WhatsApp" rel="noopener noreferrer" target='_blank'>
                <p className='text-gray-500 hover:underline'>55 (19) 99675-0375</p>
              </Link>
            </div>

            <div className="text-xs flex items-center justify-left gap-1">
              <FaMailBulk className="w-4 h-4 text-blue-500" />
              <Link href="mailto:matheus.dev.frontend@gmail.com" title="Envie uma menagem por e-mail" >
                <p className='text-gray-500 hover:underline'>matheus.dev.frontend@gmail.com</p>
              </Link>
            </div>

            <div className="text-xs flex items-center justify-left gap-0 md:gap-1 my-3">
              <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
              <p className='text-gray-500'>Santo Antônio de Posse - SP</p>
            </div>

            <div className="flex justify-center py-2">
              <ul className="flex gap-4 md:gap-6">
                <li>
                  <a
                    href="#home"
                    title="GitHub"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:text-[#142039]"
                  >
                    <span className="sr-only">GitHub</span>
                    <SiGithub className="w-6 h-6 text-gray-500 hover:text-gray-800" />
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    title="Vercel"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:text-[#142039]"
                  >
                    <span className="sr-only">Vercel</span>
                    <SiVercel className="w-6 h-6 text-gray-500 hover:text-gray-800" />
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    title="LinkedIn"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:text-[#142039]"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <SiLinkedin className="w-6 h-6 text-gray-500 hover:text-gray-800" />
                  </a>
                </li>
              </ul>
            </div>

            <hr className="my-2 h-0.5 border-0 bg-gray-300 opacity-100" />

            <div className='pt-2'>
              <div className="bg-gray-100 mx-auto w-full p-1 max-w-max rounded">
                <p className="wrap rounded text-center text-xs text-gray-600">
                  ©2023. Todos os direitos reservados!
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* Content */}
        <div className="w-full sm:w-3/4 flex flex-col sm:order-2 text-sm md:text-md lg:text-lg">
          {/* Tab Bar */}
          <div className="flex justify-between items-center mb-2 w-full"> {/* Alteração na classe justify-left para justify-between e adição da classe items-center */}

            <div className="md:hidden z-20">
              <button
                className="p-2 rounded-full mb-2 text-gray-600 bg-gray-200 hover:bg-gray-300 transition"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>

            <div className={`hidden md:flex ${isMenuOpen ? 'hidden' : ''}`}>
              <button
                className={`rounded-full mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                onClick={() => handleTabChange('tab1')}
              >
                Sobre
              </button>

              <button
                className={`rounded-full mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                onClick={() => handleTabChange('tab2')}
              >
                Projetos
              </button>

              <button
                className={`rounded-full mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                onClick={() => handleTabChange('tab3')}
              >
                Stack
              </button>

              <button
                className={`rounded-full mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab4' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                onClick={() => handleTabChange('tab4')}
              >
                Contato
              </button>
            </div>

            <button
              className="p-2 rounded-full mb-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
              onClick={handleLightbulbClick}
            >
              <FaRegLightbulb className="w-6 h-6" />
            </button>
          </div>


          {/* Dropdown Menu para Dispositivos Móveis */}
          {isMenuOpen && (
            <div className="md:hidden absolute bg-transparent pl-12 pt-0 z-10">
              <div className="flex flex-col border-4 rounded-md gap-2 p-2 items-center justify-center bg-gray-800 shadow-md relative">

                <button
                  className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                  onClick={() => handleTabChange('tab1')}
                >
                  Sobre
                </button>

                <button
                  className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                  onClick={() => handleTabChange('tab2')}
                >
                  Projetos
                </button>

                <button
                  className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                  onClick={() => handleTabChange('tab3')}
                >
                  Stack
                </button>

                <button
                  className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab4' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 cursor-pointer'}`}
                  onClick={() => handleTabChange('tab4')}
                >
                  Contato
                </button>
              </div>
            </div>
          )}


          {/* Tab Content */}
          {activeTab === 'tab1' && (

            <Sobre />

          )}
          {activeTab === 'tab2' && (

            <Projetos />

          )}
          {activeTab === 'tab3' && (

            <p className="text-xl text-center">Tab 3 Content</p>

          )}
          {activeTab === 'tab4' && (

            <p className="text-xl text-center">Tab 4 Content</p>

          )}
        </div>

      </div>

    </div>


  );
};

export default TabBar;