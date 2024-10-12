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
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import LakeBornWideCard from "./Cards/GuruCards/Manifestation/LakeBornWideCard/LakeBornWideCard";
import LionOfShakyas from "./Cards/GuruCards/Manifestation/LionOfShakyas/LionOfShakyas";

const Guru2 = () => {
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
  const [showLakeBornWideCards, setShowLakeBornWideCards] = useState(false);
  const [showLionOfShakyas, setShowLionOfShakyas] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
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
        ? "17px"
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
    setShowLakeBornWideCards(false);
    setShowLionOfShakyas(false);
    setShowPalaceImg(false);
    setShowYearText(true);
  };

  const handleHomeClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
    setShowManifestationCardWithImg(false);
    setShowLakeBornWideCards(false);
    setShowLionOfShakyas(false);
    setShowPalaceImg(false);
  };

  const handleCardOrImageClick = () => {
    if (
      showCards ||
      selectedCard ||
      showLakeBornWideCards ||
      showLionOfShakyas
    ) {
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
    } else if (showLakeBornWideCards) {
      setShowLakeBornWideCards(false);
      setShowManifestationCardWithImg(true);
    } else if (showLionOfShakyas) {
      setShowLionOfShakyas(false);
      setShowLakeBornWideCards(true);
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

  const handleOpenLakeBorn = () => {
    setShowManifestationCardWithImg(false);
    setSelectedCard(null);
    setShowLakeBornWideCards(true);
  };

  const handleOpenLionOfShakyas = () => {
    setShowLakeBornWideCards(false);
    setSelectedCard(null);
    setShowLionOfShakyas(true);
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
            subCardnameFontSize={language === BHUTAN ? "10px" : "12px"}
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
            left="37%"
            top="41%"
            onClick={showGuruCards}
            background="#2B455D"
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="27.4%"
            top="83%"
            height="65px"
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
            left="28.5%"
            top="54%"
            iconWidth="25px"
            IconHeight="25px"
            height="48px"
            width="50px"
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
            left="22.1%"
            top="76%"
            height="55px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="65%"
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
            left="20.8%"
            top="86%"
            height="55px"
            background="#193145"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            background="#2B455D"
            left="20.7%"
            top="75%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showKurjeLhakhangImgs && (
        <>
          <div className={styles.KurjeLhakhangTemplesImgContainer}>
            {enlargedImage ? (
              <div
                className={styles.KurjeLhakhangTemplesImg1}
                onClick={() => setEnlargedImage(null)}
              >
                <img
                  src={enlargedImage}
                  alt="Enlarged"
                  className={styles.enlargedImage}
                  onClick={() => handleImageClick(enlargedImage)}
                  style={{ cursor: "pointer" }} // Optional: change cursor to pointer
                />
              </div>
            ) : (
              <>
                <div className={styles.KurjeLhakhangTemplesImg1}>
                  <img
                    src={palaceImg1}
                    alt="palaceImg1"
                    onClick={() => handleImageClick(palaceImg1)}
                  />
                </div>
              </>
            )}

            <div className={styles.KurjeLhakhangTemplesImg2}>
              <img
                src={palaceImg2}
                alt="palaceImg2"
                onClick={() => handleImageClick(palaceImg2)}
              />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg3}>
              <img
                src={palaceImg3}
                alt="palaceImg3"
                onClick={() => handleImageClick(palaceImg3)}
              />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg4}>
              <img
                src={palaceImg4}
                alt="palaceImg3"
                onClick={() => handleImageClick(palaceImg4)}
              />
            </div>
          </div>
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            iconWidth="25px"
            IconHeight="25px"
            left="24.2%"
            top="85%"
            height="55px"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.2%"
            top="75%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="24.2%"
            top="63.5%"
            height="80px"
            marginTop="28px"
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
            left="22.1%"
            top="79%"
            height="55px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            background="#C87E12"
            left="21.8%"
            top="69%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showManifestationCardWithImg && (
        <div className={styles.ManifestationOverlay}>
          <ManifestationWithImg
            language={language}
            onLakeBornClick={handleOpenLakeBorn}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            left="25.5%"
            top="55%"
            height="50px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.9%"
            top="45%"
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
            top="33%"
            height="80px"
            marginTop="28px"
            background="#A06611"
          />
        </div>
      )}

      {showLakeBornWideCards && (
        <>
          <LakeBornWideCard
            language={language}
            onLakeBornCardClick={handleOpenLionOfShakyas}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            left="25.5%"
            top="61%"
            height="50px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.9%"
            top="50%"
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
            top="38%"
            height="80px"
            marginTop="35px"
            background="#A06611"
          />
        </>
      )}

      {showLionOfShakyas && (
        <>
          <LionOfShakyas language={language} />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="25.5%"
            top="61%"
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            background="#613900"
          />
          <HomeIcon
            showIcons={showIcons}
            left="24.9%"
            top="50%"
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
            top="38%"
            height="80px"
            marginTop="35px"
            background="#A06611"
          />
        </>
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
            left="21.4%"
            top="75%"
            height="55px"
          />
          <HomeIcon
            showIcons={showIcons}
            whiteImage={true}
            left="21.3%"
            top="65%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </div>
      )}

      {showPalaceImg && (
        <>
          <div className={styles.PalaceImgContainer}>
            {enlargedImage ? (
              <div
                className={styles.palaceImg1}
                onClick={() => setEnlargedImage(null)}
              >
                <img
                  src={enlargedImage}
                  alt="Enlarged"
                  className={styles.enlargedImage}
                  onClick={() => handleImageClick(enlargedImage)}
                  style={{ cursor: "pointer" }} // Optional: change cursor to pointer
                />
              </div>
            ) : (
              <>
                <div className={styles.palaceImg1}>
                  <img
                    src={palaceImg1}
                    alt="palaceImg1"
                    onClick={() => handleImageClick(palaceImg1)}
                  />
                </div>
              </>
            )}

            <div className={styles.palaceImg2}>
              <img
                src={palaceImg3}
                alt="palaceImg2"
                onClick={() => handleImageClick(palaceImg3)}
              />
            </div>
            <div className={styles.palaceImg3}>
              <img
                src={palaceImg2}
                alt="palaceImg3"
                onClick={() => handleImageClick(palaceImg2)}
              />
            </div>
            <div className={styles.palaceImg4}>
              <img
                src={palaceImg4}
                alt="palaceImg4"
                onClick={() => handleImageClick(palaceImg4)}
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
            left="22.3%"
            top="67%"
            height="50px"
          />
          <HomeIcon
            showIcons={showIcons}
            left="22.2%"
            top="57%"
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
            top="45%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}
    </motion.div>
  );
};

export default Guru2;
