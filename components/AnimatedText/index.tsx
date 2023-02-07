import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { tagMap, TagType } from './constants';

const item = {
   hidden: {
      y: '200%',
      color: '#0055FF',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
   },
   visible: {
      y: 0,
      color: '#FFF',
      transition: {
         ease: [0.455, 0.03, 0.515, 0.955],
         duration: 0.2,
         type: 'spring',
         damping: 8,
         stiffness: 80,
         restDelta: 0.001,
      },
   },
};

interface AnimatedCharactersProps {
   type: TagType;
   text: string;
   className?: string;
}

const AnimatedCharacters = ({
   text,
   type,
   className,
}: AnimatedCharactersProps): JSX.Element => {
   const splittedWord = text.split(' ');
   const words: string[][] = splittedWord.map((word, index) =>
      `${word}${index === splittedWord.length - 1 ? '' : '\u00A0'}`.split(''),
   );

   const Tag = tagMap[type];

   return (
      <Tag className={className}>
         {words.map((word, wordIndex) => {
            return (
               <Fragment key={wordIndex}>
                  {words[wordIndex]
                     .flat()
                     .map((element: string, index: number) => {
                        return (
                           <span
                              className="overflow-hidden inline-block cursor-default"
                              key={index}
                           >
                              <motion.span
                                 className="inline-block"
                                 variants={
                                    words[wordIndex].includes('K')
                                       ? {
                                            ...item,
                                            visible: {
                                               ...item.visible,
                                               color: '#7cae7a',
                                            },
                                         }
                                       : item
                                 }
                                 whileHover={{
                                    scale: 0.8,
                                 }}
                              >
                                 {element}
                              </motion.span>
                           </span>
                        );
                     })}
               </Fragment>
            );
         })}
      </Tag>
   );
};

export default AnimatedCharacters;
