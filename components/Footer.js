import React, { useContext } from 'react'
import Socials from './common/Socials'
import AppContext from 'context/appContext'

export default function Footer() {
  const appContext = useContext(AppContext)
  const { initialLoad } = appContext
  return (
    <>
      {!initialLoad && (
        <div className='bg-brandGray dark:bg-brandBlack'>
          <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
            <div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:justify-between items-center mt-8'>
              <div />
              <div className='flex flex-col items-center font-light'>
                <p className='mb-3'>
                  Made with<span className='mr-2 ml-1'>💙 </span> by
                  <span className='inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300'>
                    <a
                      className='hover:bg-brandPrimary rounded-md px-2 py-1  hover:text-gray-50'
                      href='/'
                    >
                      Jerehme Gayle
                    </a>
                  </span>
                </p>
                <div>
                  <p>&copy; Jerehme Gayle. All Rights Reserved.</p>
                </div>
              </div>
              {/* Socials */}
              <div className='space-x-4 flex flex-row items-center'>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
