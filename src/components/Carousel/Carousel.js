import React, { useState } from 'react';
import styles from './Carousel.module.css'; // Import your styles

const Carousel = ({ images, currentIndex, setCurrentIndex }) => {
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        &#8249; {/* Left Arrow */}
      </button>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.enlargedImages} />
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <button onClick={handleNext} disabled={currentIndex === images.length - 1}>
        &#8250; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
