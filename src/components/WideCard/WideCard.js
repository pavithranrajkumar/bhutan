import React from "react";
import styles from "./WideCard.module.css";

const WideCard = ({
  FrstHeader,
  ScndHeader,
  para,
  width,
  height,
  headerFontSize,
  paraFontSize,
}) => {
  return (
    <div className={styles.WideCard} style={{ width, height }}>
      <div className={styles.WideCardTextContainer}>
        <div
          className={styles.WideCardHeader}
          style={{ fontSize: headerFontSize }}
        >
          {FrstHeader} <span> {ScndHeader}</span>
        </div>
        <div className={styles.WideCardPara} style={{ fontSize: paraFontSize }}>
          {para}
        </div>
      </div>
    </div>
  );
};

export default WideCard;
