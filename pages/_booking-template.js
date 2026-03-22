import Head from "next/head";
import Header from "@components/Header";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Generic Booking Page Template
 * Used for: /file-organization, /email-cleanup, /business-data, /declutter, /systems
 */
export default function BookingPage({ title, description, bookingUrl }) {
  return (
    <>
      <Head>
        <title>{title} Booking – {siteConfig.name}</title>
        <meta name="description" content={description} />
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
                {title}
              </h3>
              <iframe
                src={bookingUrl}
                width="100%"
                height="1200"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: "none",
                  minHeight: "500px"
                }}
                title="Booking Calendar"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}