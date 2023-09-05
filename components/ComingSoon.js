import React from 'react'
import Link from 'next/link'
import Socials from './common/Socials'
import Brand from './Brand'
import Image from 'next/image'
import NewsletterSignup from './common/NewsletterSignup'

function ComingSoon() {
  return (
    <div className='h-screen flex flex-col items-center justify-center flex-1 relative'>
      {/* Brand and socials */}
      <nav className='bg-white dark:bg-brandBlack absolute top-0 w-full fade-in delay-4'>
        <div className='px-7 lg:px-20 mx-auto py-10 lg:py-10 bg-white dark:bg-brandBlack'>
          <div className='flex md:flex-row justify-between items-center'>
            <Link href='/'>
              <Brand />
            </Link>

            {/* Socials & Theme toggle */}
            <div className='md:space-x-6 flex flex-row items-center'>
              <Socials />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='h-100 text-center px-7 lg:px-20'>
        <div className='grid grd-cols-1 md:grid-cols-2 gap-4 items-center'>
          {/* Graphics */}
          <div className='flicker-in'>
            <video
              muted
              className='w-full h-full object-cover'
              autoPlay
              loop
              aria-label='Launching Soon Background'
              crossOrigin='anonymous'
              preload='metadata'
              src='/img/launching-soon.mp4'
            ></video>
          </div>
          {/* Copy */}
          <div className='fade-in delay-3'>
            <p className='text-left mb-4 text-xl'>
              It's not here yet, but i'll let you in on a secret. It's coming
              really, really soon. So sit tight and check back in. You just
              might see something that will blow your socks off!
            </p>
            <p className='text-left font-light mb-4'>
              Are you really excited to get in touch OR want to work together
              and build something more amazing than individually wrapped cheese?
            </p>
            <p className='text-left font-light mb-4'>
              Send me an email at{' '}
              <a
                target='_blank'
                href='mailto:jerehme.gayle@gmail.com'
                className='text-brandPrimary hover:underline'
              >
                jerehme.gayle@gmail.com
              </a>
            </p>
            <p className='text-left font-light mb-4'>
              Or use the social links above to connect.
            </p>
            {/* Newsletter Signup */}

            <NewsletterSignup />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ComingSoon
