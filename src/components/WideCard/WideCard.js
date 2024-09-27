import React from "react";
import styles from "./WideCard.module.css";

const WideCard = ({ FrstHeader, ScndHeader, para }) => {
  return (
    <div className={styles.WideCard}>
      <div className={styles.WideCardTextContainer}>
        <div className={styles.WideCardHeader}>
          {FrstHeader} <span> {ScndHeader}</span>
        </div>
        <div className={styles.WideCardPara}>{para}</div>
      </div>
    </div>
  );
};

export default WideCard;
