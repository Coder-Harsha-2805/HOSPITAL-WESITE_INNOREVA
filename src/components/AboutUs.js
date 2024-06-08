import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MainPage.module.css';

function ImgBg() {
  return (
    <div className="card bg-dark text-white">
      <img className={`card-img ${styles.imageUs}`} src="../bgg.avif" alt="Card image" />
      <div className="card-img-overlay">
        <h5 className={`card-title ${styles.doctext}`}>
          ABOUT US
        </h5>
        <div className={styles['animation-example']}>
          <div className={styles.item}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.item} ${styles['-type2']}`}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.item} ${styles['-type2']}`}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.item} ${styles['-type2']}`}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.item} ${styles['-type2']}`}>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.center}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
        <p className={`card-title ${styles.abtus}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem qui libero quisquam officiis corporis veniam dolor ut facere ipsum? Tempora, sequi placeat quae natus deserunt reprehenderit consequatur voluptates ratione iure neque ipsa, eius quidem maxime aut officiis, molestiae eos! Modi aut harum illo facere, dolorum quibusdam pariatur eos tempora a. Voluptatibus quidem animi rem placeat quas eius vero adipisci. Non unde illum dolore, aliquid odit earum corrupti sint sit! Ut quod accusantium quas adipisci aperiam minus tenetur nemo doloremque, sed non, aspernatur ex hic eligendi cum numquam cupiditate modi dolorem molestiae, sit natus. Quae, deleniti esse. In doloremque, nihil quasi quo debitis sint molestias possimus illum neque ducimus! Delectus consequatur, nemo dicta officiis quam ad assumenda, tenetur non cumque quos culpa aliquid deserunt dolores aspernatur quaerat, distinctio neque! Expedita saepe rerum explicabo voluptatum perspiciatis, vero sapiente, dignissimos eligendi cupiditate voluptatem similique sit dolores harum voluptates impedit in animi. Cupiditate sequi dolor placeat debitis asperiores suscipit necessitatibus totam quia consectetur quibusdam facere vel corrupti veniam maxime rem, ducimus dicta atque. Voluptatibus eius quod, ut voluptatem debitis aperiam omnis culpa fugit eos qui, sint veniam! Fuga laborum architecto ea saepe cupiditate, tempora harum doloremque sed necessitatibus minima beatae aspernatur accusamus vel non?
        </p>
      </div>
    </div>
  );
}

export default ImgBg;
