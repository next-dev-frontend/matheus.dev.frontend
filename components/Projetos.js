import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { SiPwa } from "react-icons/si";
import { Howl } from 'howler';

const Projetos = () => {
  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 0.5,
  });

  const mouseClick = () => {
    clickFx.play();
  };

  const projects = [
    {
      title: 'About Insurances',
      image: '/banners/site2.webp',
      description: 'Site que criei para fins de estudo e prática no desenvolvimento web com next.js na criação de páginas dinamicas. Em tempo de desenvolvimento é possível criar artigos facilmente. Criei uma página que ao acessar, é possível adicionar textos e elementos html para gerar artigos. Baixe o código no github e execute o projeto. Em seguida, acesse a seguinte página http://localhost:3000/protected e adicione a senha 123 para ver e testar o conteúdo.',
      button1Text: 'GitHub',
      button1Link: 'https://github.com/next-dev-frontend/aboutinsurances',
      button2Text: 'Acessar Site',
      button2Link: 'https://aboutinsurances.netlify.app/',
      priority: false,
      loading: 'lazy'
    },
    {
      title: 'Convert Text To Html',
      image: '/banners/site3.webp',
      description: 'Site desenvolvido para converter textos em código html, podendo ser estilizado com css ou tailwind. Também com o intúito de praticar programação com react.js, next.js e tailwind.css, esse site foi criado para gerar códigos html a serem utilizados na criação de artigos de forma dinâmica no meu outro projeto About Insurances. Acesse o site e faça um teste agora mesmo.',
      button1Text: 'GitHub',
      button1Link: 'https://github.com/next-dev-frontend/convertext',
      button2Text: 'Acessar Site',
      button2Link: 'https://converttohtml.netlify.app/',
      priority: false,
      loading: 'lazy'
    },
    {
      title: 'Escolinha Bíblica',
      image: '/banners/site4.webp',
      description: 'Esse foi meu último trabalho como freelancer. Desenvolvido em 2024 para um produtor de conteúdo digital, o site possui diversas páginas de venda com otimização de SEO, segurança máxima CSP e CloudFlare, responsividade e acessibilidade, além de excelente performance. Fizemos testes de escalabilidade e o site se mostrou muito eficiente, suportando alto numero de acessos e transações simultâneas. O código-fonte não está disponível.',
      button1Text: 'X',
      button2Text: 'Acessar Site',
      button2Link: 'https://escolinhabiblicainfantil.com.br/',
      priority: false,
      loading: 'lazy'
    },
    {
      title: 'Consultoria Ambiental',
      image: '/banners/site1.webp',
      description: 'Site institucional desenvolvido para uma empresa de consultoria ambiental. Foi meu primeiro trabalho como autônomo. O projeto estava em fase final de desenvolvimento, más, infelizmente a empresa desistiu devido os custos de domínio e hospedagem, pois estavam passando por um momento de dificuldade. Não tenho permissão para divulgar o site e seu respectivo código-fonte. Deixei apenas uma prévia estática para visualização.',
      button1Text: 'X',
      button2Text: 'X',
      priority: true,
      loading: 'eager'
    },
  ];

  const [imageLoaded, setImageLoaded] = useState(Array(projects.length).fill(false));
  const [imagePositions, setImagePositions] = useState(Array(projects.length).fill(0)); // Posições de cada imagem
  const [isScrolling, setIsScrolling] = useState(Array(projects.length).fill(false)); // Controle do scroll

  const handleImageLoad = (index) => {
    setImageLoaded(prevState => {
      const newState = [...prevState];
      newState[index] = true; // Marca a imagem como carregada
      return newState;
    });
  };

  const handleMouseEnter = (index) => {
    setIsScrolling(prevState => {
      const newState = [...prevState];
      newState[index] = true; // Começa a rolar quando o mouse entra
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsScrolling(prevState => {
      const newState = [...prevState];
      newState[index] = false; // Para o scroll ao sair
      return newState;
    });
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setImagePositions(prevPositions => {
        return prevPositions.map((position, index) => {
          if (isScrolling[index]) {
            // Deslocar a imagem para baixo
            return Math.min(position + 1, 92); // Limita a 100%
          } else {
            // Para as imagens que não estão rolando, mover de volta
            return Math.max(position - 1, 0); // Move de volta ao topo, mas nunca abaixo de 0
          }
        });
      });
    }, 170); //frequência do scroll

    return () => clearInterval(scrollInterval); // Limpar o intervalo ao desmontar o componente
  }, [isScrolling]); // Dependência do isScrolling

  return (
    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">
      <div className="rounded">

        <h2 className="p-2 pt-4 pb-6 text-justify text-lg md:text-xl">
          <p className="indent-8">
            Confira abaixo alguns sites que desenvolvi utilizando React.js com Next.js e Tailwind.css. Alguns estão em produção e com código disponível para download.
          </p>
        </h2>

        <div className="flex pb-4 md:pb-8 justify-center">
          <span className="pr-2"><SiPwa className="w-12 h-12 md:w-14 md:h-14 text-pink-600" /></span>
          <span className='pt-1 font-bold text-3xl md:text-4xl text-indigo-500 font-sans'>
            Next.Js
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {projects.map((project, index) => (

            <div key={index} className="px-2 py-6 bg-indigo-200 border-0.5 border-pink-500 rounded-lg flex flex-col items-center">

              {/* Navegação / barra de endereço */}
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-t-lg w-full text-center">
                <span className="p-1 px-4 font-bold text-white">{project.title}</span>
              </div>

              {/* Contêiner de imagem */}
              <div className="relative w-full mb-4 overflow-hidden h-64 border-l-2 border-r-2 border-b-2 border-indigo-500">
                <div className="absolute right-0 top-0 h-full w-2 bg-gray-300">
                  <div className="h-0" style={{ height: imagePositions[index] + '%' }} />
                </div>
                <Image
                  id={`image-${index}`} // ID único para cada imagem
                  src={project.image}
                  alt={`Imagem do ${project.title}`}
                  width={400}
                  height={600}
                  priority={project.priority}
                  loading={project.loading}
                  onLoad={() => handleImageLoad(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transform: `translateY(-${imagePositions[index]}%)`,
                  }}
                  className={`transition-opacity duration-500 ease-in-out ${imageLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <p className="text-gray-600 mb-6 px-3 text-justify indent-8">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.button1Link}
                  rel="noopener noreferrer"
                  target='_blank'
                  className="bg-gray-900 text-white font-bold py-2 px-4 shadow-md rounded-full transform transition hover:scale-105 duration-200 ease-in-out"
                  onClick={mouseClick}
                >
                  {project.button1Text}
                </a>
                <a
                  href={project.button2Link}
                  rel="noopener noreferrer"
                  target='_blank'
                  className="bg-pink-600 text-white font-bold py-2 px-4 shadow-md rounded-full transform transition hover:scale-105 duration-200 ease-in-out"
                  onClick={mouseClick}
                >
                  {project.button2Text}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-justify text-lg md:text-xl pt-8 pb-4">
          <p className="indent-8">
            Em breve adicionarei mais projetos, códigos-fonte e alguns componentes react.js que criei.
          </p>

          <p className="indent-8 pt-6">
            Espero realmente que tenha gostado deste conteúdo. Sinta-se livre para baixar os códigos e utilizar livremente, e também para acessar os sites. Grande abraço!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
