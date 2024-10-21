import React, { useEffect, useState } from "react";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import Card from "../../../../components/Card/Card";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion, AnimatePresence } from "framer-motion";

const HistoricCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "10px" : "13.2px";
  const [isVisible, setIsVisible] = useState(showIntro);

  useEffect(() => {
    if (showIntro) {
      setIsVisible(true);
    } else {
      // Start fade-out animation
      const timer = setTimeout(() => setIsVisible(false), 500); // Match the duration with CSS transition
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showIntro]);
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="300px"
            height="280px"
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
