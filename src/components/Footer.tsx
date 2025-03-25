import React from 'react';
import styles from '../styles/Footer.module.css'; // Ensure correct path to your Footer.module.css

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 My Portfolio</p>
      <a href="https://github.com/my-profile" target="https://github.com/Murthy13579/My-Portfolio" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://linkedin.com/in/my-profile" target="https://www.linkedin.com/in/manikanta-medidi-17896a21a/" rel="noopener noreferrer">
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
