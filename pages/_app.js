import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/fontawesome';
import '@styles/globals.css';
import { useEffect } from 'react';
import UnderConstructionOverlay from '../components/UnderConstructionOverlay';
import Footer from '../components/Footer';

const showOverlay = process.env.NEXT_PUBLIC_SHOW_OVERLAY === 'true';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="app-shell">
      {showOverlay ? (
        <UnderConstructionOverlay />
      ) : (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Application;