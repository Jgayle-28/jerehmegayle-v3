import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import routes from '@constants/routes';
import userData from '@constants/data';
import Instagram from 'icons/Instagram';
import Twitter from 'icons/Twitter';
import LinkedIn from 'icons/LinkedIn';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'anticipate',
        duration: 1,
        delay: 3.5,
      },
      opacity: {
        duration: 1,
        delay: 3.5,
      },
    },
  },
  hidden: { opacity: 0, y: 50 },
};

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  console.log('router.asPath :>> ', router.asPath);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='max-w-6xl mx-auto px-4 py-10 md:py-20'>
      {/* <div className='max-w-6xl mx-auto px-4 py-10 md:py-20 fade-in-bottom navBar'> */}
      <div className='flex md:flex-row justify-between items-center'>
        {/* Logo / Home / Text */}
        <div className='flex flex-col'>
          <Link href='/'>
            <a>
              <h1 className='font-semibold text-xl dark:text-gray-100'>
                {userData.name.split(' ')[0]}
                <span className='text-brandPrimary ml-1'>
                  {userData.name.split(' ')[1]}
                </span>
              </h1>
              <p className='text-base font-light text-gray-500 dark:text-gray-300'>
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>
        {/* Navbar Links */}
        <div className='space-x-8 hidden md:block'>
          {routes &&
            routes.map((route) => {
              const { routeName, routeUrl } = route;
              // If on landing page do not show link
              if (routeUrl === '/' && router.asPath === '/') return;
              // Return nav links
              return (
                <Link href={routeUrl}>
                  <a
                    className={`relative w-max text-base pb-1 pt-2 px-2 group ${
                      router.asPath === routeUrl
                        ? 'text-gray-800 font-bold dark:text-gray-400'
                        : 'text-gray-600 dark:text-gray-300 font-normal '
                    } hover:!text-white z-10`}>
                    {routeName}{' '}
                    <span
                      className={`absolute -z-1 left-0 -bottom-1 w-full  transition-all bg-brandPrimary group-hover:h-full 
                    ${router.asPath === routeUrl ? 'h-0.5' : 'h-0'}`}></span>
                    {router.asPath === routeUrl && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-arrow-down inline-block h-3 w-3'
                        viewBox='0 0 16 16'>
                        <path
                          fillRule='evenodd'
                          d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                        />
                      </svg>
                    )}
                  </a>
                </Link>
              );
            })}
        </div>
        {/* Socials */}
        <div className='space-x-4 flex flex-row items-center'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={userData.socialLinks.instagram}
            className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
            <Instagram />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={userData.socialLinks.twitter}
            className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
            <Twitter />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={userData.socialLinks.linkedin}
            className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
            <LinkedIn />
          </a>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-10 h-10 p-3 rounded focus:outline-none'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='currentColor'
                className='w-4 h-4 text-yellow-500 dark:text-yellow-500'>
                {theme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className='space-x-8 block md:hidden mt-4'>
        <Link href='/about'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!opacity-50'>
            About
          </a>
        </Link>
        <Link href='/projects'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Projects
          </a>
        </Link>
        <Link href='/experience'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Experience
          </a>
        </Link>
        <Link href='/contact'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Contact
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
