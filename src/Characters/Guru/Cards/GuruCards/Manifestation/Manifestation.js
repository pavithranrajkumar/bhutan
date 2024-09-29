import React, { useState } from "react";
import styles from "./Manifestation.module.css";
import Card from "../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../constants/Characters/Guru";
import ManifestationImg from "../../../../../assests/Guru/Manifestation/Manifestation.png";
import WideCard from "../../../../../components/WideCard/WideCard";
import { label } from "framer-motion/client";

const Manifestation = ({ showIntro, onManifestationsCardClick }) => {
  const [language, setLanguage] = useState("english");

  const manifestationsData = [
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.first.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.first.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.first.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.second.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.second.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.second.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.third.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.third.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.third.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fourth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.fourth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fourth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fivth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.fivth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fivth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.sixth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.sixth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.sixth.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.seventh.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.seventh.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.seventh.para,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.eight.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.eight.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.eight.para,
    },
  ];

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="260px"
            height="300px"
            titleFontSize="25px"
            contentFontSize="11.5px"
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
            <img src={ManifestationImg} alt="temple" />
          </div>
          <div className={styles.WideCards}>
            {manifestationsData.map((item, index) => (
              <WideCard
                width="260px"
                height="30px"
                key={index}
                FrstHeader={item.FrstHeader}
                ScndHeader={item.ScndHeader}
                para={item.para}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Manifestation;
