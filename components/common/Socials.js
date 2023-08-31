import React from 'react'
import userData from '@constants/data'
// Icons
import LinkedIn from 'icons/LinkedIn'
import Instagram from 'icons/Instagram'
import GitHub from 'icons/GitHub'
import Twitter from 'icons/Twitter'

const Socials = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'linkedin':
        return <LinkedIn />
      case 'instagram':
        return <Instagram />
      case 'github':
        return <GitHub />
      case 'twitter':
        return <Twitter />
      default:
        return <Twitter />
    }
  }
  return (
    <div className='flex flex-row justify-start items-center'>
      {userData &&
        Object.entries(userData.socialLinks).map((link) => {
          return (
            <a
              alt-text={link[0]}
              alt={link[0]}
              key={link[1]}
              target='_blank'
              rel='noopener noreferrer'
              href={link[1]}
              className='text-base font-normal text-gray-600 dark:text-gray-300 transition duration-300 ease hover:!text-brandPrimary ml-3'
            >
              {getIcon(link[0])}
            </a>
          )
        })}
    </div>
  )
}

export default Socials
