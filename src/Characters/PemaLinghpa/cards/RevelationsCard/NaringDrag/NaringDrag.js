import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import NaringDragImg from "../../../../../assests/PemaLingpa/Revelations/NaringDrag.png";
import styles from "./NaringDrag.module.css";

const NaringDrag = ({ showIntro, language, onNaringDragBookImgClick }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="330px"
            titleFontSize="20px"
            contentFontSize="11.3px"
            borderBottom="0.5px solid white"
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
