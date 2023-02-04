import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { PERSONAL_LINKS } from '../../constants/routes';
import { TagType } from '../../components/AnimatedText/constants';
import AnimatedText from '../../components/AnimatedText';

const placeholderText = [
   {
      type: 'heading1' as TagType,
      text: "Hi, I'm Kevin",
      className: 'py-4 text-700',
   },
   {
      type: 'heading1' as TagType,
      text: 'Front-End Developer',
      className: 'py-2',
   },
];

const container = {
   visible: {
      transition: {
         staggerChildren: 0.025,
      },
   },
};

function Main() {
   return (
      <main className="w-full h-screen text-center">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase text-sm tracking-widest text-600">
                  LET&apos;S BUILD SOMETHING TOGETHER
               </p>
               <motion.div
                  animate="visible"
                  initial="hidden"
                  variants={container}
               >
                  <div className="container">
                     {placeholderText.map((item, index: number) => {
                        return <AnimatedText {...item} key={index} />;
                     })}
                  </div>
               </motion.div>
               <div className="flex items-center justify-between max-w-[330px] m-auto mt-6">
                  <a
                     href={PERSONAL_LINKS.linkedIn}
                     rel="noreferrer"
                     target="_blank"
                  >
                     <div className="rounded-full p-3 cursor-pointer border-dashed border-2 border-[#7cae7b] hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                     </div>
                  </a>
                  <a
                     href={PERSONAL_LINKS.github}
                     rel="noreferrer"
                     target="_blank"
                  >
                     <div className="rounded-full border-dashed border-2 border-[#7cae7a] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub className="h-7 w-7" />
                     </div>
                  </a>
                  <a href="/" rel="noreferrer" target="_blank">
                     <div className="rounded-full border-dashed border-2 border-[#7cae7a] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Main;