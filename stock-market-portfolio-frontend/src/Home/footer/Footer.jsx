// src/Footer.jsx

import React from 'react';
import  './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Stock Market Portfolio. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, and
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>.
      </p>
    </footer>
  );
};

export default Footer;
