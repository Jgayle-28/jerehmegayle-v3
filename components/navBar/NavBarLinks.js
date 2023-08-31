import React from 'react'
import { useRouter } from 'next/router'
import routes from '@constants/routes'
import ArrowDown from 'icons/ArrowDown'
import Link from 'next/link'

const NavBarLinks = () => {
  const router = useRouter()

  return (
    <>
      {routes &&
        routes.map((route) => {
          const { routeName, routeUrl } = route
          // If on landing page do not show link
          if (routeUrl === '/' && router.asPath === '/') return
          // Return nav links
          return (
            <Link href={routeUrl} key={routeName}>
              <a
                data-text={routeName}
                id='nav-link-wrapper'
                className={`relative w-max text-base pb-1 pt-2 px-2 group ${
                  router.asPath === routeUrl
                    ? 'text-brandPrimary dark:brandPrimary'
                    : 'text-gray-600 dark:text-gray-300 font-normal '
                } hover:!text-white z-10 nav-link`}
              >
                <span>{routeName}</span>{' '}
                {router.asPath === routeUrl && <ArrowDown />}
              </a>
              {/* <a
                className={`relative w-max text-base pb-1 pt-2 px-2 group ${
                  router.asPath === routeUrl
                    ? 'text-gray-800 font-bold dark:text-gray-400'
                    : 'text-gray-600 dark:text-gray-300 font-normal '
                } hover:!text-white z-10`}>
                {routeName}{' '}
                <span
                  className={`absolute -z-1 left-0 -bottom-1 w-full  transition-all bg-brandPrimary group-hover:h-full 
                    ${router.asPath === routeUrl ? 'h-0.5' : 'h-0'}`}></span>
                {router.asPath === routeUrl && <ArrowDown />}
              </a> */}
            </Link>
          )
        })}
    </>
  )
}

export default NavBarLinks
