import React from "react";
import styles from "./YearText.module.css";

const YearText = ({ fontSize, BornYear, Endyear, marginLeft }) => {
  return (
    <div className={styles.YearTextContainer} style={{ fontSize }}>
      <div style={{ marginLeft }}>{BornYear}</div>
      <span>{Endyear}</span>
    </div>
  );
};

export default YearText;
