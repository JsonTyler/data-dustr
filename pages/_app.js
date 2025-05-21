import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/fontawesome';
import '@styles/globals.css';
import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    // Only load Bootstrap JS in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default Application;