import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';


export default function Home() {
  const FontAwesomeIcon = dynamic(() =>
    import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon),
    { ssr: false }
  );

  
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    const steps = document.querySelectorAll(".process-step");
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        form.reset();
        setToastVisible(true);

        // ✅ GA4 event tracking
        if (typeof gtag === 'function') {
          gtag('event', 'contact_form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submitted',
          });
        }
        setTimeout(() => setToastVisible(false), 3000);
      } else {
        console.error("Contact form submission failed:", await res.text());
      }
    } catch (err) {
      console.error("Contact form error:", err);
    }
  };

  return (
    <>
      <Head>
        <title>DataDustr – Genealogy Research, Tree Building & Citizenship Help</title>
        <meta name="description" content="DataDustr helps you uncover family history, find genealogy records, and prepare citizenship documents with structure and support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datadustr.com/" />
        <meta property="og:title" content="DataDustr – Genealogy Research, Tree Building & Citizenship Help" />
        <meta property="og:description" content="From record searches to digital archives, DataDustr helps you organize your family history and citizenship documents clearly and efficiently." />
        <meta property="og:image" content="https://datadustr.com/social-preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://datadustr.com/" />
        <meta name="twitter:title" content="DataDustr – Genealogy Research, Tree Building & Citizenship Help" />
        <meta name="twitter:description" content="From record searches to digital archives, DataDustr helps you organize your family history and citizenship documents clearly and efficiently." />
        <meta name="twitter:image" content="https://datadustr.com/social-preview.png" />

        {/* Icons for Android/Apple home screen icons  */}
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured data schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DataDustr",
              "url": "https://datadustr.com",
              "logo": "https://datadustr.com/datadustrWhitePlainSvg.svg",
              "sameAs": [
                "https://www.instagram.com/datadustr"
              ]
            }),
          }}
        />

      </Head>

      <Header />
      <main className="main-content">
        <section id="top" className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">We Clean Up the Messy Side of Genealogy.</h1>
            <p className="hero-subtitle">
              Finding records, building trees, preparing for citizenship — 
              <br/>
              done with structure, digital tools, and real human help.
            </p>
            <a href="/consult" className="hero-button" aria-label="Book a free consultation">
              Book a Free Consult
            </a>
          </div>
        </section>

        <hr className="section-divider"></hr>

        <section className="section-problem">
          <h2 className="section-title">
            From Records to Roots — Order from Chaos.
          </h2>
          <p className="section-text">
            Most family stories are buried in scattered records, 
            confusing documents, or forgotten corners of the internet.
            We help you uncover the truth — and bring clarity to your family 
            tree, your citizenship paperwork, and your digital archive.
          </p>
        </section>
        <section id="services" className="section-services">
          <div className="services-container container">
            <h2 className="section-title">Genealogy Services</h2>

            <div className="row justify-content-center g-4 mt-4">
              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <a href="/record-request" className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                  <div className="price-tag">From $45</div>
                  <div className="service-icon">🔎</div>
                  <h3>Genealogy Record Search</h3>
                  <p>We locate historical birth, marriage, baptism, census, and immigration records using national and international archives.</p>
                  <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <a href="/tree-setup" className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                  <div className="price-tag">From $60</div>
                  <div className="service-icon">🌳</div>
                  <h3>Family Tree Building</h3>
                  <p>Starting from what you know, we build or expand your family tree with sourced records and clear connections — no guesswork.</p>
                  <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <a href="/citizenship-prep" className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                  <div className="price-tag">From $55</div>
                  <div className="service-icon">🛂</div>
                  <h3>Citizenship Paperwork Prep</h3>
                  <p>We organize, format, and explain the documents you’ll need for dual citizenship applications — so nothing’s missing at your consulate.</p>
                  <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <a href="/translation" className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                  <div className="price-tag">From $30</div>
                  <div className="service-icon">🌍</div>
                  <h3>Translation & Interpretation</h3>
                  <p>We translate and interpret documents in Spanish, Portuguese, and more — including hard-to-read handwriting or church records.</p>
                  <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                </a>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 d-flex">
                <a href="/digital-archive" className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                  <div className="price-tag">From $50</div>
                  <div className="service-icon">📁</div>
                  <h3>Digital Archive Setup</h3>
                  <p>We create simple, shareable folder systems and naming templates to keep your records clean, accessible, and future-proof.</p>
                  <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="section-process">
          <h2 className="section-title">How It Works</h2>
          <div className="process-wrapper">
            <div className="process-timeline">
              {[
                "Discovery",
                "Record Search",
                "Translation & Review",
                "Tree + Archive Build",
                "Support + Follow-Up",
              ].map((title, i) => (
                <div className="process-step" key={i}>
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{title}</h3>
                    <p className="step-desc">
                      {{
                        Discovery:
                          "We start by learning your goals — whether it's building your family tree, applying for citizenship, or uncovering lost records.",
                        "Record Search":
                          "We dig into archives, databases, and family leads to track down birth, marriage, immigration, and church documents.",
                        "Translation & Review":
                          "We interpret old documents (including Spanish, Portuguese, messy handwriting, etc) so you understand what you have — and what’s missing.",
                        "Tree + Archive Build":
                          "We organize your records into a clean family tree and structured digital archive you can actually use — or submit to a consulate.",
                        "Support + Follow-Up":
                          "We guide you through next steps, offer optional coaching, and keep your archive accessible as your research grows.",
                      }[title]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="section-about">
          <h2 className="section-title">About Datadustr</h2>
          <div className="about-content">
            <p>
              I started Datadustr while digging through church records and family documents to apply for my own dual citizenship. The process was confusing, scattered, and full of dead ends — and I realized others were stuck in the same mess.
            </p>
            <p>
              Datadustr exists to bring structure to family history. Whether you're applying for citizenship, exploring your roots, or just trying to make sense of what you inherited, we help you find the records, understand what they mean, and keep it all organized.
            </p>
            <p>
              We don't offer generic tree builders or vague templates. We do the real work — searching archives, translating old documents, building clean digital trees, and preparing your paperwork so you're ready for whatever comes next.
            </p>
            <p>
              Some clients come to us with nothing but a name and a country. Others have folders of scanned documents they’ve never fully processed. No matter where you're starting from, we make sense of the mess, identify what matters, and structure it clearly — so your family history isn't just collected, it's understood.
            </p>
            <p>
              At its core, Datadustr is about dusting off the forgotten, the misfiled, and the nearly-lost — and turning it into something real. Something you can share. Something that gives you answers.
            </p>
          </div>
        </section>
        <section id="testimonials" className="section-testimonials">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="quote">
                “Datadustr found my grandfather’s immigration record in under a week — something I’d been searching for for years.”
              </p>
              <p className="author">— Ana Morales, Citizenship Applicant</p>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                “I gave them scanned baptism records, family notes, and a bunch of guesses. They gave me a verified family tree and a folder system that makes sense.”
              </p>
              <p className="author">— Devon Liu, Genealogy Client</p>
            </div>

            <div className="testimonial-card">
              <p className="quote">
                “Our consulate appointment would’ve been a disaster without Datadustr. They translated everything, named it properly, and caught what we were missing.”
              </p>
              <p className="author">— Maria & Joel Thompson, Dual Citizenship Applicants</p>
            </div>
          </div>
        </section>
        <section id="faq" className="section-faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {[
              {
                q: "What kind of records can you find?",
                a: "We locate birth, marriage, death, immigration, and church records—plus any supporting documentation for citizenship help or genealogy work.",
              },
              {
                q: "Can you help me apply for dual citizenship?",
                a: "Yes and no. We can help you gather and organize the records you need for your application. We can't make the appointment, go with you, or act as a certified government translator.",
              },
              {
                q: "What if I only have part of the information?",
                a: "No problem. We’ll start with whatever details you have and use archives, databases, and clues to uncover the rest.",
              },
              {
                q: "How do I get started?",
                a: "You have options! You can book a free consult, purchase a service directly from the cards above, or fill out the contact form to ask a question. Whatever works best for you.",
              },
              {
                q: "Do you offer ongoing help?",
                a: "Absolutely. Whether you're adding new discoveries to your family tree or keeping your records organized over time, we're here to support you beyond the initial setup — as much or as little as you need.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{q}</summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="section-contact">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <p className="contact-lead">
              Whether you’re stuck on a record, applying for citizenship, or just don’t know where to start — I’m here.
              Send a quick message and I’ll help you figure out what’s next.
            </p>

            <form
              name="contact"
              method="POST"
              action="/__contactForm.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
              onSubmit={handleContactSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <label htmlFor="name" className="sr-only">Your name</label>
              <input type="text" name="name" placeholder="Your name" required />

              <label htmlFor="email" className="sr-only">Your email</label>
              <input type="email" name="email" placeholder="Your email" required />

              <label htmlFor="phone" className="sr-only">Your phone #</label>
              <input type="tel" name="phone" placeholder="Your phone #" required />

              <label htmlFor="referral" className="sr-only">How did you hear about us?</label>
              <select id="referral" name="referral" required>
                <option value="">How did you hear about us?</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend or Colleague">Friend or Colleague</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="message" className="sr-only">Your message</label>
              <textarea name="message" placeholder="What’s your goal — citizenship, family tree, or something else?" rows="5" required />
              
              <button type="submit" className="quote-button" aria-label="submit button">
                Send Message
              </button>
            </form>

            {toastVisible && (
              <div className="contact-toast">
                📬 Message sent! I’ll be in touch soon.
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
