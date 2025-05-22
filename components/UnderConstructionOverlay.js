import styles from './UnderConstructionOverlay.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function UnderConstructionOverlay() {
  const [submitted, setSubmitted] = useState(false);

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('/__newsletterForm.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        form.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error(await res.text());
      }
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.logoWrapper}>
        <Image
          src="/datadustrBlackPlainSvg.svg"
          alt="datadustr logo"
          width={300}
          height={60}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>🚧 We’re cleaning up 🚧</h1>
        <h2 className={styles.subheading}>Come back soon for our launch!</h2>
        <p className={styles.message}>Sign up for our newsletter below to be notified.</p>

        {/* Mobile-only newsletter form */}
        <form
          className={styles.mobileNewsletter}
          name="newsletter"
          method="POST"
          action="/__newsletterForm.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleMobileSubmit}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <button type="submit">Join</button>
          {submitted && <span className={styles.successMsg}>🎉 Subscribed!</span>}
        </form>
      </div>
    </div>
  );
}