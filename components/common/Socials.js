import React from 'react';
import userData from '@constants/data';
// Icons
import LinkedIn from 'icons/LinkedIn';
import Instagram from 'icons/Instagram';
import GitHub from 'icons/GitHub';

const Socials = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'linkedin':
        return <LinkedIn />;
      case 'instagram':
        return <Instagram />;
      case 'github':
        return <GitHub />;
      default:
        break;
    }
  };
  return (
    <div className='flex flex-row justify-start items-center'>
      {userData &&
        Object.entries(userData.socialLinks).map((link) => {
          return (
            <a
              key={link[1]}
              target='_blank'
              rel='noopener noreferrer'
              href={link[1]}
              className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary ml-3'>
              {getIcon(link[0])}
            </a>
          );
        })}
    </div>
  );
};

export default Socials;
