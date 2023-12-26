import Image from "next/legacy/image";
import Link from 'next/link';
import { PiHandPalmBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { GiJourney } from "react-icons/gi";
import { useSoundEffects } from '../components/SoundEffects';
import dynamic from "next/dynamic";
const Lighthouse = dynamic(() => import('../components/Lighthouse'));

const Sobre = () => {
  const { playClickFx, playHoverFx } = useSoundEffects();

  return (

    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">

      <div className="rounded">
        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl md:text-left">
          <span className="animate-waving-hand pr-4"><PiHandPalmBold className="w-11 h-11 text-gray-500" /></span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>Seja bem-vindo&#40;a&#41;,</span>
        </h2>

        <div className="p-2 text-justify text-md md:text-lg lg:text-xl">
          <p className="indent-8">
            É um grande prazer recebê-lo&#40;a&#41; aqui. Meu nome é Matheus,
            tenho 43 anos e possuo graduação em Ciência
            da Computação desde o ano de 2016, trilho uma jornada
            que se reinventou no final de 2020 quando tive meu primeiro contato com o <Link onMouseEnter={playHoverFx} onClick={playClickFx} href="https://nextjs.org/" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Next.js</Link>, e
            logo em seguida, com <Link onMouseEnter={playHoverFx} onClick={playClickFx} href="https://tailwindcss.com/" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Tailwind</Link> e
            o <Link onMouseEnter={playHoverFx} onClick={playClickFx} href="https://learn.microsoft.com/pt-br/training/paths/build-javascript-applications-typescript" className="text-pink-500 decoration-2 decoration-purple-500 hover:underline" title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>Typescript</Link>.
          </p>

          <p className="indent-8 pt-4">
            Neste espaço, convido você a explorar mais sobre minha
            formação e histórico profissional, as linguagens e metodologias
            que utilizo, além de acesso a códigos fonte de alguns projetos e
            componentes Next.js que tive a alegria de criar.
          </p>
          <br />

          <h2 className="flex pt-8 text-2xl md:text-3xl lg:text-4xl md:text-left">
            <span className="pr-4"><AiFillHtml5 className="w-11 h-11 text-gray-500" /></span>{" "}
            <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>De volta pra WEB</span>
          </h2>

          <p className="indent-8 pt-4">
            Sempre me aventurei em conhecer novas linguagens e tecnologias que vinham
            surgindo ao longo do tempo, e confesso que já havia programado
            para web no passado e minha experiência não foi muito agradável.
            Me lembro que a padronização de código era menos rigorosa, os navegadores
            possuiam diferentes interpretações de códigos para HTML e CSS e ainda tínhamos
            poucas fontes sólidas de informação na internet, pois a mesma, ainda dava
            seus passos iniciais. Os livros eram um pouco caros e muito disputados nas
            bibliotecas. Neste período eu me interessava mais por programação desktop e
            acabei abandonando de vez a programação web. Anos depois, eu me deparei com
            o poderoso react.js aliado ao next.js e me encontrei mergulhando novamente no
            desenvolvimento web, só que desta vez, com uma empolgação única que nunca havia
            sentido com outras linguagens.
          </p>

          <div className="flex items-center justify-center py-8">
            <div onMouseEnter={playHoverFx} onMouseLeave={playHoverFx} className="group box w-96 h-96 [perspective:1000px]">
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

        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl justify-left">
          <span className="pr-4"><FaReact className='w-11 h-11 text-gray-500' /></span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold font-mono animate-typing border-r-4 text-indigo-500'>
            Tecnologias Atuais
          </span>
        </h2>

        <div className="indent-8 p-2 text-justify w-full">

          <div className="text-justify text-md md:text-lg lg:text-xl">
            <p className="indent-8">
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
              Nos últimos três anos, segui estudando programação web &#40;principalmente front-end&#41;,
              SEO para otimização em motores de busca, webdesign para criação visual dos sites,
              marketing digital para divulgação em diversas plataformas e redes sociais,
              segurança de websites seguindo as melhores práticas da CSP, aplicando testes e entendendo
              toda estrutura de projetos next.js. Tenho muito ainda para desvendar, más acredito que
              estou seguindo o caminho certo. Meu próximo passo agora é desenvolver websites e aplicativos
              que utilizem o back-end, pois pretendo me tornar um programador react full stack.
            </p>
          </div>

        </div>
        <br />

        <h2 className="flex p-2 pt-4 text-2xl md:text-3xl lg:text-4xl justify-left">
          <span className="pr-4"><GiJourney className='w-11 h-11 text-gray-500' /></span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold font-mono animate-typing border-r-4 text-indigo-500'>
            Trajetória profissional
          </span>
        </h2>

        <div className="indent-8 p-2 text-justify w-full">

          <div className="text-justify text-md md:text-lg lg:text-xl">
            <p className="indent-8">
              Acesse o meu currículo no botão abaixo para saber mais sobre minha trajetória
              como programador e como empresário no setor de TI, além de mais detalhes sobre minha formação
              e as linguagens e ferramentas que utilizo e que já tive contato no passado.
            </p>
          </div>

        </div>

        <div className='w-full text-center pt-8 pb-4'>
          <Link href="../currículo.pdf" className='w-full items-center' title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>
            <button
              className="rounded-full shadow-md text-md mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-600 text-white transform transition hover:scale-105 duration-200 ease-in-out"
              onClick={playClickFx}
              onMouseEnter={playHoverFx}
            >
              Currículo.pdf
            </button>
          </Link>
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