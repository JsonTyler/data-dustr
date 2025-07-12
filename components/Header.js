import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const onHomePage = router.pathname === '/';

  const scrollLink = (id) => (onHomePage ? `#${id}` : `/#${id}`);

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
          <Link href={scrollLink("top")} aria-label="home menu link">Home</Link>
          <Link href={scrollLink("services")} aria-label="services menu link">Genealogy Services</Link>
          <Link href={scrollLink("process")} aria-label="process menu link">How It Works</Link>
          <Link href={scrollLink("about")} aria-label="about menu link">About + My Story</Link>
          <Link href={scrollLink("faq")} aria-label="faq menu link">FAQ</Link>
          <Link href={scrollLink("testimonials")} aria-label="testimonials menu link">Testimonials</Link>
          <Link href={scrollLink("contact")} className={styles.cta} aria-label="contact">Get Started</Link>
        </nav>
      </div>
    </header>
  );
}