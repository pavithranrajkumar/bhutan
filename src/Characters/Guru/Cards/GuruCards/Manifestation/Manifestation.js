import React, { useState } from "react";
import styles from "./Manifestation.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import ManifestationImg from "../../../../../assests/Guru/Manifestation/Manifestation.png";
import WideCard from "../../../../../components/WideCard/WideCard";
import { BHUTAN } from "../../../../../constants/languages/Language";
import { motion } from "framer-motion"; // Import motion

const Manifestation = ({ showIntro, onManifestationsCardClick, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "25px";
  const fonstSize = language === BHUTAN ? "7px" : "11.5px";

  const headerFontSize = language === BHUTAN ? "1.2rem" : "14px";
  const paraFontSize = language === BHUTAN ? "3.5px" : "6.5px";

  const manifestationsData = [
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.first.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.first.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.first.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.second.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.second.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.second.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.third.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.third.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.third.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fourth.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.fourth.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.fourth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fivth.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.fivth.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.fivth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.sixth.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.sixth.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.sixth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.seventh.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.seventh.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.seventh.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.eight.frstHeader,
      // ScndHeader:
      //   GURU_INFORMATION[language].eightManifestations.eight.scndHeader,
      // para: GURU_INFORMATION[language].eightManifestations.eight.para,
    },
  ];

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="260px"
            height="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #A06611"
            color="#A06611"
            backgroundColor="#FADFB6"
            title={GURU_INFORMATION[language].manifestations.title}
            content={GURU_INFORMATION[language].manifestations.content}
            language={language}
            showIntro={showIntro}
          />
           <div
            className={styles.ManifestationCardImg}
            onClick={onManifestationsCardClick}
          >
            <motion.img
              src={ManifestationImg}
              alt=""
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ duration: 1.5, delay: 3.5 }}
              exit={{ opacity: 0, transition: { duration: 2 } }}
            />
          </div>
          <div className={styles.WideCards}>
            {manifestationsData.map((item, index) => (
              <div>
              <WideCard
                width="200px"
                height="30px"
                key={index}
                FrstHeader={item.FrstHeader}
                ScndHeader={item.ScndHeader}
                para={item.para}
                headerFontSize={headerFontSize}
                paraFontSize={paraFontSize}
              />
              <div className={styles.shimmerEffect}/>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Manifestation;
