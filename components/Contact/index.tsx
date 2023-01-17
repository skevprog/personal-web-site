import React from 'react'
import Image from 'next/image'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import GetInTouchImage from '../../public/assets/get-in-touch.jpg';

function Contact() {
   return (
      <div id="contact" className="w-full md:h-screen py-24">
         <div className="max-w-[1240px] m-auto px-2 py-22 w-full ">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
               Contact
            </p>
            <h2 className="py-4">Get In Touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
               {/* left */}
               <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="lg:p-4 h-full ">
                     <div>
                        <Image
                           className="rounded-xl duration-300"
                           src={GetInTouchImage}
                           alt="/"
                        />
                     </div>
                     <div>
                        <p className="py-4">Feel free to Contact me by submitting the form and I will get back to you as soon as possible :)</p>
                        <p className="py-4">I am available for freelance or full-time positions. <br /></p>
                     </div>
                     <div>
                        <p className="uppercase pt-8">Connect With Me</p>
                        <div className="flex items-center justify-between py-4">
                           <a
                              href="https://www.linkedin.com/in/clint-briley-50056920a/"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaLinkedinIn />
                              </div>
                           </a>
                           <a
                              href="https://github.com/fireclint"
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaGithub />
                              </div>
                           </a>

                           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                              <AiOutlineMail />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* right */}
               <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                  <div className="p-4">
                     <form
                        action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                        method="POST"
                        encType="multipart/form-data"
                     >
                        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">Name</label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                                 name="name"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
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
                        <button className="w-full p-4 text-gray-100 mt-4">
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact;
