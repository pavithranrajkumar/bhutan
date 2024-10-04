import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import { BHUTAN } from "../../../../constants/languages/Language";

const HimalayanCard = ({ showIntro, language }) => {
  const fonstSize = language === BHUTAN ? "7px" : "13px";
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid white"
            title={SUPINE_INFORMATION[language].himalayan.title}
            content={SUPINE_INFORMATION[language].himalayan.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default HimalayanCard;
