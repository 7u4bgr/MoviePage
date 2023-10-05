import React from "react";
import styles from './index.module.css'

const Card = ({films}) => {
  console.log(films)
  return (
    
    <div className={styles.parents}>
      <div className={styles.films}>
        <img className={styles.film} src={films.image} alt="" />
      </div>
      <div className={styles.skor}>
        <div>
          <h2>{films.skor}%</h2>
        </div>
        <h2>{films.name}</h2>
      </div>
      <div className={styles.dates}>
        <h2>{films.date}</h2>
      </div>
    </div>
  )
}

export default Card;
