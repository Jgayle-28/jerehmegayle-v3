import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
// Data
import userData from '@constants/data';
import {
  headerVariants,
  sectionVariants,
  sliderSettings,
} from '@constants/helperData';

export default function ProjectTemplate() {
  const router = useRouter();
  const { projectId, back } = router.query;
  const project = userData.projects[projectId];
  const { title, imgUrl, projectImages, techStack, about } = project;

  const [selectedImg, setSelectedImg] = useState(imgUrl);

  console.log('projectId :>> ', projectId);
  console.log('project :>> ', project);
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-36 md:h-48 bg-white dark:bg-gray-800'>
        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'>
          {project.title}
        </motion.h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-[#F1F1F1] dark:bg-gray-900 px-5'>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='max-w-6xl mx-auto flex flex-wrap flex-row py-20 pb-40'>
          {/* Selected Image Display */}
          <div className='relative overflow-hidden w-full'>
            <div className='h-60 md:h-620 object-cover overflow-y-auto'>
              <img src={selectedImg} alt='portfolio' className='' />
            </div>
            {/* <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
              {title}
            </h1>
            <h1 className='bg-brandPrimary py-1 px-2 rounded-md absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
              {number.length === 1 ? '0' + number : number}
            </h1> */}
          </div>
          {/* Image selector */}
          <div className='w-full mt-6'>
            <Slider {...sliderSettings}>
              {projectImages &&
                projectImages.map((img, i) => (
                  <div
                    key={i}
                    className={`mb-5 h-24 md:h-48 object-cover cursor-pointer transition-all duration-300  ease hover:-translate-y-2 hover:scale-105 even:px-2
                   ${
                     selectedImg === img &&
                     'border border-2 border-brandPrimary'
                   }`}
                    onClick={() => setSelectedImg(img)}>
                    <img
                      src={img}
                      alt={`${title} project image`}
                      className='object-cover h-full w-full'
                    />
                  </div>
                ))}
            </Slider>
          </div>
          {/* About */}
          {/* <div className='w-full mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            veniam quos quidem, numquam, aperiam sit facilis totam, modi
            delectus tempore saepe ex laboriosam aliquam atque. Nesciunt dicta
            porro fugit harum?
          </div> */}
          {/* Tech Stack */}
          <div></div>
        </motion.div>
      </div>
    </section>
  );
}
