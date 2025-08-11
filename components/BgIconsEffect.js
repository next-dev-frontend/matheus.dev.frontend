// components/BgIconsEffect.js
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

const BgIconsEffect = () => {
  return (
    <div className="circles" aria-hidden="true">
      <ul className="flex gap-4 md:gap-6">
        <li>
          <FaHtml5 className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <FaCss3Alt className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <FaJs className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <FaReact className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <FaNodeJs className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <SiTailwindcss className="w-12 h-12 text-gray-300 mx-1" />
        </li>
        <li>
          <SiTypescript className="w-10 h-10 text-gray-300 mx-1 my-0.5" />
        </li>
      </ul>
    </div>
  );
};

export default BgIconsEffect;
