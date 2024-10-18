import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import burningLakeBookImg from "../../../../../assests/PemaLingpa/Revelations/BurningLake.png";
import styles from "./BurningLake.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion";


const BurningLake = ({ showIntro, language, onBurningLakeBookImgClick }) => {
  const titleFontSize = language === BHUTAN ? "11px" : "20px";
  const fonstSize = language === BHUTAN ? "6.5px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            height="320px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            fontWeight="800"
            header={PEMA_LINGPA_INFORMATION[language].burningLake.title}
            title={PEMA_LINGPA_INFORMATION[language].burningLake.header}
            content={PEMA_LINGPA_INFORMATION[language].burningLake.content}
            language={language}
            showIntro={showIntro}
          />
           <motion.div
            className={styles.burningLakeBookImg}
            onClick={onBurningLakeBookImgClick}
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 0.5, delay: 3 }} // Duration of fade effect
          >
            <div className={styles.book}>
              <div className={styles.frontCover}>
                <img src={burningLakeBookImg} alt="Naring Drag Book Cover" />
                <div className={styles.shine} /> {/* Add shine effect here */}
              </div>
            </div>
          </motion.div>
          
        </>
      )}
    </div>
  );
};

export default BurningLake;
