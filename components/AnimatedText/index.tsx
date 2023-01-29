import React from 'react';
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

const Wrapper = ({ children }: { children: JSX.Element[] }): JSX.Element => {
   return <span className="whitespace-nowrap">{children}</span>;
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
   const words: string[][] = text
      .split(' ')
      .map(word => `${word}\u00A0`.split(''));

   const Tag = tagMap[type];

   return (
      <Tag className={className}>
         {words.map((word, wordIndex) => {
            return (
               <Wrapper key={wordIndex}>
                  {words[wordIndex]
                     .flat()
                     .map((element: string, index: number) => {
                        return (
                           <span
                              key={index}
                              style={{
                                 overflow: 'hidden',
                                 display: 'inline-block',
                              }}
                           >
                              <motion.span
                                 style={{ display: 'inline-block' }}
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
               </Wrapper>
            );
         })}
      </Tag>
   );
};

export default AnimatedCharacters;
