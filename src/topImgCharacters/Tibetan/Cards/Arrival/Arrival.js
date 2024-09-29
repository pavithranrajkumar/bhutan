import React from "react";
import Card from "../../../../components/Card/Card";
import { TIBETAN_INFORMATION } from "../../../../constants/Characters/Tibetan";

const Arrival = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="270px"
            titleFontSize="20px"
            contentFontSize="10.5px"
            borderBottom="0.5px solid #8F4110"
            backgroundColor="#FFDFC3"
            color="#6A1F11"
            title={TIBETAN_INFORMATION[language].arrival.title}
            content={TIBETAN_INFORMATION[language].arrival.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default Arrival;
