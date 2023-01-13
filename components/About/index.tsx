import React from 'react'
import Image from 'next/image';

import AboutImg from '../../public/assets/mug.jpg';

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
         <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
            <h2 className="py-2 text-gray-600">Who I Am</h2>
            <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio quidem dicta error molestiae natus ea nemo ipsum illo tenetur repellendus officiis velit debitis architecto aperiam, temporibus mollitia iusto quisquam.</p>
            <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio quidem dicta error molestiae natus ea nemo ipsum illo tenetur repellendus officiis velit debitis architecto aperiam, temporibus mollitia iusto quisquam.</p>
            <p className="py-2 text-gray-600">Check out some of my projects.</p>
         </div>
         <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="about" />
        </div>
      </div>
    </div>
  )
}

export default About;
