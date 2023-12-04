import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const BgIconsEffect = () => {
  return (

    <div className='circles'>
      <ul className="flex gap-4 md:gap-6">
        <li>
          <span className="sr-only">html5 icon</span>
          <FaHtml5 className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">css icon</span>
          <FaCss3Alt className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">javascript icon</span>
          <FaJs className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">react icon</span>
          <FaReact className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">node icon</span>
          <FaNodeJs className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">tailwind icon</span>
          <SiTailwindcss className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <span className="sr-only">typescript icon</span>
          <SiTypescript className="w-10 h-10 text-gray-300 mx-1 my-0.5" />
        </li>
      </ul>
    </div>
  );
}
export default BgIconsEffect;