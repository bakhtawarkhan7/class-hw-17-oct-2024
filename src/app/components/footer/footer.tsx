import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 text-white p-1`}>
      <p>© 2024 My Landing Page</p>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  );
};

export default Footer;
