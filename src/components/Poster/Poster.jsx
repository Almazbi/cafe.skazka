import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/povor1.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>СКАЗОЧНОЕ</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>Фирменный</div>
        <h1 className={styles.head}>"Кафе Сказка: Вкус и атмосфера, создающие сказочное настроение!"</h1>
        <button className={styles.button}>Заказать сейчас</button>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
