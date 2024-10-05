import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import NaringDragImg from "../../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import styles from "./NaringDrag.module.css";
import { BHUTAN } from "../../../../../constants/languages/Language";

const NaringDrag = ({ showIntro, language, onNaringDragBookImgClick }) => {
  const titleFontSize = language === BHUTAN ? "11px" : "20px";
  const fonstSize = language === BHUTAN ? "6.5px" : "11.3px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #001829"
            backgroundColor="#C9D7EE"
            color="#001829"
            fontWeight="900"
            header={PEMA_LINGPA_INFORMATION[language].naringDrag.header}
            title={PEMA_LINGPA_INFORMATION[language].naringDrag.title}
            content={PEMA_LINGPA_INFORMATION[language].naringDrag.content}
            language={language}
            showIntro={showIntro}
          />
          <div
            className={styles.NaringDragBookImg}
            onClick={onNaringDragBookImgClick}
          >
            <img src={NaringDragImg} alt="NaringDragBookImg" />
          </div>
        </>
      )}
    </div>
  );
};

export default NaringDrag;
