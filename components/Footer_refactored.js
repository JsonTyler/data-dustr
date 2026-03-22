import { useState } from 'react';
import styles from './Footer.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { footerContent, footerLinks } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const router = useRouter();
  const [toastVisible, setToastVisible] = useState(false);

  if (footerContent.hideOnPages.includes(router.pathname)) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(footerContent.newsletterFormAction, {
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
    <footer className={`${styles.footer} footer-global`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.footerTagline}>
            <span role="img" aria-label="clarity">{footerContent.taglineEmoji}</span> {footerContent.tagline}
          </div>
          <div className={styles.socials}>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {footerLinks.map((section) => (
            <div key={section.title} className={styles.footerSection}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <form
          name="newsletter"
          method="POST"
          action={footerContent.newsletterFormAction}
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.newsletter}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p hidden>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>

          <label htmlFor="email">Stay updated</label>
          <input type="email" id="email" name="email" placeholder="Email address" required />
          <button type="submit" className={`btn btn-primary ${styles.subscribeButton}`}>
            Join
          </button>
        </form>
      </div>

      <div className={styles.bottomRow}>
        © {new Date().getFullYear()} {siteConfig.name} · <Link href="/privacy">Privacy</Link>
      </div>

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
