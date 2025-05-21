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
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#process">Process</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#quote" className={styles.cta}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}