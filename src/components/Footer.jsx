import React from 'react';
import '../styles/index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; {new Date().getFullYear()} FinProH8 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
