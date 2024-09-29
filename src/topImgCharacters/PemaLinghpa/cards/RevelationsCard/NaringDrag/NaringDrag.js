import React from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";

const NaringDrag = ({ showIntro, language }) => {
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
            titleFontSize="20px"
            contentFontSize="11.1px"
            borderBottom="0.5px solid white"
            title={PEMA_LINGPA_INFORMATION[language].naringDrag.title}
            content={PEMA_LINGPA_INFORMATION[language].naringDrag.content}
            language={language}
            showIntro={showIntro}
          />
        </>
      )}
    </div>
  );
};

export default NaringDrag;
