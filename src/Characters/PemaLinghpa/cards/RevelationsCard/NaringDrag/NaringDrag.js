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
            height="328px"
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
            className={styles.burningLakeBookImg}
            onClick={onNaringDragBookImgClick}
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 3 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            <div className={styles.shimmerWrapper}>
              <img src={NaringDragImg} alt="" className={styles.bookImage} />
              <div className={styles.shimmer}></div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NaringDrag;
