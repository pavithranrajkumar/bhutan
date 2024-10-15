import React, { useEffect, useState } from "react";
import styles from "./Guru.module.css";
import { motion } from "framer-motion";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";
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

import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import CloseIcon from "../../components/Card/Icons/CloseIcon/CloseIcon";
import KurjeLhakhangImgs from "./Cards/GuruCards/HistoricCard/KurjeLhakhangImgs/KurjeLhakhangImgs";
import PalaceImg from "./Cards/GuruCards/HistoricCard/PalaceImg/PalaceImg";

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
  const [enlargedImage, setEnlargedImage] = useState({
    src: null,
    index: 0,
    isPopular: true,
  });

  const fontSize =
    language === BHUTAN
      ? showCards || selectedCard || showIntroduction
        ? "1.5rem"
        : "19px"
      : showCards || selectedCard || showIntroduction
      ? "19px"
      : "1.25rem";

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
            height="110px"
            subCardname={GURU_INFORMATION[language].subCardName}
            subCardnameFontSize={language === BHUTAN ? "1.5rem" : "12px"}
            subCardnameMarginLeft={language === BHUTAN ? "94px" : "30px"}
            paraSize="15px"
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
            left="37.1%"
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
          />
          <CloseIcon
            showIcons={showIcons}
            left="27.6%"
            top="91.9%"
            onClick={handleCardOrImageClick}
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
            top="88.4%"
          />
          <CloseIcon
            showIcons={showIcons}
            left="28.3%"
            top="84.3%"
            background="#613900"
            onClick={handleCardOrImageClick}
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
            top="91.5%"
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
          <CloseIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="83.5%"
            onClick={handleCardOrImageClick}
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
            left="21.3%"
            top="94.5%"
            background="#193145"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            background="#2B455D"
            left="20.7%"
            top="90.6%"
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="20.7%"
            top="86.6%"
            height="80px"
            marginTop="28px"
          />
          <CloseIcon
            left="20.7%"
            top="82.7%"
            showIcons={showIcons}
            onClick={handleCardOrImageClick}
          />
        </div>
      )}

      {showKurjeLhakhangImgs && (
        <>
        <KurjeLhakhangImgs/>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            language={language}
            iconWidth="30px"
            IconHeight="25px"
            left="25.3%"
            top="95.5%"
            height="55px"
            width="60px"
            margin="15px"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.7%"
            top="91.5%"
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
            top="87.5%"
            height="80px"
            marginTop="28px"
          />
           <CloseIcon
            left="24.7%"
            top="83.6%"
            showIcons={showIcons}
            onClick={handleCardOrImageClick}
          />
        </>
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
          <CloseIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="83.5%"
            onClick={handleCardOrImageClick}
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
            left="25.4%"
            top="85.2%"
            height="50px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.8%"
            top="81.1%"
            height="70px"
            width="80px"
            margin="25px"
            background="#A06611"
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="24.8%"
            top="77%"
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
            top="91.2%"
            height="55px"
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            left="21.3%"
            top="87%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
          <CloseIcon
            showIcons={showIcons}
            left="21.3%"
            top="82.8%"
            onClick={handleCardOrImageClick}
          />
        </div>
      )}

      {showPalaceImg && (
        <>
          <PalaceImg />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="22.9%"
            top="93.5%"
          />
          <HomeIcon
            showIcons={showIcons}
            left="22.2%"
            top="89.5%"
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
            top="85.5%"
            height="80px"
            marginTop="28px"
          />
           <CloseIcon
            left="22.2%"
            top="81.5%"
            showIcons={showIcons}
            onClick={handleCardOrImageClick}
          />
        </>
      )}

    </motion.div>
  );
};

export default Guru;
