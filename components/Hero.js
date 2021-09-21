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
      className={`h-screen md:h-full flex flex-wrap justify-center items-start md:overflow-hidden w-full px-5 md:px-7 lg:px-20 mb-10 md:mb-0`}>
      {/* Text container */}
      <div className='w-full md:w-1/2  text-center md:text-left lg:pt-10 z-50'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className='text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Programmer. */}
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className='text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Developer. */}
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className='text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              {/* Designer. */}
              {/* Creator. */}
              {/* Learner. */}
              Creator.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className='text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Motivator.
              {/* Learner. */}
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className='w-full md:w-1/2 sm:pt-10 md:pt-0 lg:pt-10 z-50'>
        <div className='w-full md:w-3/4 ml-auto'>
          <div className='h-96 md:h-auto !w-full overflow-hidden '>
            <motion.img
              variants={variants}
              initial='hidden'
              animate='visible'
              src={userData.avatarUrl}
              alt='avatar'
              className='shadow'
            />
          </div>

          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <ArrowAngleLeftUp />
              <p className='font-mono'>That's me</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
