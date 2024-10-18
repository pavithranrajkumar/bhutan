import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import styles from "./Administration.module.css";
import Card from "../../../../components/Card/Card";
import BhutanGovLogo from "../../../../assests/Zhabrung/Cards/Historic/BhutanGovtLogo.png";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const Administration = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "7px" : "11px";

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={ZHABRUNG_INFORMATION[language].administration.title}
            content={ZHABRUNG_INFORMATION[language].administration.content}
            language={language}
            showIntro={showIntro}
          />
            <div
            className={styles.BhutanGovLogo}
          >
            <motion.img
              src={BhutanGovLogo}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 3, delay: 3.5 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
         
        </>
      )}
    </div>
  );
};

export default Administration;
