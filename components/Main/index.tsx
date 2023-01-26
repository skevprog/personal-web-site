import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { motion } from 'framer-motion';
import AnimatedText from '../AnimatedText';
import { TagType } from '../AnimatedText/constants';

const placeholderText = [
   {
      type: "heading1" as TagType,
      text: "Hi, I'm Kevin",
      className: "py-4 text-700"
   },
   {
      type: "heading1" as TagType,
      text: "Front-End Developer",
      className: "py-2"
   }
];

const container = {
   visible: {
      transition: {
         staggerChildren: 0.025
      }
   }
};

function Main() {

   return (
      <main className="w-full h-screen text-center">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase text-sm tracking-widest text-600">LET&apos;S BUILD SOMETHING TOGETHER</p>
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
               >
                  <div className="container">
                     {placeholderText.map((item, index: number) => {
                        return <AnimatedText {...item} key={index} />;
                     })}
                  </div>
               </motion.div>
               <div className="flex items-center justify-between max-w-[330px] m-auto mt-6">
                  <div className="rounded-full p-3 cursor-pointer border-dashed border-2 border-[#7cae7b] hover:scale-110 ease-in duration-300">
                     <FaLinkedinIn />
                  </div>
                  <div className="rounded-full border-dashed border-2 border-[#7cae7a] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                     <FaGithub className="h-7 w-7" />
                  </div>
                  <div className="rounded-full border-dashed border-2 border-[#7cae7a] p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                     <AiOutlineMail />
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Main;
