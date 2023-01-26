import React from 'react'
import Image from 'next/image'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import GetInTouchImage from '../../public/assets/get-in-touch.jpg';
import { PERSONAL_LINKS } from '../../constants/routes';

function Contact() {
   return (
      <div id="contact" className="w-full md:h-screen p-10 py-24">
         <div className="max-w-[1240px] m-auto px-2 py-22 w-full ">
            <h2 className="py-4 text-[#7cae7a]">Get In Touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
               {/* left */}
               <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
                  <div className="lg:p-4 h-full flex flex-col justify-between">
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
                        <p className="uppercase pt-8 mb-4">Connect With Me</p>
                        <div className="flex items-center justify-between">
                           <a
                              href={PERSONAL_LINKS.linkedIn}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full  border-2 border-[#7cae7a] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaLinkedinIn />
                              </div>
                           </a>
                           <a
                              href={PERSONAL_LINKS.github}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <div className="rounded-full border-2 border-[#7cae7a] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                 <FaGithub />
                              </div>
                           </a>

                           <div className="rounded-full border-2 border-[#7cae7a] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <AiOutlineMail />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* right */}
               <div className="col-span-3 w-full h-auto  rounded-xl lg:p-4">
                  <div className="p-4">
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
            </div>
         </div>
         <p className="text-sm mt-8  opacity-50 text-center">
				&copy; {new Date().getFullYear()} Kevin Soruco. All rights reserved.
			</p>
      </div>
   )
}

export default Contact;
