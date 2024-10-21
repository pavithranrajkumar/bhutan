import React from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import { BHUTAN } from "../../../../constants/languages/Language";

const Introduction = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="370px"
            height="275px"
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
