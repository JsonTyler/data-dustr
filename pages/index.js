import { useEffect } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // 👈 allows re-triggering
          }
        });
      },
      { threshold: 0.25 }
    );

    const steps = document.querySelectorAll(".process-step");
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>datadustr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="main-content">
        <section id="top" className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">Ctrl + Alt + Declutter</h1>
            <p className="hero-subtitle">
              Silence the noise. Streamline what matters.
            </p>
            <a href="#quote" className="hero-button">
              Let’s Organize
            </a>
          </div>
        </section>

        <section className="section-problem">
          <h2 className="section-title">
            Your data is everywhere. We bring it together.
          </h2>
          <p className="section-text">
            Spreadsheets, APIs, dashboards, warehouses — your data is scattered
            across platforms and people. DataDustr cuts through the noise,
            giving you structure, governance, and clarity in one unified system.
          </p>
        </section>
        <section id="services" className="section-services">
          <div className="services-container">
            <h2 className="section-title">What We Do</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🧾</div>
                <h3>Paper-to-Digital Organization</h3>
                <p>
                  We help transform physical records, scattered files, and messy
                  systems into clean, organized digital structures — ready to
                  scale.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🗂️</div>
                <h3>Smart Structuring</h3>
                <p>
                  We design naming conventions, folder systems, and templates so
                  your digital workspace stays organized and easy to maintain.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Custom Tools & Templates</h3>
                <p>
                  Need a spreadsheet that does the math for you? We build light
                  tools with formulas, automation, and structure tailored to
                  your workflow.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🔁</div>
                <h3>Ongoing Maintenance</h3>
                <p>
                  Organization isn’t one-and-done. We offer flexible maintenance
                  to keep your systems running clean — and your files exactly
                  where you expect.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">📥</div>
                <h3>Inbox Zero Systems</h3>
                <p>
                  We create filing systems for email and document intake so
                  nothing slips through and everything finds its place.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">📅</div>
                <h3>Workflow Simplification</h3>
                <p>
                  We help identify and eliminate busywork in your digital
                  processes using light automation and smart file flows.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="section-process">
          <h2 className="section-title">How We Work</h2>
          <div className="process-wrapper">
            <div className="process-timeline">
              {["Discovery", "Audit", "Digitize", "Structure", "Maintain"].map(
                (title, i) => (
                  <div className="process-step" key={i}>
                    <div className="step-number">{i + 1}</div>
                    <div className="step-content">
                      <h3 className="step-title">{title}</h3>
                      <p className="step-desc">
                        {
                          {
                            Discovery:
                              "We listen. We learn what’s messy, what’s manual, and what’s holding you back.",
                            Audit:
                              "We review every folder, drawer, spreadsheet and process to map the chaos.",
                            Digitize:
                              "We transform clutter into clean, usable digital files, ready for structure.",
                            Structure:
                              "We create folders, naming rules, templates — the system that makes sense.",
                            Maintain:
                              "We offer optional maintenance to keep your world decluttered and on track.",
                          }[title]
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section id="testimonials" className="section-testimonials">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="quote">
                “We sent them a Google Drive that looked like a crime scene. A
                few days later, it was clean, labeled, and totally usable.
                Game-changing.”
              </p>
              <p className="author">— Erin Castillo, Project Lead</p>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                “I didn’t even know what we had until they showed it to us
                properly. Their systems saved us hours a week — and my sanity.”
              </p>
              <p className="author">— Marcus Shah, Co-Founder</p>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                “Before datadustr, I had 14 folders called ‘final-v2’. Now we’ve
                got structure, flow, and zero confusion.”
              </p>
              <p className="author">— Nina Alvarez, Content Strategist</p>
            </div>
          </div>
        </section>
        <section id="about" className="section-about">
          <h2 className="section-title">About datadustr</h2>
          <div className="about-content">
            <p>
              I started datadustr after years of working inside messy systems and 
              realizing most teams just needed structure — not more software.
              We don’t build dashboards. We don’t run analytics. We do the work
              most people avoid — organizing what’s already there.
            </p>
            <p>
              For small teams and solo operators, Datadustr replaces clutter and 
              confusion with calm, clarity, and a system that stays clean.
              We’ve seen the chaos — the backups, the duplicates, the
              “final_final” folders — and we’ve built calm inside it.
            </p>
            <p>
              If your digital workspace feels like a junk drawer, we’ll fix
              that. And we’ll make sure it stays fixed.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
