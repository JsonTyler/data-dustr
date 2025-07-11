import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
    <Head>
      <title>Privacy Policy | DataDustr</title>
      <meta
        name="description"
        content="Learn what we collect, why we collect it, and how we protect your data. No jargon. No tricks."
      />
      <meta name="robots" content="index,follow" />
    </Head>
    <main id="main-content" style={{
      backgroundColor: "#0f0f0f",
      color: "#ffffff",
      fontFamily: "system-ui, sans-serif",
      padding: "4rem 1rem",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.75"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#BE261C", marginBottom: "1rem" }}>
        Privacy, Plain and Simple
      </h1>

      <p>
        You’re trusting us with your family’s story, and that trust matters. This page explains what data we collect, how we use it, and what stays between us (hint: most of it).
      </p>

      <hr style={{ border: "none", height: "2px", backgroundColor: "#BE261C", margin: "2rem 0" }} />

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>What We Collect</h2>
      <p>
        When you use our contact form, we gather the basics:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your phone number</li>
        <li>Your message</li>
      </ul>
      <p>
        That’s it. We use it to respond to you — not to sell you things or track your behavior across the web.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>Analytics (a Little Behind-the-Scenes)</h2>
      <p>
        We use Google Analytics (GA4) to understand how visitors find and use our site — things like which pages are visited most, or what screen sizes people use. It helps us improve.
      </p>
      <p>
        This tracking is anonymous. We don’t know who you are. You can read how Google handles this data{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: "#BE261C" }}>
          here
        </a>.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>Newsletter & Emails</h2>
      <p>
        If you subscribe to updates, your name and email are stored securely via our email provider.
        You can unsubscribe anytime — no guilt, no questions asked.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>Cookies</h2>
      <p>
        We use a few cookies to track analytics and improve site speed. You can block them in your browser and everything will still work.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>We Never Sell Your Data</h2>
      <p>
        Ever. That’s not what we’re about.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#BE261C" }}>Need to Reach Us?</h2>
        <p>
        Want your data removed? Have questions? Just{" "}
        <a href="mailto:datadustr@gmail.com" style={{ color: "#BE261C" }}>email us</a>{" "}
        or <a href="/" style={{ color: "#BE261C" }}>contact us here</a>. We’ll respond like real humans.
        </p>
    </main>
    </>
  );
}
