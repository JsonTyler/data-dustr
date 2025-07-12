import Head from "next/head";
import Header from "@components/Header";

export default function Book() {
  return (
    <>
      <Head>
        <title>Book a Free Consultation – DataDustr</title>
        <meta name="description" content="Book a free genealogy or citizenship consultation with DataDustr." />
      </Head>

      <Header />

      <main className="main-content">
        <section className="section-booking">
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Book a Free Consultation</h1>
            <iframe
              src="https://tidycal.com/datadustr"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              style={{ borderRadius: "8px", border: "1px solid #ccc" }}
              title="TidyCal Booking"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
