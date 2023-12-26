import React, { useState } from 'react';
import { FaSun, FaRegMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Howl, Howler } from 'howler';
import dynamic from 'next/dynamic';
import Sobre from './Sobre';
import Tecnologias from './Tecnologias';
import Projetos from './Projetos';

interface MenuProps {
  onBgColorChange: (color: string) => void;
}


const Menu: React.FC<MenuProps> = ({ onBgColorChange }) => {
  const [bgColor, setBgColor] = useState('bg-gray-700');
  const [activeTab, setActiveTab] = useState('tab1');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lightbulbOn, setLightbulbOn] = useState(false);

  //efeitos sonoros de clicks
  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 1.0,
  });


  //efeitos sonoro de hover
  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 1.0,
  });

  //efeito sonoro no botão luz
  const toogleFx = new Howl({
    src: ['../effects/toogleFx.mp3'],
    volume: 0.8,
  });




  //controle de som dos elementos
  const handleClick = () => {
    clickFx.play();
  };


  const handleHover = () => {
    hoverFx.play();
  };


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
    const newColor = bgColor === 'bg-gray-300' ? 'bg-gray-700' : 'bg-gray-300';
    setBgColor(newColor);
    setLightbulbOn(!lightbulbOn);
    onBgColorChange(newColor);
    toogleFx.play();
  };



  return (


    <div className="w-full md:w-3/4 flex flex-col sm:order-2 text-sm md:text-md lg:text-lg z-30">

      <div className="flex justify-between items-center mb-2 w-full">

        <div onMouseEnter={handleHover} className="md:hidden z-40">
          <button
            className={`p-2 rounded-full shadow-md mb-2 transition-colors ${isMenuOpen ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-purple-500 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        <div className={`z-10 hidden md:flex ${isMenuOpen ? 'hidden' : ''}`}>
          <button
            className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
            onClick={() => handleTabChange('tab1')}
            onMouseEnter={handleHover}
          >
            Sobre
          </button>

          <button
            className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
            onClick={() => handleTabChange('tab2')}
            onMouseEnter={handleHover}
          >
            Tecnologias
          </button>

          <button
            className={`rounded-full shadow-md mr-2 mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
            onClick={() => handleTabChange('tab3')}
            onMouseEnter={handleHover}
          >
            Projetos
          </button>

        </div>

        <label onMouseEnter={handleHover} htmlFor="lightbulb-toggle" className="relative h-8 w-14 cursor-pointer">
          <input
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
        <div className="md:hidden absolute bg-transparent pl-12 pt-0 z-30">
          <div className="flex flex-col border-2 border-gray-100 rounded-md gap-2 p-2 items-center justify-center bg-indigo-900 bg-opacity-80 shadow-md relative">

            <button
              className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab1' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
              onClick={() => handleTabChange('tab1')}
              onMouseEnter={handleHover}
            >
              Sobre
            </button>

            <button
              className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab2' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
              onClick={() => handleTabChange('tab2')}
              onMouseEnter={handleHover}
            >
              Tecnologias
            </button>

            <button
              className={`rounded-full w-full max-w-full mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal transition-colors ${activeTab === 'tab3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white bg-opacity-80 text-gray-800 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'}`}
              onClick={() => handleTabChange('tab3')}
              onMouseEnter={handleHover}
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


  );
};

export default Menu;