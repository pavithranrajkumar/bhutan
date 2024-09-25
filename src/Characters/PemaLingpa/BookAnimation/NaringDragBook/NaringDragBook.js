import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./NaringDragBook.module.css";
import comicBookCover from "../../../../assests/BookPages/NaringDragCover.jpg";
import NaringDragCover from "../../../../assests/BookPages/NaringDragCover.jpg";
import NaringDragRight from "../../../../assests/BookPages/NaringDragInnerRightPage.jpg";
import NaringDragLeft from "../../../../assests/BookPages/NaringDragInnerLeftpage4.jpg";

const NaringDragBook = () => {
  return (
    <div className={styles.flipbookContainer}>
      <HTMLFlipBook
        width={335}
        height={330}
        className={styles.flipBook}
        startPage={7}
      >
        <div className={styles.transparentPage}>
          <img src={comicBookCover} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragCover} alt="Comic Book Cover" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragRight} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragLeft} alt="Inner Right Page" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragRight} alt="Inner Left Page" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragLeft} alt="Inner Right Page" />
        </div>
        <div className={styles.page}>
          <img src={NaringDragCover} alt="Comic Book Cover" />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default NaringDragBook;
