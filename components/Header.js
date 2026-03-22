import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.css';
import { headerNav } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const onHomePage = router.pathname === '/';

  const scrollLink = (id) => (onHomePage ? `#${id}` : `/#${id}`);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <img 
            src={siteConfig.logo.white} 
            alt={`${siteConfig.name} logo`} 
            className={styles.logo} 
          />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {headerNav.map((link) => (
            <Link
              key={link.anchor}
              href={scrollLink(link.anchor)}
              className={link.isCta ? styles.cta : ''}
              aria-label={`${link.label} menu link`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}