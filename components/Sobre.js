import { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import { Howl } from 'howler';
import dynamic from "next/dynamic";
const Lighthouse = dynamic(() => import('../components/Lighthouse'));

const Sobre = () => {

  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 1.0,
  });

  const imgHover = () => {
    hoverFx.play();
  };

  return (

    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">

      <div className="rounded">
        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl md:text-left">
          <span className="animate-waving-hand">👋🏻 &nbsp;</span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>Sejam todos bem-vindos,</span>
        </h2>
        <br />

        <div className="p-2 text-justify text-lg md:text-xl lg:text-2xl">
          <p className="indent-8">
            É um grande prazer recebê-los aqui. Meu nome é Matheus,
            tenho 43 anos e possuo graduação em Ciência
            da Computação desde o ano de 2016, trilho uma jornada
            que se reinventou no final de 2020 quando tive meu primeiro
            contato com o Next.js. Sempre me aventurei em conhecer
            novas linguagens e tecnologias que vinham surgindo ao
            longo do tempo, e confesso que já havia programado
            para web no passado e não gostei muito da experiência.
            Me lembro que tudo era complexo e tínhamos poucas fontes de
            informação sobre as linguagens, e a internet ainda estava dando seus passos iniciais.
            Com o surgimento de bibliotecas e frameworks modernos, como React e Next,
            e agora também com tecnologias de inteligência artificial, além de diversas
            ferramentas e aplicações, desenvolver para web está se tornando cada vez mais
            inspirador e gratificante.
          </p>

        </div>

        <br />

        <h3 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl justify-center">
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold font-mono animate-typing border-r-4 text-indigo-500'>
            Tecnologias e Projetos
          </span>
        </h3>

        <div className="indent-8 p-2 text-justify text-lg md:text-xl lg:text-2xl">
          <div className="flex items-center justify-center py-8">
            <div onMouseEnter={imgHover} onMouseLeave={imgHover} className="group box w-96 h-96 [perspective:1000px]">
              <div className="relative content h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <Image
                    src="/banners/bg-nextjs.webp"
                    alt="nextjs imagem"
                    width={500}
                    height={500}
                    layout="responsive"
                    objectFit="cover"
                    className="h-full w-full rounded-xl object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Image
                    src="/banners/bg2-nextjs.webp"
                    alt="nextjs imagem"
                    width={500}
                    height={500}
                    layout="responsive"
                    objectFit="cover"
                    className="h-full w-full rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 text-justify text-lg md:text-xl lg:text-2xl">
            <p>
              Atualmente, decidi enveredar pelo mundo da programação web,
              abraçando tecnologias contemporâneas como React/Next.js,
              TailwindCSS e TypeScript, para dar vida a sites e aplicativos web
              de forma mais eficiente e robusta, presando pela máxima segurança,
              buscando a melhor classificação de SEO, aplicando responsividade e acessibilidade,
              seguindo as melhores práticas de programação para obter o melhor desempenho
              possível nas aplicações.
            </p>
          </div>

        </div>
        <br />

        <Lighthouse />

        <div className="p-2 text-justify text-lg md:text-xl lg:text-2xl">
          <p className="p-2 py-2 pt-8 text-justify text-lg md:text-xl lg:text-2xl">
            🚀 Neste espaço, convido vocês a explorar mais sobre minha
            formação e histórico profissional, as linguagens e metodologias
            que utilizo, além de acesso a códigos fonte de alguns projetos e
            componentes Next.js que tive a alegria de criar.
          </p>
        </div>

      </div>

      <div className="p-2 text-justify text-lg md:text-xl lg:text-2xl">

        <p className="indent-8 p-2 pb-6 pt-8 text-justify text-lg md:text-xl lg:text-2xl">
          É com entusiasmo que compartilho fragmentos da minha trajetória.
          Cada projeto representa uma oportunidade de crescimento e aprendizado,
          onde eu sempre tento explorar e absorver o máximo de informações.
          Estou muito animado com os resultados que venho alcançando com estas
          incríveis tecnologias e anseio pelo que o horizonte tecnológico nos reserva.
        </p>

        <p className="p-2 pb-6 text-lg md:text-xl lg:text-2xl">
          Com estima, <br />
          Matheus
        </p>
      </div>

    </div>
  );
}
export default Sobre;