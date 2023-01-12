import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {
   return (
      <main className="w-full h-screen text-center">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase text-sm tracking-widest text-gray-600">LETS BUILD SOMETHING TOGETHER</p>
               <h1 className="py-4 text-gray-700">
                  Hi, I&apos;m
                  <span className="text-[#5651e5]"> Kevin</span>
               </h1>
               <h1 className="py-2 text-gray-700">
                  A Front-End Web Developer
               </h1>
               <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                  I&apos;m a front-end web developer specializing in building exceptional digital experiences. Currentyle I&apos;m focused on building responsive front-end web applications while expanding my knowledge in back-end development.
               </p>
               <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                     <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                     <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                     <AiOutlineMail />
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Main;
