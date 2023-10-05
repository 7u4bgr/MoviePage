import React from "react";
import styles from "./index.module.css";
import Thrones from "../../assets/images/thrones.png";
const SlideCard = ({data}) => {
  console.log(data);
  return (
    <div className={styles.control}>
      <div className={styles.parents}>
        <div className={styles.thrones}>
          <img className={styles.throness} src={data.image} alt="" />
        </div>
        <div className={styles.dates}>
          <h2>{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
