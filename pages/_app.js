import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import '../styles/global.scss'
import '../styles/Home.module.css'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import AppState from 'context/AppState'
import Navbar from '@components/navBar/NavBar'
import Footer from '@components/Footer'

function MyApp({ Component, pageProps, router }) {
  // TODO: Need to uncomment navbar & footer when ready to release
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <AppState>
        <div className='dark:bg-brandBlack'>
          {/* <Navbar /> */}
          <AnimatePresence
            exitBeforeEnter
            // initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
            <Analytics />
          </AnimatePresence>
          {/* <Footer /> */}
        </div>
      </AppState>
    </ThemeProvider>
  )
}

export default MyApp
