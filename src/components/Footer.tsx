// Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css'; // Correct path to your Footer.module.css

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 My Portfolio</p>
      <a href="https://github.com/my-profile">GitHub</a>
      <a href="https://linkedin.com/in/my-profile">LinkedIn</a>
    </footer>
  );
};

export default Footer;
