import React, { useState } from "react";
import styles from "./KurjeLhakhang.module.css";
import temple from "../../../../../../assests/Guru/Historic/Kurjetemple.png";
import Card from "../../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";
import { BHUTAN } from "../../../../../../constants/languages/Language";

const KurjeLhakhang = ({ showIntro, onKurjeTempleClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "8.2px" : "11.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
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

          <div
            className={`${styles.KurjeTempleImg} ${styles.zoomIn}`}
            onClick={onKurjeTempleClick}
          >
            <img src={temple} alt="temple" />
          </div>
        </>
      )}
    </div>
  );
};

export default KurjeLhakhang;
