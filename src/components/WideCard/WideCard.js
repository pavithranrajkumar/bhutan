import React from "react";
import styles from "./WideCard.module.css";
import { BHUTAN } from "../../constants/languages/Language";

const WideCard = ({
  FrstHeader,
  ScndHeader,
  para,
  width,
  height,
  headerFontSize,
  paraFontSize,
  onClick,
  isActive,
  language
}) => {
  const contentLineHeight = language === BHUTAN ? "1" : "";

  return (
    <div
      className={`${styles.WideCard} ${styles.slideIn}  ${
        isActive ? styles.activeCard : ""
      }`}
      style={{ width, height }}
      onClick={onClick}
    >
      <div className={styles.WideCardTextContainer}>
        <div
          className={styles.WideCardHeader}
          style={{ fontSize: headerFontSize,     lineHeight: contentLineHeight,
          }}
        >
          {FrstHeader} <span> {ScndHeader}</span>
        </div>
        <div className={styles.WideCardPara} style={{ fontSize: paraFontSize ,   lineHeight: contentLineHeight,
}}>
          {para}
        </div>
      </div>
    </div>
  );
};

export default WideCard;
