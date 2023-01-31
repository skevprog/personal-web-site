import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { DiCss3 } from 'react-icons/Di';
import {
   SiFramer,
   SiHtml5,
   SiJavascript,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/Si';
import { IconType } from 'react-icons';

type Icon = {
   id: string;
   name: IconType;
};

export const skillsIcons: Icon[] = [
   {
      id: 'react',
      name: FaReact,
   },
   {
      id: 'graphQl',
      name: GrGraphQl,
   },
   {
      id: 'css',
      name: DiCss3,
   },
   {
      id: 'tailwind',
      name: SiTailwindcss,
   },
   {
      id: 'javascript',
      name: SiJavascript,
   },
   {
      id: 'typescript',
      name: SiTypescript,
   },
   {
      id: 'html',
      name: SiHtml5,
   },
   {
      id: 'node',
      name: FaNodeJs,
   },
   {
      id: 'framer',
      name: SiFramer,
   },
];
