import React, { useEffect, useState } from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import NaringDragImg from "../../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import styles from "./NaringDrag.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion";

const NaringDrag = ({ showIntro, language, onNaringDragBookImgClick }) => {
  const titleFontSize = language === BHUTAN ? "11px" : "20px";
  const fonstSize = language === BHUTAN ? "6.5px" : "11.3px";
  const [isVisible, setIsVisible] = useState(showIntro);

  useEffect(() => {
    if (showIntro) {
      setIsVisible(true);
    } else {
      // Start fade-out animation
      const timer = setTimeout(() => setIsVisible(false), 500); // Match the duration with CSS transition
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showIntro]);


  
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="290px"
            height="335px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            fontWeight="900"
            header={PEMA_LINGPA_INFORMATION[language].naringDrag.title}
            title={PEMA_LINGPA_INFORMATION[language].naringDrag.header}
            content={PEMA_LINGPA_INFORMATION[language].naringDrag.content}
            language={language}
            showIntro={showIntro}
          />
          <motion.div
            className={styles.NaringDragBookImg}
            onClick={onNaringDragBookImgClick}
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            exit={{ opacity: 0 }} // Fade out when removed
            transition={{ duration: 0.5, delay: 3 }} // Duration of fade effect
          >
            <div className={styles.book}>
              <div className={styles.frontCover}>
                <img src={NaringDragImg} alt="Naring Drag Book Cover" />
                <div className={styles.shine} /> {/* Add shine effect here */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NaringDrag;
