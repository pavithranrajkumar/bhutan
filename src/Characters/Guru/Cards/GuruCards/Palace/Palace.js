import React, { useState } from "react";
import styles from "./Palace.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import PalaceImg from "../../../../../assests/Guru/Palace/PalaceImg.png";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion"; // Import motion

const Palace = ({ showIntro, onPalaceImgClick, language }) => {

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            height="220px"
            borderBottom="0.5px solid #2B455D"
            color="#2B455D"
            backgroundColor="#C9D7EE"
            title={GURU_INFORMATION[language].palace.title}
            content={GURU_INFORMATION[language].palace.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.PalaceImg} onClick={onPalaceImgClick}>
            <motion.img
              src={PalaceImg}
              alt="monastriesAndTemplesImg"
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 5.5, delay: 1 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Palace;
