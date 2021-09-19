import React, { useEffect } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import { motion } from 'framer-motion';
import userData from '@constants/data';
import ArrowAngleLeftUp from 'icons/ArrowAngleLeftUp';

const colors = ['#3370FF', '#ec407a', '#bada55', '#10B981'];

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 0.8,
        delay: 3.4,
      },
      opacity: {
        duration: 0.8,
        delay: 3.4,
      },
    },
  },
  hidden: { opacity: 0, y: 80 },
};

export default function Hero() {
  return (
    <div
      className={`flex flex-row justify-center items-start overflow-hidden hero h-auto`}>
      {/* Text container */}
      <div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Programmer. */}
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Developer. */}
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Designer. */}
              {/* Creator. */}
              Learner.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Creator.
              {/* Learner. */}
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20 z-50'>
        <div className='w-3/4'>
          <motion.img
            variants={variants}
            initial='hidden'
            animate='visible'
            src={userData.avatarUrl}
            alt='avatar'
            className='!h-4/5 shadow'
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <ArrowAngleLeftUp />
              <p className='font-mono'>That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
