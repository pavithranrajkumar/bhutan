import React from "react";
import styles from "./YearText.module.css";

const YearText = ({ fontSize, BornYear, Endyear }) => {
  return (
    <div className={styles.YearTextContainer} style={{ fontSize }}>
      {BornYear}
      <span>{Endyear}</span>
    </div>
  );
};

export default YearText;
