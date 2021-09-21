import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import '../styles/Home.module.css';

import { ThemeProvider } from 'next-themes';
import AppState from 'context/AppState';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </ThemeProvider>
  );
}

export default MyApp;
