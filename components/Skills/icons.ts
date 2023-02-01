import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { DiCss3 } from 'react-icons/Di';
import {
   SiCss3,
   SiExpress,
   SiFramer,
   SiHtml5,
   SiJavascript,
   SiMongodb,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/Si';
import { TbBrandNextjs } from 'react-icons/Tb';
import { IconType } from 'react-icons';

type Icon = {
   id: string;
   name: IconType;
};

export const skillsIcons: Icon[] = [
   {
      id: 'React',
      name: FaReact,
   },
   {
      id: 'GraphQl',
      name: GrGraphQl,
   },
   {
      id: 'Css3',
      name: SiCss3,
   },
   {
      id: 'Tailwind',
      name: SiTailwindcss,
   },
   {
      id: 'javascript',
      name: SiJavascript,
   },
   {
      id: 'Typescript',
      name: SiTypescript,
   },
   {
      id: 'Html5',
      name: SiHtml5,
   },
   {
      id: 'Node',
      name: FaNodeJs,
   },
   {
      id: 'Framer',
      name: SiFramer,
   },
   {
      id: 'Nextjs',
      name: TbBrandNextjs,
   },
   {
      id: 'Express',
      name: SiExpress,
   },
   {
      id: 'Mongo',
      name: SiMongodb,
   },
];
