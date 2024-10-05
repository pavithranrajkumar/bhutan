import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../components/BigCard/BigCard";
import { BHUTAN } from "../../../constants/languages/Language";

const IntroductionCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8px" : "11.3px";
  return (
    <div>
      {showIntro && (
        <BigCard
          width="400px"
          //   height="320px"
          titleFontSize={titleFontSize}
          cardFontSize={fonstSize}
          borderBottom="1px solid white"
          title={ZHABRUNG_INFORMATION[language].introduction.title}
          content={ZHABRUNG_INFORMATION[language].introduction.content}
          subContent={ZHABRUNG_INFORMATION[language].introduction.subContent}
          language={language}
          showIntro={showIntro}
        />
      )}
    </div>
  );
};

export default IntroductionCard;
