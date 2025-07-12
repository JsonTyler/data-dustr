import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You – DataDustr</title>
        <meta name="description" content="Thanks for booking with DataDustr! Your consultation is confirmed." />
      </Head>

      <Header />

      <main className="main-content">
        <section className="section-thankyou" style={{ padding: "4rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>You're Booked!</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Thanks for booking a consultation with datadustr.  
            A confirmation email is on its way, and I’m looking forward to helping you soon.
          </p>
          <p style={{ fontSize: "1rem", color: "#999" }}>
            If you have any documents, family details, or questions to share beforehand, feel free to reply to the confirmation email.
          </p>
        </section>
      </main>
    </>
  );
}