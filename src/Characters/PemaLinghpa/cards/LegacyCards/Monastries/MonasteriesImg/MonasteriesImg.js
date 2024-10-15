import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./MonasteriesImg.module.css";

import MonasteriesImg1 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg1.png";
import MonasteriesImg2 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg2.png";
import MonasteriesImg3 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg3.png";
import MonasteriesImg4 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg4.png";
import MonasteriesImg5 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg5.png";
import MonasteriesImg6 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg6.png";
import MonasteriesImg7 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg7.png";
import MonasteriesImg8 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/MonastreriesImg8.png";
import MonasteriesEnlargeImg1 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg1.png";
import MonasteriesEnlargeImg2 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg2.png";
import MonasteriesEnlargeImg3 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg3.png";
import MonasteriesEnlargeImg4 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg4.png";
import MonasteriesEnlargeImg5 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg5.png";
import MonasteriesEnlargeImg6 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg6.png";
import MonasteriesEnlargeImg7 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg7.png";
import MonasteriesEnlargeImg8 from "../../../../../../assests/PemaLingpa/Legacy/Monastries/EnlargeImg/MonasterisImg8.png";

const MonasteriesImg = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { thumb: MonasteriesImg1, enlarge: MonasteriesEnlargeImg1 },
    { thumb: MonasteriesImg2, enlarge: MonasteriesEnlargeImg2 },
    { thumb: MonasteriesImg3, enlarge: MonasteriesEnlargeImg3 },
    { thumb: MonasteriesImg4, enlarge: MonasteriesEnlargeImg4 },
    { thumb: MonasteriesImg5, enlarge: MonasteriesEnlargeImg5 },
    { thumb: MonasteriesImg6, enlarge: MonasteriesEnlargeImg6 },
    { thumb: MonasteriesImg7, enlarge: MonasteriesEnlargeImg7 },
    { thumb: MonasteriesImg8, enlarge: MonasteriesEnlargeImg8 },
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
            className={styles[`MonasteriesImg${index + 1}`]}
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

export default MonasteriesImg;
