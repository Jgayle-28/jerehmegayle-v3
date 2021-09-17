import React from 'react';
import userData from '@constants/data';
import Instagram from 'icons/Instagram';
import Twitter from 'icons/Twitter';
import LinkedIn from 'icons/LinkedIn';

export default function Footer() {
  return (
    <div className='bg-[#eceff1] dark:bg-gray-900'>
      <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
        <div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
          <div />
          <div className='flex flex-col items-center font-light'>
            {/* Support me by keeping this in the footer, please. :) */}
            <p className='mb-3'>
              Made with 💙 by
              <div className='inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300'>
                <a
                  className='hover:bg-brandPrimary rounded-md px-2 py-1  hover:text-gray-50'
                  href='/'>
                  Jerehme Gayle
                </a>
              </div>
            </p>

            <div>
              <p>&copy; Jerehme Gayle. All Rights Reserved.</p>
            </div>
          </div>

          <div className='space-x-4 flex flex-row items-center'>
            <a
              href={userData.socialLinks.instagram}
              className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
              <Instagram />
            </a>
            <a
              href={userData.socialLinks.twitter}
              className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
              <Twitter />
            </a>
            <a
              href={userData.socialLinks.linkedin}
              className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary'>
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
