import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MainPage.module.css';
import Typewriter from 'typewriter-effect/dist/core';

function ImgBg() {

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Raising the standards of Healthcare', 'Join hands for a healthy world'],
      autoStart: true,
      loop: true,
      delay: 100,
    });
  }, []);


  return (
    <div className="card bg-dark text-white">
      <img className={`card-img ${styles.imageMain}`} src="../bgg.avif" alt="Card image" />
      <div className="card-img-overlay">
        <h5 className={`card-title ${styles.animate}`}>Birla Hospital</h5>
        <p className="card-text">
          <span id="typewriter" className={styles.typewriter}></span>
        </p>
      </div>
    </div>
  );
}

export default ImgBg;

