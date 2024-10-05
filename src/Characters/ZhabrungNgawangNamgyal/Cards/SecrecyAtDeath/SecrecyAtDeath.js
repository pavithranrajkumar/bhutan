import React, { useState } from "react";
import { ZHABRUNG_INFORMATION } from "../../../../constants/Characters/ZhabrungNgawangNamgyal";
import BigCard from "../../../../components/BigCard/BigCard";
import { BHUTAN } from "../../../../constants/languages/Language";

const SecrecyAtDeath = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "23px";
  const fonstSize = language === BHUTAN ? "7px" : "11.4px";
  return (
    <div>
      {showIntro && (
        <>
          <BigCard
            width="320px"
            titleFontSize={titleFontSize}
            cardFontSize={fonstSize}
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
