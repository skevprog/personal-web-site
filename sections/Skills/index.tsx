import { skillsIcons } from './icons';

import React from 'react';

const Skills = () => {
   return (
      <section
         className="w-full md:h-screen content-container !h-auto p-16"
         id="skills"
      >
         <div className="max-w-[1240px] m-auto w-full">
            <h2 className="py-4 text-center md:text-left text-[#7cae7a]">
               What I Can Do
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-12 sm:grid-cols-3 xs:grid-cols-3 gap-16 mt-[2em] md:mt-[3em] ">
               {skillsIcons.map((icon, index) => (
                  <div key={`${icon.id}-${index}`}>
                     <div className="m-auto lg:w-[5em] md:w-[4.5em] w-[3em]">
                        <icon.name style={{ height: '100%', width: '100%' }} />
                     </div>
                     <p className="text-center mt-2">{icon.id}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Skills;
