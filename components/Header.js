import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="../datadustrWhitePlainSvg.svg" alt="Logo" className={styles.logo} />
    </header>
  );
}

