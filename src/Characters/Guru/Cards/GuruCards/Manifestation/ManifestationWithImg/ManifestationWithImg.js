import React, { useState } from "react";
import styles from "./ManifestationWithImg.module.css";
import manifestationImg from "../../../../../../assests/Guru/Manifestation/ManifestationBigImg.png";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";
import WideCard from "../../../../../../components/WideCard/WideCard";
import { BHUTAN } from "../../../../../../constants/languages/Language";
import Dorje from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Dorje.png";
import Sakya from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Sakya.png";
import Nima from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Nima.png";
import Jungney from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Jungney.png";
import Tshokey from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Tshokey.png";
import Gyalpo from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Gyalpo.png";
import Singye from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Singye.png";
import Loden from "../../../../../../assests/Guru/Manifestation/EightManifestations/Manifestation=8M - Loden.png";
import { motion } from "framer-motion"; // Import motion

const ManifestationWithImg = ({ onLakeBornClick, language }) => {
  const [selectedManifestation, setSelectedManifestation] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const headerFontSize = language === BHUTAN ? "1rem" : "8.8px";
  const paraFontSize = language === BHUTAN ? "0.6rem" : "6.8px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  const manifestationsData = [
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.first.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.first.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.first.para,
      img: Dorje,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.second.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.second.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.second.para,
      img: Sakya,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.third.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.third.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.third.para,
      img: Nima,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fourth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.fourth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fourth.para,
      img: Jungney,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.fivth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.fivth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fivth.para,
      img: Tshokey,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.sixth.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.sixth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.sixth.para,
      img: Gyalpo,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.seventh.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.seventh.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.seventh.para,
      img: Singye,
    },
    {
      FrstHeader:
        GURU_INFORMATION[language].eightManifestations.eight.frstHeader,
      ScndHeader:
        GURU_INFORMATION[language].eightManifestations.eight.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.eight.para,
      img: Loden,
    },
  ];

  const handleImageClick = () => {
    const nextIndex = (activeIndex + 1) % manifestationsData.length; // Cycle to the next index
    setSelectedManifestation(manifestationsData[nextIndex]);
    setActiveIndex(nextIndex);
  };

  // Function to handle card click
  const handleCardClick = (index) => {
    setSelectedManifestation(manifestationsData[index]);
    setActiveIndex(index);
  };

  return (
    <div className={styles.manifestationGroupContainer}>
      <div
        className={styles.manifestationGroupContainerImg}
        onClick={handleImageClick}
      >
        <motion.img
          src={
            selectedManifestation ? selectedManifestation.img : manifestationImg
          }
          className={styles.manifestationImg}
          alt="monastriesAndTemplesImg"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animation state
          transition={{ duration: 5.5, delay: 1 }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
        />
      </div>

      <div className={styles.manifestationFrstGroup}>
        {manifestationsData.slice(0, 4).map((manifestation, index) => (
          <WideCard
            language={language}
            key={index}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            width="200px"
            height="50px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
            isActive={activeIndex === index} // Pass isActive prop
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      <div className={styles.manifestationScndGroup}>
        {manifestationsData.slice(4).map((manifestation, index) => (
          <WideCard
            language={language}
            key={index + 4}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            width="190px"
            height="50px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
            isActive={activeIndex === index + 4} // Pass isActive prop
            onClick={() => handleCardClick(index + 4)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManifestationWithImg;
