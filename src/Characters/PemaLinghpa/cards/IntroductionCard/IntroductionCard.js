import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";

const IntroductionCard = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="520px"
            titleFontSize="30px"
            contentFontSize="13px"
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
