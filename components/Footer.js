import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Footer.module.css';

const FontAwesomeIcon = dynamic(() =>
  import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function Footer() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        form.reset();
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
      } else {
        console.error('Submission error: ', await res.text());
      }
    } catch (err) {
      console.error('Fetch failed: ', err);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTagline}>Ctrl + Alt + Declutter.</div>
      <div className={styles.topRow}>
        <div className={styles.leftGroup}>
          <div className={styles.socials}>
            <a href="#"><FontAwesomeIcon icon={['fab', 'google']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
            <a href="https://www.instagram.com/datadustr/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          </div>
        </div>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.newsletter}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <label htmlFor="email">Stay updated</label>
          <input type="email" id="email" name="email" placeholder="Email address" required />
          <button type="submit" className={`btn btn-primary ${styles.subscribeButton}`}>
            Join
          </button>
        </form>
      </div>

      <div className={styles.bottomRow}>© 2025 datadustr</div>

      {toastVisible && (
        <div style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: '#333',
          color: '#fff',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          🎉 You're subscribed!
        </div>
      )}
    </footer>
  );
}
