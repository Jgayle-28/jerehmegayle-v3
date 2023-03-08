import React from 'react'
import { motion } from 'framer-motion'
import userData from '@constants/data'
import { headerVariants, sectionVariants } from '@constants/helperData'

export default function Experience() {
  return (
    <section className='bg-white dark:bg-brandBlack'>
      <div className='max-w-6xl mx-auto h-44 md:h-48 bg-white dark:bg-brandBlack z-50'>
        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'
        >
          Experience
        </motion.h1>
      </div>
      <div className='bg-brandGray dark:bg-brandBlack -mt-4'>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='z-0 grid grid-cols-1 max-w-xl mx-auto pt-20'
        >
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-brandPrimary rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-brandPrimary rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-24 bg-gray-200 dark:bg-brandBlack rounded-full -mt-2'></div>
                </div>
              )}
            </>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className='relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 hover:border-brandPrimary cursor-pointer transition-all ease duration-300'>
      <h1 className='absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700'>
        {year}
      </h1>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <a href={companyLink} className='text-gray-500'>
        {company}
      </a>
      <p className='text-gray-600 dark:text-gray-400 my-2'>{desc}</p>
    </div>
  )
}
