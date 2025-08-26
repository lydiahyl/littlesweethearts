import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">❤️ KinderHearts</div>
        <div className="footer-center">© 2025 KinderHearts. All rights reserved.</div>
        <div className="footer-right">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
