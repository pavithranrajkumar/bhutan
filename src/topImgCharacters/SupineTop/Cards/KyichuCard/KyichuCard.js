import React from "react";

import styles from "./KyichuCard.module.css";
import kyichuImg from "../../../../assests/Supine/JambayCard/KyichuCard.png";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const KyichuCard = ({ showIntro, language, onKyichuCardImageClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "6.8px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            height="335px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #555835"
            backgroundColor="#CECE9B"
            color="#555835"
            title={SUPINE_INFORMATION[language].kyichu.title}
            content={SUPINE_INFORMATION[language].kyichu.content}
            language={language}
            showIntro={showIntro}
          />
            <div
            className={styles.KyichuCardImg}
            onClick={onKyichuCardImageClick}
          >
            <motion.img
              src={kyichuImg}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 3, delay: 3 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
        
        </>
      )}
    </div>
  );
};

export default KyichuCard;
