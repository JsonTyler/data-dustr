import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>DataDustr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-layout">
        <Header />
        <main className="main-content text-center">
          <h2>Welcome to DataDustr</h2>
          <p>Clean, organize, and declutter your digital world.</p>

          <div style={{
               background: '#ffe08a',
               color: '#1a1a1a',
               padding: '0.75rem 1.25rem',
               borderRadius: '6px',
               fontWeight: 600,
               display: 'inline-block',
               marginTop: '2rem'
              }}>
                🚧 We’re cleaning up — come back soon for our launch!
                <br />
                <br />
                <small>Sign up for our newsletter below to be notified.</small>
              </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
