import React from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";

const HistoricCard = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="520px"
            titleFontSize="40px"
            contentFontSize="13.2px"
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
