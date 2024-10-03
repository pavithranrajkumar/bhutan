import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./BurningLake.module.css";
import BurningLakeBookImg from "../../../assests/PemaLingpa/Revelations/BurningLake.png";
import BurningLakeBookImg1 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg1.png";
import BurningLakeBookImg2 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg2.png";
import BurningLakeBookImg3 from "../../../assests/PemaLingpa/BurningLakeBook/BurningLakeBookImg3.png";

import { PEMA_LINGPA_INFORMATION } from "../../../constants/Characters/PremaLingpa";

const BurningLakeBook = ({ language, onNaringDragAnimationCardClick }) => {
  return (
    <div className={styles.flipbookContainer}>
      <HTMLFlipBook
        width={230}
        height={330}
        className={styles.flipBook}
        startPage={7}
      >
        <div className={styles.transparentPage}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg2} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeBookImg3} alt="Inner Right Page" />
        </div>
        {/* <div className={styles.page}>
          <img src={BurningLakeBookImg3} alt="Inner Left Page" />
        </div> */}
        {/* <div className={styles.page}>
          <img src={BurningLakeLeft} alt="Inner Right Page" />
        </div> */}
        <div className={styles.page}>
          <img src={BurningLakeBookImg1} alt="Comic Book Cover" />
        </div>
      </HTMLFlipBook>
      <div
        className={styles.revelationsCard}
        onClick={onNaringDragAnimationCardClick}
      >
        <div className={styles.title}>
          {PEMA_LINGPA_INFORMATION[language].naringDrag.header}
        </div>
        <div className={styles.header}>
          {PEMA_LINGPA_INFORMATION[language].naringDrag.title}
        </div>
      </div>
    </div>
  );
};

export default BurningLakeBook;
