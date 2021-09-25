import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
// Data
import userData from '@constants/data';
import {
  buttonVariants,
  headerVariants,
  sectionVariants,
  sliderSettings,
} from '@constants/helperData';
import SliderChevronLeft from 'icons/SliderChevronLeft';
import SliderChevronRight from 'icons/SliderChevronRight';
import CustomScrollBars from './common/CustomScrollBars';

export default function ProjectTemplate() {
  const router = useRouter();
  const { back } = router;
  const { projectId } = router.query;

  const [project, setProject] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (userData) setProject(userData.projects[projectId]);
  }, []);

  const PrevButton = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} !text-black dark:!text-brandGray`}
        onClick={onClick}
        style={{ ...style }}>
        <SliderChevronLeft />
      </div>
    );
  };

  const NextButton = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} !text-black dark:!text-brandGray`}
        onClick={onClick}
        style={{ ...style }}>
        <SliderChevronRight />
      </div>
    );
  };

  const updatedSettings = {
    ...sliderSettings,
    // This stops duplicates for less than 4 items
    infinite: project !== null && project.projectImages >= 4 ? true : false,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-36 md:h-48 bg-white dark:bg-gray-800'>
        <motion.div
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          className='pl-5'>
          <button
            className='pl-5 py-1 px-2 border border-1 rounded-full transition-all ease duration-300 hover:shadow-md hover:-translate-y-1'
            onClick={() => back()}>
            Back to projects
          </button>
        </motion.div>

        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'>
          {project !== null && project.title}
        </motion.h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-brandGray dark:bg-gray-900 px-7'>
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate='visible'
          className='max-w-6xl mx-auto flex flex-wrap flex-row py-20 pb-40'>
          {project !== null && (
            <>
              {/* Technologies used */}
              {project.techStack.length > 0 && (
                <>
                  <p className='w-full mb-3 font-semibold text-black dark:text-white'>
                    Technologies Used:
                  </p>
                  <div className='bg-brandGray opacity-7 p-5 rounded-md shadow  mb-6'>
                    <div className='flex flex-wrap justify-center md:justify-start '>
                      {project.techStack.map((item, i) => (
                        <img
                          key={i}
                          src={item}
                          alt='tech'
                          className='mr-6 h-8 mb-6 md:mb-0'
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
              {/* About */}
              <p className='w-full mb-3 font-semibold text-black dark:text-white'>
                Scope Of Work:
              </p>
              <div
                className='w-full mb-6 tracking-wide'
                dangerouslySetInnerHTML={{ __html: project.about }}>
                {/* {project.about} */}
              </div>
              {/* Image selector */}
              <div
                className={`w-full mt-6 mb-3 ${
                  project.projectImages.length < 4 ? 'mr-auto' : ''
                }`}>
                <Slider {...updatedSettings}>
                  {project.projectImages &&
                    project.projectImages.map((img, i) => (
                      <div
                        key={i}
                        className={`h-24 md:h-48 object-cover cursor-pointer transition-all duration-300  ease hover:translate-y-1 hover:scale-90 even:px-2
                   ${
                     selectedImg === img &&
                     'border border-2 border-brandPrimary'
                   }`}
                        onClick={() => setSelectedImg(img)}>
                        <img
                          src={img}
                          alt={`${project.title} project image`}
                          className='object-cover h-full w-full'
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              {/* Selected Image Display */}
              <div className='relative overflow-hidden w-full'>
                <div className='h-96 md:h-600 object-cover transition-all ease duration-300 rounded-md'>
                  <CustomScrollBars>
                    <img
                      src={selectedImg || project.imgUrl}
                      alt='portfolio'
                      className=''
                    />
                  </CustomScrollBars>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
