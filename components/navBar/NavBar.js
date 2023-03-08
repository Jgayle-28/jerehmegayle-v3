import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import NavBarLinks from './NavBarLinks'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import AppContext from 'context/appContext'
// Icons
import userData from '@constants/data'
import Socials from '../common/Socials'

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 0.8,
        // delay: 3.45,
      },
      opacity: {
        duration: 0.8,
        // delay: 3.45,
      },
    },
  },
  hidden: { opacity: 0, y: -80 },
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const appContext = useContext(AppContext)
  const { initialLoad } = appContext

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {!initialLoad && (
        <motion.div
          variants={variants}
          initial={'hidden'} //Stops animation on every load
          animate={'visible'} //Stops animation on every load
          className='bg-white dark:bg-brandBlack'
        >
          <div className='max-w-6xl mx-auto px-4 py-10 lg:py-10 bg-white dark:bg-brandBlack'>
            <div className='flex md:flex-row justify-between items-center '>
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
              <div className='md:space-x-4 mt-4 md:mt-0 hidden md:block'>
                <NavBarLinks />
              </div>
              {/* Socials & Theme toggle */}
              <div className='md:space-x-6 flex flex-row items-center'>
                <Socials />
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='w-10 h-10 p-3 rounded focus:outline-none'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      stroke='currentColor'
                      className='w-4 h-4 text-yellow-500 dark:text-yellow-500'
                    >
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
            {/* Mobile Navbar Links */}
            <div className='block md:hidden mt-4'>
              <NavBarLinks />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
