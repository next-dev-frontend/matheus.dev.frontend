import Image from 'next/image';
import Link from 'next/link';
import { FaMailBulk, FaMapMarkerAlt, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

function BarraLateral() {

  return (

    <div className="w-full justify-center min-w-fit md:max-w-1/4 items-center sm:w-1/3 bg-gray-200 rounded h-full p-4 sm:order-1 border-2 border-gray-400 relative">

      <div className="flex mx-auto border-4 border-gray-500 border-dashed rounded-full mb-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 hover:scale-110 transform transition-transform">
        <Image
          src="/logos/foto-matheus.webp"
          alt="logo about insurances"
          width={512}
          height={512}
          priority
          className={`rounded-full`} />
      </div>

      <div className={`text-center`}>

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


        <div className="flex justify-center py-8">
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
                <SiGithub className="w-8 h-8 text-gray-500 hover:text-gray-800" />
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
                <SiVercel className="w-8 h-8 text-gray-500 hover:text-gray-800" />
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
                <SiLinkedin className="w-8 h-8 text-gray-500 hover:text-gray-800" />
              </a>
            </li>
          </ul>
        </div>


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

        <div className='pt-6'>
          <div className="bg-gray-100 mx-auto w-full p-1 max-w-max rounded">
            <p className="wrap rounded text-center text-xs text-gray-600">
              ©2023. Todos os direitos reservados!
            </p>
          </div>
        </div>
      </div>

    </div>

  );
}

export default BarraLateral;