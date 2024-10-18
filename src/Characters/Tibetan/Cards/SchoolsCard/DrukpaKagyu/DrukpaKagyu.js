import React, { useEffect, useState } from "react";
import Card from "../../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../../constants/Characters/Tibetan";
import DrukpaImg from "../../../../../assests/Tibetan/Drukpakagyu/DrukpaKagyu.png";
import styles from "./DrukpaKagyu.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion";

const DrukpaKagyu = ({ showIntro, language, onDrugpaKagyuImgClick }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (showIntro) {
      setAnimate(true);
    }
  }, [showIntro]);
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            height="290px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="1px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={TIBETAN_INFORMATION[language].drukpaKagyu.title}
            content={TIBETAN_INFORMATION[language].drukpaKagyu.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.DrukpaKagyuImgCard}
            onClick={onDrugpaKagyuImgClick}
          >
            <motion.img
              src={DrukpaImg}
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

export default DrukpaKagyu;
