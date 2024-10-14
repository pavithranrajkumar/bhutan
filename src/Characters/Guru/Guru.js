import React, { useEffect, useState } from "react";
import styles from "./Guru.module.css";
import { motion } from "framer-motion";
import guru from "../../assests/Guru/Guru Rinpoche.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import { GURU_INFORMATION } from "../../constants/Characters/Guru";
import Introduction from "./Cards/Introduction/Introduction";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import GuruCards from "./Cards/GuruCards/GuruCards";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import HistoricCard from "./Cards/GuruCards/HistoricCard/HistoricCard";
import KurjeLhakhang from "./Cards/GuruCards/HistoricCard/KurjeLhakhang/KurjeLhakhang";
import Manifestation from "./Cards/GuruCards/Manifestation/Manifestation";
import ManifestationWithImg from "./Cards/GuruCards/Manifestation/ManifestationWithImg/ManifestationWithImg";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import Palace from "./Cards/GuruCards/Palace/Palace";
import palaceImg1 from "../../assests/Guru/Palace/PalaceImg1.png";
import palaceImg2 from "../../assests/Guru/Palace/PalaceImg2.png";
import palaceImg3 from "../../assests/Guru/Palace/PalaceImg3.png";
import palaceImg4 from "../../assests/Guru/Palace/PalaceImg4.png";
import palaceEnlargeImg1 from "../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg1.png";
import palaceEnlargeImg2 from "../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg3.png";
import palaceEnlargeImg3 from "../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg2.png";
import palaceEnlargeImg4 from "../../assests/Guru/Palace/EnlargeImg/palceEnlargeImg4.png";

import KurjeImg1 from "../../assests/Guru/Historic/KurjeImgs/KurjImg1.png";
import KurjeImg2 from "../../assests/Guru/Historic/KurjeImgs/KurjImg2.png";
import KurjeImg3 from "../../assests/Guru/Historic/KurjeImgs/KurjImg3.png";
import KurjeImg4 from "../../assests/Guru/Historic/KurjeImgs/KurjImg4.png";
import KurjeEnlargeImg1 from "../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg1.png";
import KurjeEnlargeImg3 from "../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm2.png";
import KurjeEnlargeImg4 from "../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesIm3.png";
import KurjeEnlargeImg2 from "../../assests/Guru/Historic/KurjeImgs/EnlargeImgs/KurjeLhakhangTemplesImg4.png";

import { BHUTAN, ENGLISH } from "../../constants/languages/Language";

const Guru = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showKurjeLhakhang, setShowKurjeLhakhang] = useState(false);
  const [showKurjeLhakhangImgs, setShowKurjeLhakhangImgs] = useState(false);
  const [showManifestationCardWithImg, setShowManifestationCardWithImg] =
    useState(false);
  const [showPalaceImg, setShowPalaceImg] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [KurjeEnlargedImage, setKurjeEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleKurjeImageClick = (imageSrc) => {
    setKurjeEnlargedImage(imageSrc);
  };

  const paraSize =
    language === BHUTAN
      ? showCards || selectedCard || showIntroduction
        ? "13px"
        : "18px"
      : showCards || selectedCard || showIntroduction
      ? "15px"
      : "20px";
  const fontSize =
    language === BHUTAN
      ? showCards || selectedCard || showIntroduction
        ? "1.5rem"
        : "19px"
      : showCards || selectedCard || showIntroduction
      ? "19px"
      : "20px";

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === ENGLISH ? BHUTAN : ENGLISH;
      console.log("Language changed to:", newLanguage);
      return newLanguage;
    });
  };

  const resetStates = () => {
    setSelectedCard(null);
    setShowCards(false);
    setShowIntroduction(false);
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
    setShowManifestationCardWithImg(false);
    setShowPalaceImg(false);
    setEnlargedImage(false);
    setKurjeEnlargedImage(false);
    setShowYearText(true);
  };

  const handleHomeClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
    setShowManifestationCardWithImg(false);
    setShowPalaceImg(false);
    setEnlargedImage(false);
    setKurjeEnlargedImage(false);
  };

  const handleCardOrImageClick = () => {
    if (showCards || selectedCard) {
      resetStates();
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
    }
  };

  const showGuruCards = () => {
    setShowCards(true);
    setShowIntroduction(false);
    setSelectedCard(null);
  };

  const handleKurjeClick = () => {
    setShowKurjeLhakhang((prev) => !prev);
    setShowKurjeLhakhangImgs(false);
    setSelectedCard(showKurjeLhakhang ? null : "kurjeLhakhang");
  };

  const handleKurjeTempleClick = () => {
    setShowKurjeLhakhangImgs(true);
    setShowKurjeLhakhang(false);
  };

  const handleCardClick = (cardName) => {
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
    setShowCards(false);
    setSelectedCard(cardName);
    setShowIntroduction(false);
    setShowYearText(false);
  };

  const handleOpenManifestationWithImg = () => {
    setShowManifestationCardWithImg(!showManifestationCardWithImg);
    setSelectedCard(showManifestationCardWithImg ? null : "manifestation");
  };

  const handleOpenPalaceImg = () => {
    setShowPalaceImg(!showPalaceImg);
    setSelectedCard(showPalaceImg ? null : "palace");
  };

  const handlePreviousClick = () => {
    if (showManifestationCardWithImg) {
      setShowManifestationCardWithImg(false);
      setSelectedCard("manifestation");
    } else if (showPalaceImg) {
      setShowPalaceImg(false);
      setSelectedCard("palace");
    } else if (showKurjeLhakhang) {
      setShowKurjeLhakhang(false);
      setSelectedCard("historic");
    } else if (showKurjeLhakhangImgs) {
      setShowKurjeLhakhangImgs(false);
      setShowKurjeLhakhang(true);
    } else if (selectedCard === "historic") {
      setSelectedCard(null);
      setShowCards(true);
    } else if (showCards) {
      setSelectedCard(null);
      setShowIntroduction(false);
      setShowKurjeLhakhang(false);
      setShowKurjeLhakhangImgs(false);
      setShowManifestationCardWithImg(false);
      setShowPalaceImg(false);
    } else {
      setShowIntroduction(false);
      setShowYearText(false);
    }
  };

  useEffect(() => {
    if (selectedCard) {
      setShowIntroduction(false);
    }
  }, [selectedCard]);

  const isBlueCard =
    showIntroduction ||
    showKurjeLhakhang ||
    showKurjeLhakhangImgs ||
    showPalaceImg ||
    selectedCard === "palace";

  const nameCardBackground = showCards
    ? "#FFC571"
    : selectedCard === "historic" || selectedCard === "manifestation"
    ? "#E4931D"
    : isBlueCard
    ? "#C9D7EE"
    : "#384E63";

  const nameCardColor = showCards
    ? "#A06611"
    : selectedCard === "historic" || selectedCard === "manifestation"
    ? "#FADFB6"
    : isBlueCard
    ? "#2B455D"
    : "white";

  return (
    <motion.div
      className={styles.GuruContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {showYearText && (
        <motion.div
          className={styles.GuruText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <YearText
            BornYear="900"
            Endyear="-1000"
            fontSize="115px"
            marginLeft="70px"
          />
        </motion.div>
      )}

      <motion.div
        className={styles.GuruImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        <img src={guru} alt="Pema Lingpa" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={styles.GuruNameCardContainer}
          onClick={handleCardOrImageClick}
        >
          <NameCard
            cardName={GURU_INFORMATION[language].cardName}
            width="200px"
            height="90px"
            subCardname={GURU_INFORMATION[language].subCardName}
            subCardnameFontSize={language === BHUTAN ? "1rem" : "12px"}
            subCardnameMarginLeft={language === BHUTAN ? "90px" : "40px"}
            paraSize={paraSize}
            fontSize={fontSize}
            year={
              showCards || selectedCard || showIntroduction
                ? "900-1000"
                : undefined
            }
            paraColor={nameCardColor}
            background={nameCardBackground}
            color={nameCardColor}
          />
        </div>
      </motion.div>

      {showIntroduction && (
        <>
          <div className={styles.GuruIntroCard}>
            <Introduction language={language} showIntro={showIntroduction} />
          </div>
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="37.8%"
            top="80%"
            onClick={showGuruCards}
            background="#2B455D"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            language={language}
            left="28.2%"
            top="95.8%"
            iconWidth="25px"
            IconHeight="25px"
            height="48px"
            width="50px"
            margin="13px"
          />
        </>
      )}

      {showCards && (
        <div>
          <GuruCards
            isFadingOut={isFadingOut}
            language={language}
            onCardClick={handleCardClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            background="#613900"
            left="28.9%"
            top="84.3%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
        </div>
      )}

      {selectedCard === "historic" && !showKurjeLhakhang && (
        <div className={styles.GuruHistoricCard}>
          <HistoricCard
            className={styles.GuruHistoricCard}
            language={language}
            showIntro={true}
            onKurjeClick={handleKurjeClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="22.4%"
            top="91.4%"
            height="55px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="87.5%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showKurjeLhakhang && (
        <div className={styles.GuruKurjeLhakhangCard}>
          <KurjeLhakhang
            language={language}
            showIntro={true}
            onKurjeTempleClick={handleKurjeTempleClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
            left="21.3%"
            top="95.3%"
            background="#193145"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            background="#2B455D"
            left="20.7%"
            top="91.4%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showKurjeLhakhangImgs && (
        <>
          <div
            className={styles.KurjeLhakhangTemplesImgContainer}
            style={{
              position: "relative",
              transition: "opacity 0.3s ease",
              backgroundColor: KurjeEnlargedImage
                ? "rgba(0, 0, 0, 0.7)" // Add black opacity when enlarged
                : "transparent",
              opacity: KurjeEnlargedImage ? 0.4 : 1, // Adjust opacity effect
            }}
          >
            <div className={styles.KurjeLhakhangTemplesImg1}>
              <img
                src={KurjeImg1}
                alt="palaceImg1"
                onClick={() => handleKurjeImageClick(KurjeEnlargeImg1)}
              />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg2}>
              <img
                src={KurjeImg2}
                alt="palaceImg2"
                onClick={() => handleKurjeImageClick(KurjeEnlargeImg2)}
              />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg3}>
              <img
                src={KurjeImg3}
                alt="palaceImg3"
                onClick={() => handleKurjeImageClick(KurjeEnlargeImg3)}
              />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg4}>
              <img
                src={KurjeImg4}
                alt="palaceImg3"
                onClick={() => handleKurjeImageClick(KurjeEnlargeImg4)}
              />
            </div>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            language={language}
            iconWidth="30px"
            IconHeight="25px"
            left="25.3%"
            top="91.5%"
            height="55px"
            width="60px"
            margin="15px"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.7%"
            top="87.5%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="24.7%"
            top="83.6%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}

      {KurjeEnlargedImage ? (
        <div
          className={`${styles.enlargedKurjeLhakhangImage} ${styles.fadeIn}`}
          onClick={() => setKurjeEnlargedImage(null)}
        >
          <img
            src={KurjeEnlargedImage}
            alt="Enlarged"
            className={styles.enlargedImages}
            onClick={() => handleKurjeImageClick(KurjeEnlargedImage)}
            style={{ cursor: "pointer" }} // Optional: change cursor to pointer
          />
        </div>
      ) : (
        <></>
      )}

      {selectedCard === "manifestation" && !showManifestationCardWithImg && (
        <div className={styles.GuruHistoricCard}>
          <Manifestation
            language={language}
            showIntro={true}
            onManifestationsCardClick={handleOpenManifestationWithImg}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="22.4%"
            top="91.4%"
            height="55px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="87.5%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showManifestationCardWithImg && (
        <div className={styles.ManifestationOverlay}>
          <ManifestationWithImg language={language} />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            left="25.5%"
            top="85.6%"
            height="50px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.9%"
            top="81.7%"
            height="70px"
            width="80px"
            margin="25px"
            background="#A06611"
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="24.9%"
            top="77.5%"
            height="80px"
            marginTop="28px"
            background="#A06611"
          />
        </div>
      )}

      {selectedCard === "palace" && !showPalaceImg && (
        <div className={styles.GuruPalaceCard}>
          <Palace
            language={language}
            showIntro={true}
            onPalaceImgClick={handleOpenPalaceImg}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            iconWidth="25px"
            IconHeight="25px"
            left="21.9%"
            top="91.4%"
            height="55px"
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            left="21.3%"
            top="87.5%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showPalaceImg && (
        <>
          <div
            className={styles.PalaceImgContainer}
            style={{
              position: "relative",
              transition: "opacity 0.3s ease",
              backgroundColor: enlargedImage
                ? "rgba(0, 0, 0, 0.7)" // Add black opacity when enlarged
                : "transparent",
              opacity: enlargedImage ? 0.4 : 1, // Adjust opacity effect
            }}
          >
            <div className={styles.palaceImg1}>
              <img
                src={palaceImg1}
                alt="palaceImg1"
                onClick={() => handleImageClick(palaceEnlargeImg1)}
              />
            </div>
            <div className={styles.palaceImg2}>
              <img
                src={palaceImg3}
                alt="palaceImg2"
                onClick={() => handleImageClick(palaceEnlargeImg2)}
              />
            </div>
            <div className={styles.palaceImg3}>
              <img
                src={palaceImg2}
                alt="palaceImg3"
                onClick={() => handleImageClick(palaceEnlargeImg3)}
              />
            </div>
            <div className={styles.palaceImg4}>
              <img
                src={palaceImg4}
                alt="palaceImg4"
                onClick={() => handleImageClick(palaceEnlargeImg4)}
              />
            </div>
          </div>
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            left="22.9%"
            top="89.5%"
            height="50px"
          />
          <HomeIcon
            showIcons={showIcons}
            left="22.2%"
            top="85.5%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="22.2%"
            top="81.5%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}

      {enlargedImage ? (
        <div
          className={`${styles.palaceenlargedImg1} ${styles.fadeIn}`}
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            className={styles.enlargedImages}
            onClick={() => handleImageClick(palaceEnlargeImg1)}
            style={{ cursor: "pointer" }} // Optional: change cursor to pointer
          />
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default Guru;
