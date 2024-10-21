import React, { useState, useEffect } from "react";
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
import { motion } from "framer-motion";

const ManifestationWithImg = ({ onLakeBornClick, language }) => {
  const [selectedManifestation, setSelectedManifestation] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const headerFontSize = language === BHUTAN ? "1rem" : "8.8px";
  const paraFontSize = language === BHUTAN ? "0.6rem" : "6.8px";
  const contentLineHeight = language === BHUTAN ? "1" : "";

  const manifestationsData = [
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.first.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.first.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.first.para,
      img: Dorje,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.second.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.second.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.second.para,
      img: Sakya,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.third.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.third.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.third.para,
      img: Nima,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.fourth.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.fourth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fourth.para,
      img: Jungney,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.fivth.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.fivth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.fivth.para,
      img: Tshokey,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.sixth.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.sixth.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.sixth.para,
      img: Gyalpo,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.seventh.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.seventh.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.seventh.para,
      img: Singye,
    },
    {
      FrstHeader: GURU_INFORMATION[language].eightManifestations.eight.frstHeader,
      ScndHeader: GURU_INFORMATION[language].eightManifestations.eight.scndHeader,
      para: GURU_INFORMATION[language].eightManifestations.eight.para,
      img: Loden,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    const nextIndex = selectedManifestation
      ? (activeIndex + 1) % manifestationsData.length
      : 0; // Start from first if no manifestation selected

    setFadeOut(true);
    setTimeout(() => {
      setSelectedManifestation(manifestationsData[nextIndex]);
      setActiveIndex(nextIndex);
      setFadeOut(false);
    }, 250);
  };

  const handleCardClick = (index) => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedManifestation(manifestationsData[index]);
      setActiveIndex(index);
      setFadeOut(false);
    }, 250);
  };

  return (
    <div className={styles.manifestationGroupContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
      >
        <div
          className={styles.manifestationGroupContainerImg}
          onClick={handleImageClick}
        >
          {showImage && (
            <motion.img
              src={
                selectedManifestation
                  ? selectedManifestation.img
                  : manifestationImg
              }
              className={styles.manifestationImg}
              alt="monastriesAndTemplesImg"
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeOut ? 0 : 1 }}
              transition={{ duration: 2, delay: 2 }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            />
          )}
        </div>
      </motion.div>
      <div className={styles.manifestationFrstGroup}>
        {manifestationsData.slice(0, 4).map((manifestation, index) => (
          <WideCard
            language={language}
            key={index}
            FrstHeader={manifestation.FrstHeader}
            ScndHeader={manifestation.ScndHeader}
            para={manifestation.para}
            width="170px"
            height="50px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
            isActive={activeIndex === index}
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
            width="170px"
            height="50px"
            headerFontSize={headerFontSize}
            paraFontSize={paraFontSize}
            isActive={activeIndex === index + 4}
            onClick={() => handleCardClick(index + 4)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManifestationWithImg;
