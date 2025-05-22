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

        </main>
        <Footer />
      </div>
    </>
  );
}
