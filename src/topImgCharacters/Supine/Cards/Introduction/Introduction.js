import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";

const Introduction = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="370px"
            titleFontSize="20px"
            contentFontSize="11.1px"
            borderBottom="0.5px solid white"
            title={SUPINE_INFORMATION[language].introduction.title}
            content={SUPINE_INFORMATION[language].introduction.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default Introduction;
