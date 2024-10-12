import React from "react";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";
import WideCard from "../../../../../../components/WideCard/WideCard";
import styles from "./LakeBornWideCard.module.css";
import LakeImg from "../../../../../../assests/Guru/Manifestation/lakeBornImg.png";
import { BHUTAN } from "../../../../../../constants/languages/Language";

const LakeBornWideCard = ({ onLakeBornCardClick, language }) => {
  const headerFontSize = language === BHUTAN ? "3px" : "8.5px";
  const paraFontSize = language === BHUTAN ? "3.5px" : "6.5px";

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
    <div className={styles.manifestationGroupContainer}>
      <div className={styles.manifestationGroupContainerImg}>
        <img
          src={LakeImg}
          alt="manifestationImg"
          onClick={onLakeBornCardClick}
        />
      </div>
      <div className={styles.manifestationFrstGroup}>
        {manifestationsData.slice(0, 4).map((manifestation, index) => (
          <WideCard
            key={index}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            className={styles.firstGroupWideCard}
            width="200px"
            height="35px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
          />
        ))}
      </div>

      <div className={styles.manifestationScndGroup}>
        {manifestationsData.slice(4).map((manifestation, index) => (
          <WideCard
            key={index + 4}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            width="190px"
            height="35px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
          />
        ))}
      </div>
    </div>
  );
};

export default LakeBornWideCard;
