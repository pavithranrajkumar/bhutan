// Trial.jsx
import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./Trial.module.css"; // Import CSS module
import comicBookCover from "../../assests/Comic Book Cover.jpg"; // Correct path
import innerLeftPage from "../../assests/BookPages/InnerLeftpage4.jpg"; // Correct path
import innerRightPage from "../../assests/BookPages/InnerRightPage.jpg"; // Correct path

const FlipBook = () => {
  return (
    <div className={styles.flipbookContainer}>
      <HTMLFlipBook width={300} height={400} className={styles.flipBook}>
        {/* Each page is a div */}
        <div className={styles.demoPage}>
          <img src={comicBookCover} alt="Comic Book Cover" />
        </div>
        <div className={styles.demoPage}>
          <img src={innerLeftPage} alt="Inner Left Page" />
        </div>
        <div className={styles.demoPage}>
          <img src={innerRightPage} alt="Inner Right Page" />
        </div>
        <div className={styles.demoPage}>
          <img src={comicBookCover} alt="Comic Book Cover" />
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
