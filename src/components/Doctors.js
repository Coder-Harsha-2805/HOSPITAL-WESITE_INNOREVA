import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './MainPage.module.css';
import '@fontsource/roboto/300.css';
function Doctors() {
   return (
      <div className="card bg-dark text-white">
         <img className={`card-img ${styles.imageDoc}`} src="../bgg.avif" alt="Card image" />
         <div className="card-img-overlay">
         <h5 className={`card-title ${styles.doctext}`}>The Team behind Success</h5>
            <div className={`card-deck ${styles.docinfo}`}>
               <div className={`card ${styles.docsub}`}>
                  <img className={`card-img-top ${styles.docimg}`} src="../doc1.jpg" alt="Card image cap" />
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className={`card-img-top ${styles.doct}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam nobis quae. Fugiat a, quasi enim quos veritatis reprehenderit aliquam expedita, consectetur voluptatibus tempora culpa obcaecati ullam dolore, voluptatum aliquid.</p>
                  </div>
                  <div className="card-footer">
                     <small className="text-muted">Dr. Mr. Ashok Birla</small>
                  </div>
               </div>
               <div className={`card ${styles.docsub}`}>
                  <img className={`card-img-top ${styles.docimg}`} src="../doc2.jpg" alt="Card image cap" />
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className={`card-img-top ${styles.doct}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda iure esse dolor minus deserunt soluta cum fugit, quam itaque saepe hic consequatur corporis enim odio voluptate molestias!</p>
                  </div>
                  <div className="card-footer">
                     <small className="text-muted">Dr. Mrs. Gautami Birla</small>
                  </div>
               </div>
               <div className={`card ${styles.docsub}`}>
                  <img className={`card-img-top ${styles.docimg}`} src="../doc3.jpg" alt="Card image cap" />
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className={`card-img-top ${styles.doct}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nobis itaque culpa facilis numquam, eos nesciunt quam quod, voluptas accusantium vero atque beatae ut vel fugiat delectus id architecto mollitia?</p>
                  </div>
                  <div className="card-footer">
                     <small className="text-muted">Dr. Mr. Ayush Upadhyay</small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Doctors
