import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import useWindowDimensions from '@hooks/useWindowDimensions';

export default function FavoriteProjects() {
  const { height, width } = useWindowDimensions();
  const controls = useAnimation();

  const [userScrollAmount, setUserScrollAmount] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [headerOnScreen, setHeaderOnScreen] = useState(false);
  // console.log('userScrollAmount :>> ', userScrollAmount);
  // console.log('headerOnScreen :>> ', headerOnScreen);
  // console.log('headerOffset :>> ', headerOffset);

  useEffect(() => {
    let elem = document.getElementById('project-header');
    let rect = elem.getBoundingClientRect();
    // console.log('rect :>> ', rect);
    setHeaderOffset(height - rect.top);
  }, []);

  // Controls event listener for scroll / sticky nav
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScrollChange);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  useEffect(() => {
    if (headerOnScreen === true) return;
    if (userScrollAmount > headerOffset) {
      setHeaderOnScreen(true);
    }
  }, [userScrollAmount]);

  const handleScrollChange = () => {
    const scrollAmount = window.scrollY;
    setUserScrollAmount(scrollAmount);
  };

  // Animates header in
  useEffect(() => {
    if (headerOnScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.6,
          delay: 0.2,
          ease: 'anticipate',
        },
      });
    }
  }, [headerOnScreen]);

  return (
    <div className='bg-[#eceff1] -mt-40 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <motion.header
          initial={{ opacity: 0, x: -40 }}
          animate={controls}
          id='project-header'
          className='flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-brandPrimary my-20 md:my-0 md:text-brandPrimary dark:text-gray-600 text-center'>
            Favorite Projects
          </h1>
          <Link href='/work'>
            <motion.a
              initial={{ opacity: 0, x: 80 }}
              animate={controls}
              className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-brandPrimary dark:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-arrow-up-right-square'
                stroke='4'
                strokeWidth='4'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
                />
              </svg>
              <p>View all</p>
            </motion.a>
          </Link>
        </motion.header>

        {/* Grid starts here */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={controls}
          className={`grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40`}>
          {/* Single card */}
          <a
            href='https://tailwindmasterkit.com'
            className='w-full block col-span-3 shadow-2xl'>
            <div className='relative overflow-hidden'>
              <img
                src='/img/tmk.jpg'
                alt='portfolio'
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                Tailwind Master Kit
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href='https://placeholdertech.in'
            className='w-full block col-span-3  sm:col-span-2 shadow-2xl'>
            <div className='relative overflow-hidden'>
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src='/img/placeholdertech.png'
                alt='portfolio'
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                PlaceholderTech
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href='https://manuarora.in'
            className='w-full block col-span-3 sm:col-span-1  object-cover'>
            <div className='relative overflow-hidden shadow-2xl'>
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src='/img/portfolio.png'
                alt='portfolio'
                className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                Portfolio
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                03
              </h1>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
