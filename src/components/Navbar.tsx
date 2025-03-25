import React from 'react';
import styles from '../styles/Navbar.module.css'; // Ensure correct path to your Navbar.module.css

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navLink}>
        Home
      </a>
      <a href="/about" className={styles.navLink}>
        About
      </a>
      <a href="/projects" className={styles.navLink}>
        Projects
      </a>
      <a href="/contact" className={styles.navLink}>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
