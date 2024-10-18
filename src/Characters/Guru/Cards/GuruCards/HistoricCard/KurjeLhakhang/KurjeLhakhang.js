import React, { useState } from "react";
import styles from "./KurjeLhakhang.module.css";
import temple from "../../../../../../assests/Guru/Historic/Kurjetemple.png";
import Card from "../../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";
import { BHUTAN } from "../../../../../../constants/languages/Language";
import { motion } from "framer-motion";

const KurjeLhakhang = ({ showIntro, onKurjeTempleClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "8.2px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            height="320px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #2B455D"
            color="#2B455D"
            backgroundColor="#C9D7EE"
            title={GURU_INFORMATION[language].kurjeLhakhang.title}
            content={GURU_INFORMATION[language].kurjeLhakhang.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.KurjeTempleImg} onClick={onKurjeTempleClick}>
            <motion.img
              src={temple}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 1.5, delay: 4.2 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default KurjeLhakhang;
