import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h3 className="footer_header">
        Get In Touch
      </h3>
      <div className="footer_social">
        <ul>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-github"></i></li>
          <li><i className="fab fa-linkedin"></i></li>
        </ul>
      </div>
      <div className="Updated text-center"><h6>Last Updated December 2019.</h6></div>
      <div className="footer-copyright text-center py-3">© 2019 Copyright: Walter Marikwa. All Rights Reserved</div>
    </div>
  )
}

export default Footer;