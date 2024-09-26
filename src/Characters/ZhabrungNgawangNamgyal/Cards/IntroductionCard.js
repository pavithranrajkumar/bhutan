import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import { ZHABRUNG_INFORMATION } from "../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../components/BigCard/BigCard";

const IntroductionCard = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <BigCard
          width="400px"
          //   height="320px"
          titleFontSize="20px"
          cardFontSize="11.3px"
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
