import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { siteConfig } from "@/lib/siteConfig";
import {
  services,
  testimonials,
  faqs,
  processSteps,
  aboutContent,
  heroContent,
  problemContent,
  contactContent
} from "@/lib/content";

export default function Home() {
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
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.domain} />
        <meta property="og:title" content={siteConfig.seo.ogTitle} />
        <meta property="og:description" content={siteConfig.seo.ogDescription} />
        <meta property="og:image" content={siteConfig.seo.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
        <meta name="twitter:url" content={siteConfig.domain} />
        <meta name="twitter:title" content={siteConfig.seo.ogTitle} />
        <meta name="twitter:description" content={siteConfig.seo.ogDescription} />
        <meta name="twitter:image" content={siteConfig.seo.ogImage} />

        {/* Icons for Android/Apple home screen icons  */}
        <meta name="theme-color" content={siteConfig.seo.themeColor} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href={siteConfig.favicon} />

        {/* Structured data schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.organization),
          }}
        />
      </Head>

      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section id="top" className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">{heroContent.title}</h1>
            <p className="hero-subtitle">
              {heroContent.subtitle}
            </p>
            <a href={heroContent.ctaLink} className="hero-button" aria-label="Book a free consultation">
              {heroContent.cta}
            </a>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Problem Section */}
        <section className="section-problem">
          <h2 className="section-title">{problemContent.title}</h2>
          <p className="section-text">{problemContent.description}</p>
        </section>

        {/* Services Section */}
        <section id="services" className="section-services">
          <div className="services-container container">
            <h2 className="section-title">Genealogy Services</h2>

            <div className="row justify-content-center g-4 mt-4">
              {services.map((service) => (
                <div className="col-12 col-sm-6 col-lg-4 d-flex" key={service.id}>
                  <a href={service.route} className="service-card flex-fill text-decoration-none" rel="noopener noreferrer">
                    <div className="price-tag">{service.price}</div>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button className="book"><FontAwesomeIcon icon={faCalendarDays} /> Book Now</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section-process">
          <h2 className="section-title">How It Works</h2>
          <div className="process-wrapper">
            <div className="process-timeline">
              {processSteps.map((step, i) => (
                <div className="process-step" key={step.id}>
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-about">
          <h2 className="section-title">About Datadustr</h2>
          <div className="about-content">
            {aboutContent.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-testimonials">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <p className="quote">
                  "{testimonial.quote}"
                </p>
                <p className="author">— {testimonial.author}, {testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map(({ id, question, answer }) => (
              <details key={id} className="faq-item">
                <summary className="faq-question">{question}</summary>
                <p className="faq-answer">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-contact">
          <h2 className="section-title">{contactContent.title}</h2>
          <div className="contact-content">
            <p className="contact-lead">{contactContent.lead}</p>

            <form
              name={contactContent.formName}
              method="POST"
              action={contactContent.formAction}
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
              onSubmit={handleContactSubmit}
            >
              <input type="hidden" name="form-name" value={contactContent.formName} />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
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
                {contactContent.referralOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label htmlFor="message" className="sr-only">Your message</label>
              <textarea 
                name="message" 
                placeholder="What's your goal — citizenship, family tree, or something else?" 
                rows="5" 
                required 
              />
              
              <button type="submit" className="quote-button" aria-label="submit button">
                Send Message
              </button>
            </form>

            {toastVisible && (
              <div className="contact-toast">
                📬 Message sent! I'll be in touch soon.
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
