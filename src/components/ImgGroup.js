import React from 'react';
import styles from './MainPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ImgGroup() {
   return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
            <div className="carousel-item">
               <img src="/c2.jpg" className={`d-block w-100 ${styles.imggrp}`} alt="..." />
               <div className="carousel-caption d-none d-md-block">
                  <h5>Brain Surgeries and Operations</h5>
               </div>
            </div>
            
            <div className="carousel-item active">
               <img src="/c1.jpg" className={`d-block w-100 ${styles.imggrp}`} alt="..." />
               <div className="carousel-caption d-none d-md-block">
                  <h5>Heart Surgeries and Bypass Treatment</h5>
               </div>
            </div>
            
            <div className="carousel-item">
               <img src="/c3.jpg" className={`d-block w-100 ${styles.imggrp}`} alt="..." />
               <div className="carousel-caption d-none d-md-block">
                  <h5>Lungs Operation and Infection Cure</h5>
               </div>
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
      </div>
   );
}

export default ImgGroup;
