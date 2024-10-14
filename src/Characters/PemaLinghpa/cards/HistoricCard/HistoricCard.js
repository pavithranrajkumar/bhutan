import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";

const HistoricCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "10px" : "13.2px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="400px"
            height="220px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].historicBackground.title}
            content={
              PEMA_LINGPA_INFORMATION[language].historicBackground.content
            }
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default HistoricCard;
