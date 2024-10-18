import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import styles from "./PelingDance.module.css";
import video1 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/PelingMaskDance.mp4";
import video2 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/VTS_01_1.mp4";
import video3 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/VTS_01_2.mp4";
import { BHUTAN } from "../../../../../constants/languages/Language";

const PelingDance = ({ showIntro, language, onPelingVideoClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8.5px" : "11.1px";

  const videos = [video1, video2, video3];

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            height="250px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            title={PEMA_LINGPA_INFORMATION[language].pelingdance.header}
            header={PEMA_LINGPA_INFORMATION[language].pelingdance.title}
            content={PEMA_LINGPA_INFORMATION[language].pelingdance.content}
            language={language}
            showIntro={showIntro}
          />

          <div style={{ display: "flex" }}>
            {videos.map((videoSrc, index) => (
              <motion.div
                key={index}
                className={styles[`pelingdanceImg${index + 1}`]}
                onClick={onPelingVideoClick}
                initial={{ opacity: 0 }} // Initial opacity
                animate={{ opacity: 1 }} // Final opacity
                transition={{ duration: 0.5, delay: 3.5 }} // Staggered fade-in effect
                exit={{ opacity: 0, transition: { duration: 2 } }}

              >
                <video className={styles.videoFrame} autoPlay muted loop>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PelingDance;
