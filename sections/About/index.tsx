import React from 'react';
import Image from 'next/image';

import AboutImg from '../../public/assets/me.jpeg';

function About() {
   return (
      <section
         className="w-full md:h-screen p-16 flex items-center py-20 text-center md:text-left"
         id="about"
      >
         <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-2">
            <div className="col-span-1">
               <h2 className="py-2 text-[#7cae7a]">Who I Am</h2>
               <section>
                  <p className="py-2 max-w-2xl text-600 text-md lg:text-xl">
                     Hi. My name is Kevin and I enjoy building things that solve
                     problems and can be used on a daily basis.
                  </p>
                  <p className="py-2 max-w-2xl text-600 text-md lg:text-xl">
                     I&apos;ve spent the past 5 years working on different
                     companies and for product owners to transform their ideas
                     into web/mobile apps.
                  </p>
                  <p className="py-2 max-w-2xl text-600 text-md lg:text-xl">
                     These days, my time is spent researching, coding, traveling
                     and learning new technologies to apply in different
                     projects.
                  </p>
                  <p className="py-2 max-w-2xl text-600 text-md lg:text-xl">
                     On my spare time I go hiking and practice rock climbing, I
                     really enjoy nature and outdoor sports.
                  </p>
               </section>
            </div>
            <div className="w-full m-auto h-auto rounded-xl p-6 hover:scale-105 ease-in duration-300">
               <Image alt="about" className="rounded-xl" src={AboutImg} />
            </div>
         </div>
      </section>
   );
}

export default About;
