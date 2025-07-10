import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <img src="/datadustrWhitePlainSvg.svg" alt="Datadustr logo" className={styles.logo} />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link href="#top" aria-label="home menu link">Home</Link>
          <Link href="#services" aria-label="services menu link">Genealogy Services</Link>
          <Link href="#process" aria-label="process menu link">How It Works</Link>
          <Link href="#about" aria-label="about menu link">About + My Story</Link>
          <Link href="#faq" aria-label="faq menu link">FAQ</Link>
          <Link href="#testimonials" aria-label="testimonials">Testimonials</Link>
          <Link href="#contact" className={styles.cta} aria-label="contact">Get Started</Link>
        </nav>
      </div>
    </header>
  );
}