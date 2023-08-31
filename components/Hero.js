import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import userData from '@constants/data'
import ArrowAngleLeftUp from 'icons/ArrowAngleLeftUp'

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
}

export default function Hero({ initialLoad, finishedAnimation }) {
  const [header2Visible, setHeader2Visible] = useState('hidden')
  const [header3Visible, setHeader3Visible] = useState('hidden')

  console.log('header2Visible :>> ', header2Visible)
  console.log('header3Visible :>> ', header3Visible)

  useEffect(() => {
    setTimeout(() => setHeader2Visible('block'), 400)
    setTimeout(() => setHeader3Visible('block'), 900)
  }, [])
  return (
    <div
      className={`h-screen md:h-full flex flex-wrap justify-center items-start md:overflow-hidden w-full px-5 md:px-7 lg:px-20 mb-10 md:mb-0`}
      style={{ paddingTop: initialLoad && !finishedAnimation ? '132px' : '' }}
    >
      {/* Text container */}
      <div className='w-full md:w-1/2  text-center md:text-left lg:pt-10 z-50'>
        <h1
          data-text='Developer'
          className='text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-3 stack'
        >
          <span style={{ '--index': 0 }}>Developer.</span>
          <span style={{ '--index': 1 }}>Developer.</span>
          <span style={{ '--index': 2 }}>Developer.</span>
        </h1>
        <h1
          data-text='Designer'
          className={`text-6xl lg:text-8xl font-bold text-gray-700 dark:text-brandPrimary my-3 stack ${header2Visible}`}
        >
          <span className={`${header2Visible}`} style={{ '--index': 0 }}>
            Designer.
          </span>
          <span className={`${header2Visible}`} style={{ '--index': 1 }}>
            Designer.
          </span>
          <span className={`${header2Visible}`} style={{ '--index': 2 }}>
            Designer.
          </span>
        </h1>
        <h1
          data-text='Builder'
          className={`text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-3 stack ${header2Visible}`}
        >
          <span className={`${header3Visible}`} style={{ '--index': 0 }}>
            Builder.
          </span>
          <span className={`${header3Visible}`} style={{ '--index': 1 }}>
            Builder.
          </span>
          <span className={`${header3Visible}`} style={{ '--index': 2 }}>
            Builder.
          </span>
        </h1>
      </div>
      {/* Image container */}
      <div className='w-full md:w-1/2 sm:pt-10 md:pt-0 lg:pt-10 z-50'>
        <div className='w-full md:w-3/4 ml-auto'>
          <div className='h-96 md:h-auto !w-full overflow-hidden '>
            <motion.img
              variants={variants}
              initial={initialLoad && 'hidden'}
              animate={initialLoad && 'visible'}
              src={userData.avatarUrl}
              alt='avatar'
              className='shadow'
            />
          </div>

          <motion.div
            variants={variants}
            initial={initialLoad && 'hidden'}
            animate={initialLoad && 'visible'}
            className='flex flex-row justify-between mt-4'
          >
            <div className='flex flex-row space-x-4'>
              <ArrowAngleLeftUp />
              <p className='font-mono'>That's me</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
