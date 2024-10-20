import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./PalaceImg.module.css";
import { motion } from "framer-motion";

import palaceImg1 from "../../../../../../assests/Guru/Palace/PalaceImg1.png";
import palaceImg2 from "../../../../../../assests/Guru/Palace/PalaceImg2.png";
import palaceImg3 from "../../../../../../assests/Guru/Palace/PalaceImg3.png";
import palaceImg4 from "../../../../../../assests/Guru/Palace/PalaceImg4.png";
import palaceEnlargeImg1 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg1.png";
import palaceEnlargeImg2 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg3.png";
import palaceEnlargeImg3 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg2.png";
import palaceEnlargeImg4 from "../../../../../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg4.png";

const PalaceImg = ({ language, handleOpenPeleingCard }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const swiperRef = useRef(null); // Reference for Swiper

  
  const images = [
    { thumb: palaceImg1, enlarge: palaceEnlargeImg1 },
    { thumb: palaceImg2, enlarge: palaceEnlargeImg2 },
    { thumb: palaceImg3, enlarge: palaceEnlargeImg3 },
    { thumb: palaceImg4, enlarge: palaceEnlargeImg4 },
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
          <motion.div
            key={index}
            className={styles[`palaceImg${index + 1}`]}
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Final opacity
            transition={{ duration: 1.5, delay: 2 }} // Delay for staggered effect
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            <img
              src={image.thumb}
              alt=""
              // onClick={() => handleImageClick(index)}
              className={styles.thumbnail}
            />
          </motion.div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Final opacity
          transition={{ duration: 1.5 }} // Delay for staggered effect
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          <div className={styles.palaceenlargedImg1}>
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

export default PalaceImg;
