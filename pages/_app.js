import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/fontawesome';
import '@styles/globals.css';
import { useEffect } from 'react';
import UnderConstructionOverlay from '../components/UnderConstructionOverlay';

const showOverlay = process.env.NEXT_PUBLIC_SHOW_OVERLAY === 'true';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {showOverlay ? <UnderConstructionOverlay /> : <Component {...pageProps} />}
    </>
  );
}

export default Application;