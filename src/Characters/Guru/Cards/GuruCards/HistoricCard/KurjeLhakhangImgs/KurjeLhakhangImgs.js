import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./KurjeLhakhangImgs.module.css";

import KurjeImg1 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg1.png";
import KurjeImg2 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg2.png";
import KurjeImg3 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg3.png";
import KurjeImg4 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg4.png";
import KurjeEnlargeImg1 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg1.png";
import KurjeEnlargeImg3 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm2.png";
import KurjeEnlargeImg4 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm3.png";
import KurjeEnlargeImg2 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg4.png";

const KurjeLhakhangImgs = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { thumb: KurjeImg1, enlarge: KurjeEnlargeImg1 },
    { thumb: KurjeImg2, enlarge: KurjeEnlargeImg3 },
    { thumb: KurjeImg3, enlarge: KurjeEnlargeImg4 },
    { thumb: KurjeImg4, enlarge: KurjeEnlargeImg2 },
];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleSlideChange = (swiper) => {
    setSelectedImageIndex(swiper.activeIndex); // Update the index on slide change
  };

  return (
    <div>
      <div
        className={styles.PalaceImgContainer}
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          opacity: selectedImageIndex !== null ? 0.5 : 1,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles[`KurjeLhakhangTemplesImg${index + 1}`]}
          >
            <img
              src={image.thumb}
              alt={`img ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className={styles.thumbnail}
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.palaceenlargedImg1}>
          <button onClick={handleClose} className={styles.closeButton}>
            &times; {/* Close button symbol */}
          </button>
          <Swiper
            initialSlide={selectedImageIndex}
            spaceBetween={10}
            navigation
            onSlideChange={handleSlideChange} // Attach the slide change handler
            className={styles.swiperContainer}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.DrugpaTemplesEnlargeImgs}>
                  <img
                    src={image.enlarge}
                    alt={`Enlarged ${index + 1}`}
                    className={styles.enlargedImg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className={styles.customPagination}>
            {images.map((_, index) => (
              <span
                key={index}
                className={styles.dot}
                style={{
                  height: selectedImageIndex === index ? "12px" : "8px", // Increase size for current image
                  width: selectedImageIndex === index ? "12px" : "8px", // Increase size for current image
                  backgroundColor:
                    selectedImageIndex === index ? "black" : "gray", // Change color based on selection
                }}
                onClick={() => setSelectedImageIndex(index)} // Set the current image on click
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KurjeLhakhangImgs;
