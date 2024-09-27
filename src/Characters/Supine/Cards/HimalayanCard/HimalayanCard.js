import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";

const HimalayanCard = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="220px"
            titleFontSize="20px"
            contentFontSize="12px"
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
