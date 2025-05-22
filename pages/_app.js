import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/fontawesome';
import '@styles/globals.css';
import { useEffect } from 'react';
import UnderConstructionOverlay from '../components/UnderConstructionOverlay';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <UnderConstructionOverlay />
      <Component {...pageProps} />
    </>
  );
}

export default Application;