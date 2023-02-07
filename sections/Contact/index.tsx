import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { PERSONAL_LINKS } from '../../constants/routes';
import Form from './components/ContactForm';

function Contact() {
   return (
      <div
         className="w-full md:h-screen pt-20 pb-12 content-container !h-auto px-16 text-center md:text-left"
         id="contact"
      >
         <div className="max-w-[1240px] m-auto w-full">
            <h2 className="py-4 text-[#7cae7a]">Get In Touch</h2>
            <div className="md:grid m-auto lg:grid-cols-2 sm:grid-cols-1 lg:gap-16">
               {/* Left */}
               <div className="col-span-1 w-full h-auto  rounded-xl">
                  <Form />
               </div>
               {/* Right */}
               <div className="col-span-3 lg:col-span-1 w-full h-full rounded-xl py-4 flex flex-col items-center justify-center ">
                  <div className="p-6">
                     <div>
                        <p className="py-4 text-center">
                           Feel free to Contact me by submitting the form :).{' '}
                           <br />
                           Or find me in:{' '}
                        </p>
                     </div>
                     <div>
                        <div className="flex items-center justify-center">
                           <a
                              href={PERSONAL_LINKS.linkedIn}
                              rel="noreferrer"
                              target="_blank"
                           >
                              <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaLinkedinIn size="1.5rem" />
                              </div>
                           </a>
                           <a
                              href={PERSONAL_LINKS.github}
                              rel="noreferrer"
                              target="_blank"
                           >
                              <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaGithub size="1.5rem" />
                              </div>
                           </a>

                           <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <AiOutlineMail size="1.5rem" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
