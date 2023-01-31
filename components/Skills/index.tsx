import React from 'react';
import { skillsIcons } from './icons';

function Skills() {
   return (
      <div
         className="w-full md:h-screen p-16 flex flex-col items-center py-16"
         id="skills"
      >
         <h2 className="py-4 text-[#7cae7a]">Skills</h2>
         <div className="mx-auto flex">
            {skillsIcons.map(icon => (
               <icon.name key={icon.id} size="6em" />
            ))}
         </div>
      </div>
   );
}

export default Skills;
