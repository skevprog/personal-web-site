import React from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { PERSONAL_LINKS } from '../../constants/routes';

function Contact() {
   return (
      <div id="contact" className="w-full md:h-screen py-12 content-container !h-auto px-16">
         <div className="max-w-[1240px] m-auto w-full">
            <h2 className="py-4 text-[#7cae7a]">Get In Touch</h2>
            <div className="md:grid m-auto lg:grid-cols-2 sm:grid-cols-1 lg:gap-16">
               {/* Form */}
               <div className="col-span-1 w-full h-auto  rounded-xl">
                  <div className="py-4">
                     <form
                        action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                        method="POST"
                        encType="multipart/form-data"
                     >
                        <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                           <div className="flex flex-col">
                              <label className="uppercase text-sm pb-2">Name</label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                                 name="name"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm pb-2">
                                 Phone Number
                              </label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                                 name="phone"
                              />
                           </div>
                        </div>
                        <div className="flex flex-col py-2">
                           <label className="uppercase text-sm py-2">Email</label>
                           <input
                              className="border-2 rounded-lg p-3 flex border-gray-300"
                              type="email"
                              name="email"
                           />
                        </div>
                        <div className="flex flex-col py-2">
                           <label className="uppercase text-sm py-2">Subject</label>
                           <input
                              className="border-2 rounded-lg p-3 flex border-gray-300"
                              type="text"
                              name="subject"
                           />
                        </div>
                        <div className="flex flex-col py-2">
                           <label className="uppercase text-sm py-2">Message</label>
                           <textarea
                              className="border-2 rounded-lg p-3 border-gray-300"
                              rows={6}
                              name="message"
                           ></textarea>
                        </div>
                        <button disabled className="w-full p-4 text-gray-100 mt-4">
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
               {/* Text right */}
               <div className="col-span-3 lg:col-span-1 w-full h-full rounded-xl py-4 flex flex-col items-center justify-center ">
                  <div className="p-6">
                     <div>
                        <p className="py-4 text-center">Feel free to Contact me by submitting the form :). <br />Or find me in: </p>
                     </div>
                     <div>
                        <div className="flex items-center justify-center">
                           <a
                              href={PERSONAL_LINKS.linkedIn}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaLinkedinIn size="1.5rem" />
                              </div>
                           </a>
                           <a
                              href={PERSONAL_LINKS.github}
                              target="_blank"
                              rel="noreferrer"
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
      </div>)
}

export default Contact;
