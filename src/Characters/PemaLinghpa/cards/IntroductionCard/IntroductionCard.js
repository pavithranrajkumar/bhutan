import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";

const IntroductionCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "8.5px" : "12.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="445px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid white"
            title={PEMA_LINGPA_INFORMATION[language].introduction.title}
            content={PEMA_LINGPA_INFORMATION[language].introduction.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default IntroductionCard;
