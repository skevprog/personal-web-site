import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { routeNames } from './routes';
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
                        <li className="ml-16 text-md text-center rounded p-2 hover:scale-105 hover:font-bold ease-in duration-100 w-24 justify-center">
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
                        ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen h-[100%] bg-[#4e4a59] p-10 ease-in duration-300'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
                  }
               >
                  <div className="flex w-full justify-end">
                     <button
                        className="rounded-full p-3 cursor-pointer"
                        onClick={handleNav}
                     >
                        <AiOutlineClose />
                     </button>
                  </div>
                  <div className="flex justify-center">
                     <ul className="mt-[30%]">
                        {routeNames.map(route => (
                           <Link
                              href={route.href}
                              key={route.id}
                              onClick={handleNav}
                           >
                              <li className="py-4 mb-12 uppercase text-lg justify-center">
                                 <span>{route.label}</span>
                              </li>
                           </Link>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
