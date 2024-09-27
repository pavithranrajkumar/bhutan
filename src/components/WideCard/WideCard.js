import React from "react";
import styles from "./WideCard.module.css";

const WideCard = ({ FrstHeader, ScndHeader, para, width, height }) => {
  return (
    <div className={styles.WideCard} style={{ width, height }}>
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
