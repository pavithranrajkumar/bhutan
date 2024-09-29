import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../../components/BigCard/BigCard";

const SecrecyAtDeath = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="320px"
            titleFontSize="23px"
            cardFontSize="11.4px"
            borderBottom="1px solid #FCD7C2"
            backgroundColor="#AA5018"
            color="#FCD7C2"
            title={ZHABRUNG_INFORMATION[language].secrecyAtDeath.title}
            content={ZHABRUNG_INFORMATION[language].secrecyAtDeath.content}
            subContent={
              ZHABRUNG_INFORMATION[language].secrecyAtDeath.subContent
            }
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default SecrecyAtDeath;
