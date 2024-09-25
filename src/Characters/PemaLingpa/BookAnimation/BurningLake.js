import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "../BookAnimation/NaringDragBook/NaringDragBook.module.css";
import comicBookCover from "../../../assests/BookPages/BurningLakeCover.jpg";
import BurningLakeCover from "../../../assests/BookPages/BurningLakeCover.jpg";
import BurningLakeRight from "../../../assests/BookPages/BurningLakeRightPage.jpg";
import BurningLakeLeft from "../../../assests/BookPages/BuringLakeLeftPage.jpg";

const BurningLakeBook = () => {
  return (
    <div className={styles.flipbookContainer}>
      <HTMLFlipBook
        width={230}
        height={330}
        className={styles.flipBook}
        startPage={7}
      >
        <div className={styles.transparentPage}>
          <img src={comicBookCover} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeCover} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeRight} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeLeft} alt="Inner Right Page" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeRight} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={BurningLakeLeft} alt="Inner Right Page" />
        </div>
        <div className={styles.page}>
          <img src={comicBookCover} alt="Comic Book Cover" />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default BurningLakeBook;
