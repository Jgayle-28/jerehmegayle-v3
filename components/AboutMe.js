import React from 'react';
import { motion } from 'framer-motion';
// Data
import userData from '@constants/data';
import { headerVariants, sectionVariants } from '@constants/helperData';

export default function AboutMe() {
  return (
    <section className='bg-white dark:bg-gray-800 '>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'>
          About Me
        </motion.h1>
      </div>
      <div className='bg-[#F1F1F1] -mt-10 dark:bg-gray-900 px-5 '>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='text-container max-w-6xl mx-auto pt-20'>
          <p
            className=' leading-loose text-2xl md:text-4xl font-semibold'
            style={{ lineHeight: '3rem' }}>
            {userData.about.title}
            <span className='text-brandPrimary'>{userData.about.subTitle}</span>
          </p>{' '}
          <p className='mt-5 '>
            Currently working on{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='bg-brandPrimary rounded-md px-2 py-1 text-white'
              href={userData.about.currentProjectUrl}>
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </motion.div>
      </div>
      <div className='bg-[#F1F1F1] dark:bg-gray-900 px-4'>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
          {/* Social Buttons */}
          <div className='inline-flex flex-col'>
            <div>
              <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Contact
              </h1>
              <p className='text-md text-gray-500 mt-4 dark:text-gray-300'>
                For any sort help / enquiry, shoot a{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`mailto:${userData.email}`}
                  className='text-brandPrimary border-b-2 border-brandPrimary dark:border-brandPrimary font-bold dark:text-brandPrimary'>
                  E-mail
                </a>{' '}
                my way and I'll get back. I swear
              </p>
            </div>
            <div className='mt-8'>
              <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Job Opportunities
              </h1>
              <p className='text-md text-gray-500 mt-4 dark:text-gray-300'>
                I'm looking for a job currently, If you see me as a good fit,
                check my{' '}
                <a
                  href={userData.resumeUrl}
                  target='__blank'
                  className='text-brandPrimary border-b-2 border-brandPrimary dark:border-brandPrimary font-bold dark:text-brandPrimary'>
                  CV
                </a>{' '}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className='text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200'>
              Lets Connect
            </h1>
            <div className='mt-4 ml-4'>
              {userData &&
                Object.entries(userData.socialLinks).map((link) => {
                  return (
                    <div
                      key={link[1]}
                      className='flex flex-row justify-start items-center'>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link[1]}
                        className='capitalize flex flex-row items-center space-x-4 group'>
                        <div className='my-4'>&rarr;</div>
                        <p className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
                          <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300'></span>
                          {link[0]}
                        </p>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* Text area */}
          <div className='col-span-1 md:col-span-2'>
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className='text-xl text-gray-700 mb-4 dark:text-gray-300 '>
                {desc}
              </p>
            ))}

            <h1 className='mt-6 bg-brandPrimary text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50'>
              Tech Stack
            </h1>
            <div className='flex flex-row flex-wrap mt-4'>
              <img
                src='https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png'
                className='h-20 w-20 mx-4 my-4'
              />
              {/* <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                className='h-20 w-20 mx-4 my-4'
              /> */}
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'
                className='h-20 w-20 mx-4 my-4'
              />
              <img
                src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png'
                className='h-20 w-20 mx-4 my-4'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
