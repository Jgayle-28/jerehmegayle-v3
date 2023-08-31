import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import useWindowDimensions from '@hooks/useWindowDimensions'
import BoxArrowOutRight from 'icons/BoxArrowOutRight'
import LandingSectionHeader from './common/LandingSectionHeader'
import AppContext from 'context/appContext'
import userData from '@constants/data'

export default function FavoriteProjects({ finishedAnimation }) {
  const appContext = useContext(AppContext)
  const { initialLoad } = appContext
  const { height, width } = useWindowDimensions()
  const controls = useAnimation()

  const [userScrollAmount, setUserScrollAmount] = useState(0)
  const [headerOffset, setHeaderOffset] = useState(0)
  const [headerOnScreen, setHeaderOnScreen] = useState(false)
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    let elem = document.getElementById('project-header')
    let rect = elem.getBoundingClientRect()
    setHeaderOffset(height - rect.top)
  }, [])

  useEffect(() => {
    if (userData) setProjects(userData.projects)
  }, [])

  // Controls event listener for scroll / sticky nav
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScrollChange)
    }
    return () => {
      window.removeEventListener('scroll', handleScrollChange)
    }
  }, [])

  useEffect(() => {
    if (headerOnScreen === true) return
    if (userScrollAmount > headerOffset) {
      setHeaderOnScreen(true)
    }
  }, [userScrollAmount])

  const handleScrollChange = () => {
    const scrollAmount = window.scrollY
    setUserScrollAmount(scrollAmount)
  }

  // Animates header in
  useEffect(() => {
    if (headerOnScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.6,
          delay: 0.3,
          ease: 'anticipate',
        },
      })
    }
  }, [headerOnScreen])

  const getCurrentClass = () => {
    // if (initialLoad) return '-mt-40 slide-to-top-delay';
    return '-mt-40 slide-to-top-delay'
    // return '-mt-40 slide-to-top';
  }

  return (
    <div className={` ${getCurrentClass()} px-5  pt-0 md:pt-40 md:pt-0`}>
      <div className='max-w-6xl mx-auto'>
        <motion.header
          initial={{ opacity: 0, x: -40 }}
          animate={controls}
          id='project-header'
          className={`flex flex-row flex-wrap justify-start md:justify-between md:items-center pt-20 md:pt-40 mx-0 md:mx-10 my-0`}
        >
          <LandingSectionHeader headerName='Favorite Projects' />
          <motion.div initial={{ opacity: 0, x: 80 }} animate={controls}>
            <Link href='/projects'>
              <a
                data-text='View All'
                // className='mb-10 md:mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg dark:shadow-dark-lg text-xl font-semibold flex flex-row space-x-4 items-center text-brandPrimary dark:text-gray-700 transform hover:scale-95 hover:translate-y-1 hover:!shadow-none transition duration-300 ease-out'
                className='glitch-button'
              >
                View All
                {/* <BoxArrowOutRight />
                <p>View all</p> */}
              </a>
            </Link>
          </motion.div>
        </motion.header>

        {/* Grid starts here */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={controls}
          className={`grid md:grid-cols-4 gap-8 lg:-mt-2 pb-40`}
        >
          {projects !== null && (
            <>
              {/* Single card */}
              <a
                // href='https://tailwindmasterkit.com'
                className='w-full block col-span-4 shadow-2xl'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={projects[0].imgUrl}
                    alt='Project Image'
                    className='transform hover:scale-125 transition duration-2000 ease-out'
                  />
                  <h1 className='hidden absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                    {projects[0].title}
                  </h1>
                  <h1 className='hidden absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                    01
                  </h1>
                </div>
              </a>
              {/* Single card */}
              <a
                // href='https://placeholdertech.in'
                className='w-full block col-span-2  sm:col-span-2 shadow-2xl'
              >
                <div className='relative overflow-hidden'>
                  {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                  <img
                    src={projects[1].imgUrl}
                    alt='Project Image'
                    className='transform hover:scale-125 transition duration-2000 ease-out'
                  />
                  <h1 className='hidden absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                    {projects[1].title}
                  </h1>
                  <h1 className='hidden absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                    02
                  </h1>
                </div>
              </a>
              {/* Single card */}
              <a
                // href='https://manuarora.in'
                className='w-full block col-span-2 sm:col-span-2  object-cover'
              >
                <div className='relative overflow-hidden shadow-2xl'>
                  {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                  <img
                    src={projects[2].imgUrl}
                    alt='Project Image'
                    className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
                  />
                  <h1 className='hidden absolute top-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary rounded-md px-2'>
                    {projects[2].title}
                  </h1>
                  <h1 className='hidden absolute bottom-10 left-10 text-gray-50 font-bold text-xl bg-brandPrimary py-1 px-2 rounded-md'>
                    03
                  </h1>
                </div>
              </a>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
