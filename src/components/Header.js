import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './MainPage.module.css';
import '@fontsource/roboto/300.css';

function Header() {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container-fluid">
          <img src='../logo.png' alt="Logo" className={`navbar-brand ${styles.navimg}`}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.mainheader}`}>
            <li className={`nav-item`}>
              <Link to="/" className={`nav-link active ${styles.listheader}`} aria-current="page">Home</Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/aboutus" className={`nav-link ${styles.listheader}`}>About Us</Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/services" className={`nav-link ${styles.listheader}`}>Services</Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/login" className={`nav-link ${styles.listheader}`}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;



