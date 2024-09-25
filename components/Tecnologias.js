import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaMinus, FaLaptopCode, FaReact, FaNodeJs, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { Howl } from 'howler';

const Tecnologias = () => {
  const hoverFx = new Howl({
    src: ['../effects/hoverFx.mp3'],
    volume: 0.5,
  });

  const clickFx = new Howl({
    src: ['../effects/clickFx.mp3'],
    volume: 0.5,
  });

  const mouseClick = () => {
    clickFx.play();
  };

  const stacksData = [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
      date: '2014',
      description: 'Linguagem de marcação utilizada para estruturar e apresentar conteúdo na web, permitindo a criação de elementos semânticos e multimídia.',
      knowledge: 'Intermediário',
      aplication: 'Criação de páginas web responsivas utilizando HTML5, com foco em SEO e otimização para mecanismos de busca, aplicação de práticas de segurança com Content Security Policy (CSP) e inclusão de elementos de áudio e vídeo, garantindo acessibilidade e uma experiência de usuário aprimorada.',


    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
      date: '2014',
      description: 'Linguagem de estilo utilizada para descrever a apresentação de documentos HTML, permitindo o controle de layout, cores, tipografia e responsividade.',
      knowledge: 'Intermediário',
      aplication: 'Desenvolvimento de layouts responsivos e estilização de páginas web, utilizando técnicas como Flexbox e Grid, além de aplicação de práticas de design acessível para melhorar a experiência do usuário.',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      date: '2014',
      description: 'Linguagem de programação de alto nível, amplamente utilizada para desenvolver interatividade em páginas web e aplicações dinâmicas.',
      knowledge: 'Intermediário',
      aplication: 'Desenvolvimento de funcionalidades interativas em websites, manipulação do DOM, e implementação de scripts para melhorar a experiência do usuário, com foco em boas práticas de programação e otimização de desempenho.',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
      date: '2020',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário, facilitando o desenvolvimento de aplicações web interativas e dinâmicas.',
      knowledge: 'Básico',
      aplication: 'Desenvolvimento de componentes reutilizáveis e gestão de estado simples em projetos, com foco na compreensão da arquitetura de aplicações e no uso de props e state para melhorar a interatividade.',
    },
    {
      icon: <TbBrandNextjs />,
      name: 'Next.js',
      date: '2020',
      description: 'Framework React para desenvolvimento de aplicações web, permitindo a criação de páginas estáticas e dinâmicas com renderização do lado do servidor e otimização de desempenho.',
      knowledge: 'Intermediário',
      aplication: 'Desenvolvimento de aplicações web escaláveis, utilizando recursos como roteamento dinâmico, geração de páginas estáticas e integração com APIs, garantindo uma experiência de usuário fluida e otimizada. Melhores práticas de SEO e responsividade.',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
      date: '2020',
      description: 'Framework CSS utilitário que facilita o desenvolvimento rápido de interfaces personalizadas, permitindo estilização eficiente e responsiva.',
      knowledge: 'Intermediário',
      aplication: 'Aplicação de classes utilitárias para criar layouts responsivos e estilizar componentes de forma rápida, promovendo consistência visual e aproveitando a customização para atender às necessidades específicas dos projetos.',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      date: '2020',
      description: 'Ambiente de execução JavaScript server-side, permitindo a construção de aplicações de rede escaláveis e de alta performance.',
      knowledge: 'Básico',
      aplication: 'Criação de servidores simples, explorando a integração com pacotes do npm e fundamentos de middleware, com foco no entendimento da arquitetura de aplicações backend.',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
      date: '2020',
      description: 'Superset do JavaScript que adiciona tipagem estática, melhorando a manutenção e escalabilidade de aplicações.',
      knowledge: 'Básico',
      aplication: ' Implementação de tipos em projetos JavaScript, contribuindo para a melhoria da legibilidade do código e identificação de erros em tempo de compilação, enquanto desenvolvo um entendimento mais profundo sobre a tipagem estática.',
    },
  ];

  return (
    <div className="relative z-10 font-mono p-4 h-full max-w-3xl text-gray-600 bg-white bg-opacity-80 rounded shadow-lg border-2 border-gray-400">
      <div className="rounded">
        <div className="flex w-full py-4 mx-auto items-center justify-center bg-indigo-600 font-bold text-white border-4 border-dashed border-white">
          <div className=" text-center space-y-12">
            <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                <span className="animate-word col-span-full row-span-full">React.js</span>
                <span className="animate-word-delay-1 col-span-full row-span-full">Dev. Web</span>
                <span className="animate-word-delay-2 col-span-full row-span-full">Tailwind.css</span>
                <span className="animate-word-delay-3 col-span-full row-span-full">Typescript</span>
                <span className="animate-word-delay-4 col-span-full row-span-full">Next.js</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex p-2 pt-8 text-2xl md:text-3xl md:text-left">
          <span className="animate-bounce pr-4"><FaLaptopCode className="w-8 h-8 md:w-9 md:h-9 text-pink-500" /></span>{" "}
          <span className='inline-block overflow-hidden md:whitespace-nowrap font-bold text-indigo-500 font-mono animate-typing border-r-4'>
            Stack atual
          </span>
        </h2>

        <div className="p-2 pt-4 pb-8 text-justify text-lg md:text-xl">
          <p className="indent-8">
            Nesta sessão eu mostrarei quais são as tecnologias que mais utilizo, o meu nível e o tempo de experiência que tenho
            com cada uma delas, destacando algumas práticas e habilidades adquiridas.
          </p>
        </div>

        <div className="font-sans font-normal flex flex-col">
          {stacksData.map((stack, index) => {
            const [isOpen, setIsOpen] = useState(false);

            return (
              <div key={index} className="flex items-center space-x-4 py-0">
                <div className='w-full'>
                  <div className="flex items-center justify-between text-3xl text-pink-500 pb-2">
                    {stack.icon}
                    <h3 className="text-xl md:text-2xl text-purple-500 px-2 font-semibold">{stack.name}</h3>
                    <button onClick={() => { setIsOpen(!isOpen); mouseClick() }} className="text-lg md:text-xl text-pink-500 ml-auto w-10 h-10 p-2.5 rounded-full hover:bg-white">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  <hr className="h-0.5 w-full bg-pink-500" />

                  {isOpen && (
                    <div className="p-4 bg-purple-200 rounded-b-lg text-justify">
                      <p className="text-sm md:text-md font-semibold text-indigo-600">- Descrição da linguagem: <span className="font-semibold text-gray-600">{stack.description}</span></p>
                      <p className="text-sm md:text-md font-semibold text-indigo-600 pt-4">- Início dos estudos: <span className="font-semibold text-gray-600">{stack.date}.</span></p>
                      <p className="text-sm md:text-md font-semibold text-indigo-600 pt-4">- Nível de conhecimento: <span className="font-semibold text-gray-600">{stack.knowledge}.</span></p>
                      <p className="text-sm md:text-md font-semibold text-indigo-600 pt-4">- Experiência e habilidades: <span className="font-semibold text-gray-600">{stack.aplication}</span></p>
                    </div>
                  )}

                  <br /><br />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-justify text-lg md:text-xl">
          <p className="indent-8">
            Para saber mais sobre as linguagens que já programei e meu histórico profissional, veja aqui o meu currículo, onde destaco
            minha jornada como programador e empresário no ramo de TI, desde o ano 2000.
          </p>
        </div>
      </div>

      <div className='w-full text-center pt-10 pb-10'>
        <Link href="../currículo.pdf" className='w-full items-center' title="Abrir currículo em nova aba" rel="noopener noreferrer" target='_blank'>
          <button
            className="rounded-full shadow-md text-lg md:text-xl mb-2 px-6 pb-2 pt-2.5 font-medium leading-normal bg-green-700 text-white transform transition hover:scale-105 duration-200 ease-in-out"
            onClick={mouseClick}
          >
            Currículo.pdf
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tecnologias;
