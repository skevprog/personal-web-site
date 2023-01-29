import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { routeNames, socialIconLinks } from './routes';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
   const [nav, setNav] = useState(false);
   const [shadow, setShadow] = useState(false);

   const handleScroll = () => setShadow(window.scrollY >= 90);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const handleNav = () => setNav(!nav);

   return (
      <div
         className={`fixed w-full h-20 pr-4 ${
            shadow ? 'shadow-xl ' : ''
         }z-[100]`}
      >
         <div className="flex justify-end items-center w-full h-full ">
            <div>
               <ul className="hidden md:flex">
                  {routeNames.map(route => (
                     <Link href={route.href} key={route.id}>
                        <li className="ml-10 text-sm text-center uppercase rounded p-2 hover:scale-105 hover:font-bold ease-in duration-100 w-24">
                           <span>{route.label}</span>
                        </li>
                     </Link>
                  ))}
               </ul>
               <div className="md:hidden cursor-pointer" onClick={handleNav}>
                  <AiOutlineMenu size={25} />
               </div>
            </div>

            <div
               className={
                  nav
                     ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#394053]/60'
                     : ''
               }
            >
               <div
                  className={
                     nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#4e4a59] p-10 ease-in duration-300'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
                  }
               >
                  <div className="flex w-full items-center justify-between">
                     <button
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                        onClick={handleNav}
                     >
                        <AiOutlineClose />
                     </button>
                  </div>
                  <div className="border-b border-gray-300 my-4">
                     <p className="w-[85%] md:w-[90%] py-4">
                        Let&apos;s build something legendary together
                     </p>
                  </div>
                  <div>
                     <ul className="py-4 flex-col">
                        {routeNames.map(route => (
                           <Link
                              href={route.href}
                              key={route.id}
                              onClick={handleNav}
                           >
                              <li className="py-4 uppercase text-sm">
                                 <span>{route.label}</span>
                              </li>
                           </Link>
                        ))}
                     </ul>
                     <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#5651e5]">
                           Let&apos;s Connect
                        </p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                           {socialIconLinks.map(link => {
                              const Icon = link.icon;
                              return (
                                 <div
                                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                    key={link.id}
                                 >
                                    <Icon />
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
