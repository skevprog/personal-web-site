import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { routeNames } from './routes';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useScrollspy from '../../hooks/useScrollSpy';

const itemVariants = {
   closed: {
      opacity: 0,
   },
   open: { opacity: 1 },
};

const sideVariants = {
   closed: {
      transition: {
         staggerChildren: 0.1,
         staggerDirection: -1,
      },
   },
   open: {
      transition: {
         staggerChildren: 0.2,
         staggerDirection: 1,
      },
   },
};

const ids = ['home', 'about', 'contact'];

function Navbar() {
   const [open, cycleOpen] = useCycle(false, true);
   const [shadow, setShadow] = useState(false);
   const activeId = useScrollspy(ids, 80);

   const router = useRouter();

   const handleScroll = () => setShadow(window.scrollY >= 90);
   const isSelectedPath = (path: string) => router.asPath === `/#${path}`;

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

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
                     <li
                        className={`ml-10 text-md text-center rounded p-2 w-24 justify-center ${
                           isSelectedPath(route.id) ? 'font-bold' : ''
                        }`}
                        key={route.id}
                     >
                        <Link href={route.href}>
                           <motion.div whileHover={{ scale: 1.2 }}>
                              <span>{route.label}</span>
                              <AnimatePresence>
                                 {activeId === route.id && (
                                    <motion.div
                                       animate={{ rotate: 180, scale: 1 }}
                                       className="underline"
                                       exit={{
                                          scale: 0,
                                          rotate: -180,
                                          transition: { duration: 0.2 },
                                       }}
                                       initial={{ scale: 0 }}
                                       transition={{
                                          type: 'spring',
                                          stiffness: 260,
                                          damping: 20,
                                       }}
                                    />
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        </Link>
                     </li>
                  ))}
               </ul>
               <div
                  className="md:hidden cursor-pointer"
                  onClick={() => cycleOpen()}
               >
                  <AiOutlineMenu size={25} />
               </div>
            </div>

            <div
               className={
                  open
                     ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#394053]/60'
                     : ''
               }
            >
               <AnimatePresence>
                  {open && (
                     <motion.aside
                        animate={{
                           width: '100%',
                        }}
                        className="mobile-navbar"
                        exit={{
                           width: 0,
                           transition: { delay: 0.6, duration: 0.2 },
                        }}
                        initial={{ width: 0 }}
                     >
                        <motion.div className="flex w-full justify-end p-10">
                           <motion.button
                              animate="open"
                              className="rounded-full p-3 cursor-pointer"
                              exit="closed"
                              onClick={() => cycleOpen()}
                              whileTap={{ scale: 0.5 }}
                           >
                              <AiOutlineClose />
                           </motion.button>
                        </motion.div>
                        <motion.ul
                           animate="open"
                           className="container text-center"
                           exit="closed"
                           initial="closed"
                           variants={sideVariants}
                        >
                           {routeNames.map(({ label, id, href }) => (
                              <li className="justify-center" key={id}>
                                 <Link href={href} onClick={() => cycleOpen()}>
                                    <motion.span
                                       variants={itemVariants}
                                       whileHover={{ scale: 1.1 }}
                                    >
                                       {label}
                                    </motion.span>
                                    {isSelectedPath(id) && (
                                       <motion.div
                                          animate={{ rotate: 180, scale: 1 }}
                                          className="underline"
                                          exit={{
                                             scale: 0,
                                             rotate: -180,
                                             transition: { duration: 0.2 },
                                          }}
                                          initial={{ scale: 0 }}
                                          transition={{
                                             type: 'spring',
                                             stiffness: 260,
                                             damping: 20,
                                          }}
                                       />
                                    )}
                                 </Link>
                              </li>
                           ))}
                        </motion.ul>
                     </motion.aside>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
