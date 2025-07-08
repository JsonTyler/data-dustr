import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/fontawesome';
import '@styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head'; // ✅ Add this
import UnderConstructionOverlay from '../components/UnderConstructionOverlay';
import Footer from '../components/Footer';

const showOverlay = process.env.NEXT_PUBLIC_SHOW_OVERLAY === 'true';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* ✅ GA4 Script */}
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJV61X6GM3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RJV61X6GM3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

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
    </>
  );
}

export default Application;