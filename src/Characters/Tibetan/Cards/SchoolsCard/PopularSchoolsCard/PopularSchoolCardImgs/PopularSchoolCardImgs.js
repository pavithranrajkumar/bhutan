import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./PopularSchoolCardImgs.module.css";

// Import popular images
import popularImg1 from "../../../../../../assests/Tibetan/PopularSchools/popularImg1.png";
import popularImg2 from "../../../../../../assests/Tibetan/PopularSchools/popularImg2.png";
import popularImg3 from "../../../../../../assests/Tibetan/PopularSchools/popularImg3.png";
import popularImg4 from "../../../../../../assests/Tibetan/PopularSchools/popularImg4.png";
import popularImg5 from "../../../../../../assests/Tibetan/PopularSchools/popularImg5.png";
import popularImg6 from "../../../../../../assests/Tibetan/PopularSchools/popularImg6.png";
import popularImg7 from "../../../../../../assests/Tibetan/PopularSchools/popularImg7.png";
import popularImg8 from "../../../../../../assests/Tibetan/PopularSchools/popularImg8.png";
import popularImg9 from "../../../../../../assests/Tibetan/PopularSchools/popularImg9.png";
import popularImg10 from "../../../../../../assests/Tibetan/PopularSchools/popularImg10.png";
import popularImg11 from "../../../../../../assests/Tibetan/PopularSchools/popularImg11.png";
import popularImg12 from "../../../../../../assests/Tibetan/PopularSchools/popularImg12.png";
import popularImg13 from "../../../../../../assests/Tibetan/PopularSchools/popularImg13.png";

// Import enlarged images
import EnlargepopularImg1 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar1.png";
import EnlargepopularImg2 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar2.png";
import EnlargepopularImg3 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar3.png";
import EnlargepopularImg4 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar4.png";
import EnlargepopularImg5 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar5.png";
import EnlargepopularImg6 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar6.png";
import EnlargepopularImg7 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar7.png";
import EnlargepopularImg8 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar8.png";
import EnlargepopularImg9 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar9.png";
import EnlargepopularImg10 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar10.png";
import EnlargepopularImg11 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar11.png";
import EnlargepopularImg12 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar12.png";
import EnlargepopularImg13 from "../../../../../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar13.png";

const PopularSchoolCardImgs = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Array of images and their enlarged counterparts
  const images = [
    { thumb: popularImg1, enlarge: EnlargepopularImg1 },
    { thumb: popularImg2, enlarge: EnlargepopularImg2 },
    { thumb: popularImg3, enlarge: EnlargepopularImg3 },
    { thumb: popularImg4, enlarge: EnlargepopularImg4 },
    { thumb: popularImg5, enlarge: EnlargepopularImg5 },
    { thumb: popularImg6, enlarge: EnlargepopularImg6 },
    { thumb: popularImg7, enlarge: EnlargepopularImg7 },
    { thumb: popularImg8, enlarge: EnlargepopularImg8 },
    { thumb: popularImg9, enlarge: EnlargepopularImg9 },
    { thumb: popularImg10, enlarge: EnlargepopularImg10 },
    { thumb: popularImg11, enlarge: EnlargepopularImg11 },
    { thumb: popularImg12, enlarge: EnlargepopularImg12 },
    { thumb: popularImg13, enlarge: EnlargepopularImg13 },
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
        className={styles.KurjeLhakhangTemplesImgContainer}
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
        <div className={styles.DrugpaTemplesEnlargeImg}>
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

export default PopularSchoolCardImgs;
