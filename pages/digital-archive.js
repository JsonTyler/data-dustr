import Head from "next/head";
import Header from "@components/Header";

export default function Book() {
  return (
    <>
      <Head>
        <title>Book an appointment – datadustr</title>
        <meta name="description" content="Book a digital archive request with datadustr." />
      </Head>

      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#000"
      }}>
        <Header />

        <main className="main-content" style={{ flex: 1, overflow: "hidden" }}>
          <section className="section-booking" style={{ height: "100%", padding: "3rem" }}>
            <div style={{
              maxWidth: "700px",
              margin: "0 auto",
              height: "80vh",
              overflow: "auto",
              padding: "4rem 1rem",
              background: "#fff",
              borderRadius: "10px",
            }}>
              <h3 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#000" }}>
                Services
              </h3>
              <iframe
                src="https://tidycal.com/datadustr/digital-archive"
                width="100%"
                height="1200"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: "none",
                  minHeight: "500px"
                }}
                title="TidyCal Booking"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}