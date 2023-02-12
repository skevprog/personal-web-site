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
      <main className="w-full h-screen text-center hero">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase text-sm tracking-widest text-600 ">
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
               <div className="flex items-center justify-between max-w-[230px] md:max-w-[330px] m-auto mt-6">
                  <motion.a
                     aria-label="LinkedIn"
                     className="rounded-full border-dashed border-2 border-[#7cae7a] p-2 md:p-3 cursor-pointer"
                     href={PERSONAL_LINKS.linkedIn}
                     rel="noreferrer"
                     target="_blank"
                     transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                     }}
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.5 }}
                  >
                     <FaLinkedinIn className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
                  <motion.a
                     aria-label="Github"
                     className="rounded-full border-dashed border-2 border-[#7cae7a] p-2 md:p-3 cursor-pointer"
                     href={PERSONAL_LINKS.github}
                     rel="noreferrer"
                     target="_blank"
                     transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                     }}
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.5 }}
                  >
                     <FaGithub className="h-7 w-7 md:h-8 md:w-8" />
                  </motion.a>
                  <motion.a
                     aria-label="mailto"
                     className="rounded-full border-dashed border-2 border-[#7cae7a] p-2 md:p-3 cursor-pointer"
                     href="mailto:someone@yoursite.com"
                     rel="noreferrer"
                     target="_blank"
                     transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                     }}
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.5 }}
                  >
                     <AiOutlineMail className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Main;
