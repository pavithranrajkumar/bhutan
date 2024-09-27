import React, { useState } from "react";
import styles from "./ManifestationWithImg.module.css";
import manifestationImg from "../../../../../../assests/Guru/Manifestation/ManifestationBigImg.png";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";
import WideCard from "../../../../../../components/WideCard/WideCard";

const ManifestationWithImg = () => {
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
    <div className={styles.manifestationGroupContainer}>
      <div className={styles.manifestationGroupContainerImg}>
        <img src={manifestationImg} alt="manifestationImg" />
      </div>
      <div className={styles.manifestationFrstGroup}>
        {manifestationsData.slice(0, 4).map((manifestation, index) => (
          <WideCard
            key={index}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            width="200px"
            height="35px"
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
          />
        ))}
      </div>
    </div>
  );
};

export default ManifestationWithImg;
