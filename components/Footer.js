import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTagline}>Ctrl + Alt + Declutter.</div>
      <div className={styles.topRow}>
        <div className={styles.leftGroup}>
          <div className={styles.socials}>
            <a href="#" target="_blank"><FontAwesomeIcon  icon={['fab', 'google']} /></a>
            <a href="#" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
            <a href="https://www.instagram.com/datadustr/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          </div>
        </div>
        <form className={styles.newsletter}>
          <label htmlFor="email">Stay updated</label>
          <input type="email" id="email" placeholder="Email address" />
          <button type="submit" className={`btn btn-primary ${styles.subscribeButton}`}>Join</button>
        </form>
      </div>
      <div className={styles.bottomRow}>
        © 2025 datadustr
      </div>
    </footer>
  );
}