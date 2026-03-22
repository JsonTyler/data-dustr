import Head from "next/head";
import Header from "@components/Header";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/content";

export default function Declutter() {
  const service = services.find(s => s.id === "digital-declutter");
  
  return (
    <>
      <Head>
        <title>{service.title} – {siteConfig.name}</title>
        <meta name="description" content={service.description} />
      </Head>

      <Header />

      <main className="main-content" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <section className="section-booking" style={{ flex: 1, padding: "3rem 1rem" }}>
          <div style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "2rem 1rem",
          }}>
            <h3 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#000" }}>
              {service.title}
            </h3>
            <div style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <iframe
                src={siteConfig.booking.declutter}
                width="100%"
                height="1200"
                frameBorder="0"
                scrolling="auto"
                style={{
                  border: "none",
                  minHeight: "500px"
                }}
                title="Booking Calendar"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
