import React, { useEffect, useState } from "react";
import styles from "./Guru.module.css";
import { AnimatePresence, motion } from "framer-motion";
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
import CharacterAnimation from "../../CharacterAnimations/AnimationRender";

const GuruTop = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
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
  const [languageChanging, setLanguageChanging] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (languageChanging) {
        setIsVisible(false);

        setTimeout(() => {
          setLanguage((prevLanguage) =>
            prevLanguage === "english" ? "bhutan" : "english"
          );
          setIsVisible(true);
        }, 3000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [languageChanging]);

  const cardNameFontSize = language === BHUTAN ? "1.5rem" : "1.25rem";
  const subCardnameFontSize = language === BHUTAN ? "1.5rem" : "0.8rem";

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
    setLanguageChanging(true);
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
    setLanguageChanging(false);
    setIsVisible(true);
    setLanguage("english");
    if (showCards || selectedCard) {
      resetStates();
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
      setLanguageChanging(true);
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
    <div className={styles.GuruContainer}>
      <AnimatePresence>
        {showYearText && (
          <motion.div
            className={styles.GuruText}
            initial={false} // Prevent initial animation on first mount
            exit={{ opacity: 0, x: 150 }} // Fade out on exit
            transition={{ duration: 3 }}
          >
            <YearText
              BornYear="900"
              Endyear="-1000"
              fontSize="115px"
              marginLeft="70px"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.GuruImage} onClick={handleCardOrImageClick}>
        <div className={styles.GuruImage}>
          <CharacterAnimation characterName="rinpocheTop" />
        </div>
        {/* <img src={guru} alt="Pema Lingpa" /> */}
      </div>
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
            cardName={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 2.5 }}
              >
                {GURU_INFORMATION[language].cardName}
              </motion.div>
            }
            width="200px"
            height="110px"
            subCardname={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 2.5 }}
              >
                {GURU_INFORMATION[language].subCardName}
              </motion.div>
            }
            subCardnameMarginLeft={language === BHUTAN ? "94px" : "25px"}
            paraSize="15px"
            fontSize={cardNameFontSize}
            subCardnameFontSize={subCardnameFontSize}
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

      <AnimatePresence>
        {showIntroduction && (
          <>
            <div className={styles.GuruIntroCard}>
              <Introduction language={language} showIntro={showIntroduction} />
            </div>
            <NextIcon
              showIcons={showIcons}
              whiteImage={true}
              left="37.3%"
              top="57%"
              onClick={showGuruCards}
              background="#2B455D"
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              language={language}
              left="28.2%"
              top="93%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="27.6%"
              top="85%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCards && (
          <div>
            <GuruCards
              showCards={true}
              language={language}
              onCardClick={handleCardClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              background="#613900"
              left="28.9%"
              top="77.5%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="28.3%"
              top="69.5%"
              background="#613900"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              top="79%"
              height="55px"
              background="#613900"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#C87E12"
              left="21.8%"
              top="71%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              background="#C87E12"
              left="21.8%"
              top="62.8%"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              left="21.8%"
              top="81%"
              background="#193145"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              background="#2B455D"
              left="21.2%"
              top="73%"
              onClick={handleHomeClick}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="21.2%"
              top="65%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="21.2%"
              top="57%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showKurjeLhakhangImgs && (
          <>
            <KurjeLhakhangImgs />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              language={language}
              iconWidth="30px"
              IconHeight="25px"
              left="25.3%"
              top="90%"
              height="55px"
              width="60px"
              margin="15px"
            />
            <HomeIcon
              showIcons={showIcons}
              left="24.7%"
              top="82%"
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
              top="73.8%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="24.7%"
              top="66%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              top="79%"
              height="55px"
              background="#613900"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#C87E12"
              left="21.8%"
              top="71%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              background="#C87E12"
              left="21.8%"
              top="63%"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              top="66%"
              height="50px"
              background="#613900"
            />
            <HomeIcon
              showIcons={showIcons}
              left="24.8%"
              top="58%"
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
              top="50%"
              height="80px"
              marginTop="28px"
              background="#A06611"
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              left="21.2%"
              top="79%"
              height="55px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="20.6%"
              top="71%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="20.6%"
              top="63%"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPalaceImg && (
          <>
            <PalaceImg />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="22.9%"
              top="85.5%"
            />
            <HomeIcon
              showIcons={showIcons}
              left="22.2%"
              top="77.2%"
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
              top="69.5%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="22.2%"
              top="61.6%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuruTop;
