import React, { useState } from "react";
import BigCard from "../../../../../components/BigCard/BigCard";
import { ZHABRUNG_INFORMATION } from "../../../../../constants/Characters/ZhabrungNgawangNamgyal";

const TravellerCard = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <BigCard
          width="270px"
          //   height="320px"
          titleFontSize="20px"
          cardFontSize="11.3px"
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
