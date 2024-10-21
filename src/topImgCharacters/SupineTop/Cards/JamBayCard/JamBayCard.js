import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import styles from "./JamBayCard.module.css";
import jambayImg from "../../../../assests/Supine/JambayCard/JambayCard.png";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const JamBayCard = ({ showIntro, language, onJamBayCardImageClick }) => {
  const titleFontSize = language === BHUTAN ? "10px" : "20px";
  const fonstSize = language === BHUTAN ? "7.5px" : "11.1px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            height="380px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #555835"
            backgroundColor="#CECE9B"
            color="#555835"
            title={SUPINE_INFORMATION[language].jambay.title}
            content={SUPINE_INFORMATION[language].jambay.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.JamBayCardImg}
            onClick={onJamBayCardImageClick}
          >
            <motion.img
              src={jambayImg}
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

export default JamBayCard;
