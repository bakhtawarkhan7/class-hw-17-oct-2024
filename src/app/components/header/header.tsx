import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} bg-blue-500 text-white p-1`}>
      <h1 className="text-2xl font-bold">My Landing Page</h1>
      <nav>
        <a href="#about" className="mr-2">About Us</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;
