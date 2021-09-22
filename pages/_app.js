import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import '../styles/Home.module.css';

import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import AppState from 'context/AppState';
import Navbar from '@components/navBar/NavBar';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <AppState>
        <div className='dark:bg-gray-800'>
          <Navbar />
          <AnimatePresence
            exitBeforeEnter
            // initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Footer />
        </div>
      </AppState>
    </ThemeProvider>
  );
}

export default MyApp;
