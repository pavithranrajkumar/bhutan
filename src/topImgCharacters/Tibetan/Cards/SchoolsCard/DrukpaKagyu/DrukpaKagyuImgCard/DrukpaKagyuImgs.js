import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import styles from "./DrukpaKagyuImgs.module.css";

import DrugpaKagyuImg1 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg1.png";
import DrugpaKagyuImg2 from "../../../../../..//assests/Tibetan/Drukpakagyu/DrugpaKagyuImg2.png";
import DrugpaKagyuImg3 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg3.png";
import DrugpaKagyuImg4 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg4.png";
import DrugpaKagyuImg5 from "../../../../../..//assests/Tibetan/Drukpakagyu/DrugpaKagyuImg5.png";
import DrugpaKagyuImg6 from "../../../../../..//assests/Tibetan/Drukpakagyu/DrugpaKagyuImg6.png";
import DrugpaKagyuImg7 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg7.png";
import DrugpaKagyuImg8 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg8.png";
import DrugpaKagyuImg9 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg9.png";
import DrugpaKagyuImg10 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg10.png";
import DrugpaKagyuImg11 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg11.png";
import DrugpaKagyuImg12 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg12.png";
import DrugpaKagyuImg13 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg13.png";
import DrugpaKagyuImg14 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg14.png";
import DrugpaKagyuImg15 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg15.png";
import DrugpaKagyuImg16 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg16.png";
import DrugpaKagyuImg17 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg17.png";
import DrugpaKagyuImg18 from "../../../../../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg18.png";
import EnlargeDrukpaImg8 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg8.png";
import EnlargeDrukpaImg1 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg1.png";
import EnlargeDrukpaImg2 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg2.png";
import EnlargeDrukpaImg3 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg3.png";
import EnlargeDrukpaImg4 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg4.png";
import EnlargeDrukpaImg5 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg5.png";
import EnlargeDrukpaImg6 from "../../../../../..//assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg6.png";
import EnlargeDrukpaImg7 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg7.png";
import EnlargeDrukpaImg9 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg9.png";
import EnlargeDrukpaImg10 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg10.png";
import EnlargeDrukpaImg11 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg11.png";
import EnlargeDrukpaImg12 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg12.png";
import EnlargeDrukpaImg13 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg13.png";
import EnlargeDrukpaImg14 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg14.png";
import EnlargeDrukpaImg15 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg15.png";
import EnlargeDrukpaImg16 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg16.png";
import EnlargeDrukpaImg17 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg17.png";
import EnlargeDrukpaImg18 from "../../../../../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg18.png";

const DrukpaKagyuImgs = ({ language, handleOpenPeleingCard }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const swiperRef = useRef(null); // Reference for Swiper

  const images = [
    { thumb: DrugpaKagyuImg1, enlarge: EnlargeDrukpaImg1 },
    { thumb: DrugpaKagyuImg2, enlarge: EnlargeDrukpaImg2 },
    { thumb: DrugpaKagyuImg3, enlarge: EnlargeDrukpaImg3 },
    { thumb: DrugpaKagyuImg4, enlarge: EnlargeDrukpaImg4 },
    { thumb: DrugpaKagyuImg5, enlarge: EnlargeDrukpaImg5 },
    { thumb: DrugpaKagyuImg6, enlarge: EnlargeDrukpaImg6 },
    { thumb: DrugpaKagyuImg7, enlarge: EnlargeDrukpaImg7 },
    { thumb: DrugpaKagyuImg8, enlarge: EnlargeDrukpaImg8 },
    { thumb: DrugpaKagyuImg9, enlarge: EnlargeDrukpaImg9 },
    { thumb: DrugpaKagyuImg10, enlarge: EnlargeDrukpaImg10 },
    { thumb: DrugpaKagyuImg11, enlarge: EnlargeDrukpaImg11 },
    { thumb: DrugpaKagyuImg12, enlarge: EnlargeDrukpaImg12 },
    { thumb: DrugpaKagyuImg13, enlarge: EnlargeDrukpaImg13 },
    { thumb: DrugpaKagyuImg14, enlarge: EnlargeDrukpaImg14 },
    { thumb: DrugpaKagyuImg15, enlarge: EnlargeDrukpaImg15 },
    { thumb: DrugpaKagyuImg16, enlarge: EnlargeDrukpaImg16 },
    { thumb: DrugpaKagyuImg17, enlarge: EnlargeDrukpaImg17 },
    { thumb: DrugpaKagyuImg18, enlarge: EnlargeDrukpaImg18 },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Move to the clicked image
    }
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
          <motion.div
            key={index}
            className={styles[`DrugpaKagyuImg${index + 1}`]}
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Final opacity
            transition={{ duration: 1.5, delay: 2 }} // Delay for staggered effect
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            <img
              src={image.thumb}
              alt=""
              onClick={() => handleImageClick(index)}
              className={styles.thumbnail}
            />
          </motion.div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Final opacity
          transition={{ duration: 0.5 }} // Delay for staggered effect
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          <div className={styles.DrugpaTemplesEnlargeImg}>
            <Swiper
              initialSlide={selectedImageIndex}
              spaceBetween={10}
              navigation
              onSlideChange={handleSlideChange} // Attach the slide change handler
              className={styles.swiperContainer}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.DrugpaTemplesEnlargeImgs}>
                    <img
                      src={image.enlarge}
                      alt=""
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
                    height: selectedImageIndex === index ? "12px" : "8px",
                    width: selectedImageIndex === index ? "12px" : "8px",
                    backgroundColor:
                      selectedImageIndex === index ? "black" : "gray",
                  }}
                  onClick={() => handleImageClick(index)} // Set the current image on click
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DrukpaKagyuImgs;
