import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./KurjeLhakhangImgs.module.css";
import { motion } from "framer-motion";

import KurjeImg1 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg1.png";
import KurjeImg2 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg2.png";
import KurjeImg3 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg3.png";
import KurjeImg4 from "../../../../../../assests/Guru/Historic/KurjeImgs/KurjImg4.png";
import KurjeEnlargeImg1 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg1.png";
import KurjeEnlargeImg3 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm2.png";
import KurjeEnlargeImg4 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm3.png";
import KurjeEnlargeImg2 from "../../../../../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg4.png";

const KurjeLhakhangImgs = ({ language, handleOpenPeleingCard }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const swiperRef = useRef(null); // Reference for Swiper

  const images = [
    { thumb: KurjeImg1, enlarge: KurjeEnlargeImg1 },
    { thumb: KurjeImg2, enlarge: KurjeEnlargeImg3 },
    { thumb: KurjeImg3, enlarge: KurjeEnlargeImg4 },
    { thumb: KurjeImg4, enlarge: KurjeEnlargeImg2 },
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
            className={styles[`KurjeLhakhangTemplesImg${index + 1}`]}
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

export default KurjeLhakhangImgs;
