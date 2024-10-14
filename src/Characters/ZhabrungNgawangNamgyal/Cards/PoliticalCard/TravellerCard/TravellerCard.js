import React, { useState } from "react";
import BigCard from "../../../../../components/BigCard/BigCard";
import { ZHABRUNG_INFORMATION } from "../../../../../constants/Characters/ZhabrungNgawangNamgyal";
import { BHUTAN } from "../../../../../constants/languages/Language";

const TravellerCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "10px" : "11.3px";
  return (
    <div>
      {showIntro && (
        <BigCard
          width="270px"
             height="383px"
          titleFontSize={titleFontSize}
          cardFontSize={fonstSize}
          borderBottom="1px solid #193145"
          backgroundColor="#C9D7EE"
          color="#193145"
          title={ZHABRUNG_INFORMATION[language].foreignTravellers.title}
          content={ZHABRUNG_INFORMATION[language].foreignTravellers.content}
          subContent={
            ZHABRUNG_INFORMATION[language].foreignTravellers.subContent
          }
          language={language}
          showIntro={showIntro}
        />
      )}
    </div>
  );
};

export default TravellerCard;
