import Image from "next/legacy/image";
import Link from 'next/link';
import { Howl } from 'howler';
import dynamic from "next/dynamic";
const Lighthouse = dynamic(() => import('../components/Lighthouse'));

const Sobre = () => {

  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 1.0,
  });

  const handleHover = () => {
    hoverFx.play();
  };

  //efeitos sonoros de clicks
  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 1.0,
  });
  //controle de som dos elementos
  const handleClick = () => {
    clickFx.play();
  };

  return (

    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">

      <div className="rounded">
        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl md:text-left">
          <span className="animate-waving-hand">👋🏻 &nbsp;</span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>Seja bem-vindo&#40;a&#41;,</span>
        </h2>
        <br />

        <div className="p-2 text-justify text-md md:text-lg lg:text-xl">
          <p className="indent-8">
            É um grande prazer recebê-lo&#40;a&#41; aqui. Meu nome é Matheus,
            tenho 43 anos e possuo graduação em Ciência
            da Computação desde o ano de 2016, trilho uma jornada
            que se reinventou no final de 2020 quando tive meu primeiro contato com o <Link onMouseEnter={handleHover} onMouseClick={handleClick} href="https://nextjs.org/" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Next.js</Link>, e
            logo em seguida, com <Link onMouseEnter={handleHover} onMouseClick={handleClick} href="https://tailwindcss.com/" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Tailwind</Link> e
            o <Link onMouseEnter={handleHover} onMouseClick={handleClick} href="https://learn.microsoft.com/pt-br/training/paths/build-javascript-applications-typescript" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Typescript</Link>.
          </p>

          <p className="indent-8 pt-4">
            Sempre me aventurei em conhecer novas linguagens e tecnologias que vinham
            surgindo ao longo do tempo, e confesso que já havia programado
            para web no passado e minha experiência não foi das mais agradáveis.
            Me lembro que a padronização de código era menos rigorosa, os navegadores
            possuiam diferentes interpretações de códigos para HTML e CSS e ainda tínhamos
            poucas fontes sólidas de informação na internet, pois a mesma, ainda dava
            seus passos iniciais. Os livros eram um pouco caros e muito disputados nas
            bibliotecas. Neste período eu me interessava mais por programação desktop e
            acabei abandonando de vez a programação web.
          </p>

          <div className="flex items-center justify-center py-8">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="group box w-96 h-96 [perspective:1000px]">
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

          <p className="indent-8 pt-4">
            Com o avanço significativo da internet dos anos 2000 até os tempos atuais,
            somado ao surgimento de bibliotecas e frameworks modernos, como React.js e
            Next.js, e agora também com tecnologias de inteligência artificial, além
            de diversas ferramentas e aplicações online, desenvolver para web está se
            tornando cada vez mais inspirador e gratificante. Isso tudo me motivou a seguir
            firme novamente no caminho da programação web afim de me consolidar no mercado de trabalho.
          </p>

        </div>

        <br />

        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl justify-center">
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold font-mono animate-typing border-r-4 text-indigo-500'>
            Tecnologias e Projetos
          </span>
        </h2>

        <div className="indent-8 p-2 text-justify w-full">

          <div className="text-justify text-md md:text-lg lg:text-xl">
            <p className="indent-8 pt-4">
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
        <br />

        <div className="indent-8 p-2 text-justify w-full">

          <div className="text-justify text-md md:text-lg lg:text-xl">
            <p className="indent-8 pt-4 pb-2">
              Nos últimos três anos, eu estudei muito sobre programação web front-end e também sobre segurança web,
              entendendo toda estrutura de um projeto next.js e aplicando as melhores práticas aos meus projetos.
              Tenho muito ainda para desvendar, más acredito que estou seguindo o caminho certo. Meu próximo passo
              agora é desenvolver websites e aplicativos que utilizem o back-end, pois pretendo me tornar um programador
              full stack.
            </p>
          </div>

        </div>
        <br />










        <div className="p-2 text-justify text-md md:text-lg lg:text-xl">
          <p className="p-2 pt-8 text-justify">
            🚀 Neste espaço, convido vocês a explorar mais sobre minha
            formação e histórico profissional, as linguagens e metodologias
            que utilizo, além de acesso a códigos fonte de alguns projetos e
            componentes Next.js que tive a alegria de criar.
          </p>
        </div>

      </div>

      <div className="p-2 text-justify text-md md:text-lg lg:text-xl">

        <p className="indent-8 p-2 pb-6 text-justify">
          É com entusiasmo que compartilho fragmentos da minha trajetória.
          Cada projeto representa uma oportunidade de crescimento e aprendizado,
          onde eu sempre tento explorar e absorver o máximo de informações.
          Estou muito animado com os resultados que venho alcançando com estas
          incríveis tecnologias e anseio pelo que o horizonte tecnológico nos reserva.
        </p>

        <p className="p-2 pb-6">
          Com estima, <br />
          Matheus
        </p>
      </div>

    </div>
  );
}
export default Sobre;