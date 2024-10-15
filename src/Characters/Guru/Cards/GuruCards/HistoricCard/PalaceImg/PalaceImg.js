import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./PalaceImg.module.css";

import palaceImg1 from "../../../../../../assests/Guru/Palace/PalaceImg1.png";
import palaceImg2 from "../../../../../../assests/Guru/Palace/PalaceImg2.png";
import palaceImg3 from "../../../../../../assests/Guru/Palace/PalaceImg3.png";
import palaceImg4 from "../../../../../../assests/Guru/Palace/PalaceImg4.png";
import palaceEnlargeImg1 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg1.png";
import palaceEnlargeImg2 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg3.png";
import palaceEnlargeImg3 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg2.png";
import palaceEnlargeImg4 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg4.png";

const PalaceImg = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { thumb: palaceImg1, enlarge: palaceEnlargeImg1 },
    { thumb: palaceImg2, enlarge: palaceEnlargeImg2 },
    { thumb: palaceImg3, enlarge: palaceEnlargeImg3 },
    { thumb: palaceImg4, enlarge: palaceEnlargeImg4 },
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
            className={styles[`palaceImg${index + 1}`]}
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
          {/* <button onClick={handleClose} className={styles.closeButton}>
            &times;
          </button> */}
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

export default PalaceImg;
