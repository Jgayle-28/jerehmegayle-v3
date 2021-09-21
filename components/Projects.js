import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Data
import userData from '@constants/data';
import { headerVariants, sectionVariants } from '@constants/helperData';

export default function Projects() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-40 md:h-48 bg-white dark:bg-gray-800'>
        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'>
          Projects
        </motion.h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-[#F1F1F1] dark:bg-gray-900 px-5'>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40'>
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={`/project/${idx}`}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <Link href={link}>
      <div className='w-full block shadow-2xl cursor-pointer'>
        <div className='relative overflow-hidden'>
          <div className='h-72 object-cover'>
            <img
              src={imgUrl}
              alt='portfolio'
              className='transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full'
            />
          </div>
          <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
            {title}
          </h1>
          <h1 className='bg-brandPrimary py-1 px-2 rounded-md absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
            {number.length === 1 ? '0' + number : number}
          </h1>
        </div>
      </div>
    </Link>
  );
};
