import Link from 'next/link';
import { FaCode, FaLaptopCode, FaReact, FaNodeJs, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { Howl } from 'howler';


const Tecnologias = () => {

  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 1.0,
  });

  const mouseHover = () => {
    hoverFx.play();
  };


  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 1.0,
  });

  const mouseClick = () => {
    clickFx.play();
  };


  const stacksData = [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      date: '2014',
      knowledge: 80,
      description: 'Linguagem de marcação para estruturar o conteúdo na web.',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
      description: 'Linguagem de estilo para descrever a apresentação de um documento HTML.',
      knowledge: 60,
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      description: 'Linguagem de programação de alto nível.',
      knowledge: 50,
    },
    {
      icon: <FaReact />,
      name: 'React.js',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário.',
      knowledge: 40,
    },
    {
      icon: <TbBrandNextjs />,
      name: 'Next.js',
      description: 'Framework React para desenvolvimento de aplicações web.',
      knowledge: 40,
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
      description: 'Framework CSS utilitário para desenvolvimento rápido.',
      knowledge: 30,
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      description: 'Ambiente de execução JavaScript server-side.',
      knowledge: 10,
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
      description: 'Superset do JavaScript que adiciona tipagem estática.',
      knowledge: 25,
    },

  ];


  return (
    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">

      <div className="rounded">
        <h2 className="flex p-2 pt-4 text-3xl md:text-4xl md:text-left">
          <span className="pr-4"><FaCode className="w-9 h-9 md:w-10 md:h-10 text-pink-500" /></span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>Tecnologias que utilizo</span>
        </h2>

        <div className="p-2 pt-4 pb-8 text-justify text-lg md:text-xl">
          <p className="indent-8">
            Nesta sessão eu mostrarei quais são as tecnologias que mais utilizo e o nível de experiência que tenho
            em cada uma delas. Lembrando que avaliar o nível de conhecimento de uma linguagem não é algo tão simples,
            pois a quantidade de conteúdo e informações de tais tecnologias podem ser extremamente grandes e complexas, e exigem
            muito tempo de estudo e prática. Minha intensão principal aqui é mostrar um pouco do que sei sobre cada linguagem e
            informar quais linguagens tenho mais experiencia em relação as outras.
            Não pretendo destacar todas as linguagens e ferramentas que já utilizei desde que comecei a programar. Vou focar
            nas tecnologias que venho trabalhando no momento atual.
          </p>
        </div>

        <div className="flex w-full py-4 mx-auto items-center justify-center bg-black font-bold text-white border-4 border-dashed border-white">
          <div className=" text-center space-y-12">
            <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                <span className="animate-word col-span-full row-span-full">React.js</span>
                <span className="animate-word-delay-1 col-span-full row-span-full">Desenvolvedor Web</span>
                <span className="animate-word-delay-2 col-span-full row-span-full">Tailwind</span>
                <span className="animate-word-delay-3 col-span-full row-span-full">Typescript</span>
                <span className="animate-word-delay-4 col-span-full row-span-full">Next.js</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex p-2 pt-12 text-3xl md:text-4xl md:text-left">
          <span className="animate-bounce pr-4"><FaLaptopCode className="w-9 h-9 md:w-10 md:h-10 text-pink-500" /></span>{" "}
          <span className='inline-block overflow-hidden whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>
            Minha stack atual
          </span>
        </h2>

        <div className="flex flex-col space-y-4 py-8">
          {stacksData.map((stack, index) => (
            <div key={index} className="flex items-center space-x-4 py-0">

              <div className='w-full'>
                <div className="flex text-4xl text-pink-500 pb-2">{stack.icon}
                  <h3 className="text-2xl md:text-3xl text-purple-500 px-2 font-semibold">{stack.name}</h3>
                </div>

                <hr className="h-0.5 w-1/3 bg-pink-500" />

                <p className="text-sm md:text-md font-bold text-indigo-600 pt-4">Descrição da linguagem:</p>
                <p className="text-md md:text-lg text-gray-600">{stack.description}</p>


                <p className="text-sm md:text-md font-bold text-indigo-600 pt-4">Nível de conhecimento desde {stack.date}.</p>
                <div className="flex items-center">
                  <span className="mr-2">{stack.knowledge}%</span>
                  <div className="w-64 bg-gray-100 rounded-md">
                    <div
                      className="bg-purple-500 text-white rounded-md py-1 text-center"
                      style={{ width: `${stack.knowledge}%` }}
                    >
                    </div>
                  </div>

                </div>



                <p className="text-sm md:text-md font-bold text-indigo-600 pt-4">conhecimentos específicos:</p>

                <br /><br />
              </div>
            </div>
          ))}
        </div>

        <div className="p-2 pt-4 text-justify text-lg md:text-xl">
          <p className="indent-8">
            Para saber mais sobre as linguagens que já programei e meu histórico profissional, veja aqui o meu currículo, onde destaco
            minha jornada como programador e empresário no ramo de TI, desde o ano 2000.
          </p>
        </div>
      </div>

      <div className='w-full text-center pt-8 pb-4'>
        <Link href="../currículo.pdf" className='w-full items-center' title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>
          <button
            className="rounded-full shadow-md text-md mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-600 text-white transform transition hover:scale-105 duration-200 ease-in-out"
            onClick={mouseClick}
            onMouseEnter={mouseHover}
          >
            Currículo.pdf
          </button>
        </Link>
      </div>


    </div >
  );
};

export default Tecnologias;