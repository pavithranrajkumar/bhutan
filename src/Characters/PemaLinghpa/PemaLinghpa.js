import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PemaLinghpa.module.css";
import CloseIcon from "../../components/Card/Icons/CloseIcon/CloseIcon";
import NameCard from "../../components/NameCard/NameCard";
import YearText from "../../components/YearText/YearText";
import Pema from "../../assests/PemaLingpa/PemaLingpa.png";
import IntroductionCard from "./cards/IntroductionCard/IntroductionCard";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import PemaCards from "./cards/PemaCards/PemaCards";
import HistoricCard from "./cards/HistoricCard/HistoricCard";
import LineageCard from "./cards/LineageCard/LineageCard";
import RevelationsCard from "./cards/RevelationsCard/RevelationsCard";
import LegacyCards from "./cards/LegacyCards/LegacyCards";
import NaringDrag from "./cards/RevelationsCard/NaringDrag/NaringDrag";
import BurningLake from "./cards/RevelationsCard/BurningLake/BurningLake";
import NaringDragBook from "./BookAnimation/NaringDragBook/NaringDragBook";
import BurningLakeBook from "./BookAnimation/BurningLake";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import Monastries from "./cards/LegacyCards/Monastries/Monastries";
import PelingDance from "./cards/LegacyCards/PelingDance/PelingDance";
import video1 from "../../assests/PemaLingpa/Legacy/PelingVideos/PelingMaskDance.mp4";

import { PEMA_LINGPA_INFORMATION } from "../../constants/Characters/PremaLingpa";
import PelingDanceVideo from "../../assests/PemaLingpa/Legacy/PelingDanceCard.png";
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import MonasteriesImg from "./cards/LegacyCards/Monastries/MonasteriesImg/MonasteriesImg";

const PemaLinghpa = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showNaringDragCard, setShowNaringDragCard] = useState(false);
  const [showBurningLakeCard, setShowBurningLakeCard] = useState(false);
  const [showNaringDragBookImg, setShowNaringDragBookImg] = useState(false);
  const [showBurningLakeBookImg, setShowBurningLakeBookImg] = useState(false);
  const [showMonasteriesCard, setShowMonasteriesCard] = useState(false);
  const [showPelingDanceCard, setShowPelingDanceCard] = useState(false);
  const [showMonasteriesImgCard, setShowMonasteriesImgCard] = useState(false);
  const [showPelingdanceImgs, setShowPelingdanceImgs] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === ENGLISH ? BHUTAN : ENGLISH;
      console.log("Language changed to:", newLanguage);
      return newLanguage;
    });
  };

  const handleCardOrImageClick = () => {
    console.log("Card or Image Clicked");
    if (
      showCards ||
      selectedCard ||
      showBurningLakeCard ||
      showNaringDragCard ||
      showNaringDragBookImg ||
      showBurningLakeBookImg ||
      showMonasteriesCard ||
      showPelingDanceCard ||
      showMonasteriesImgCard ||
      showPelingdanceImgs ||
      enlargedImage
    ) {
      resetView();
      setShowYearText(true);
      setIsActive(false);
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
      setIsActive(false);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
      setIsActive(true);
    }
  };

  const resetView = () => {
    console.log("Resetting View");

    setShowCards(false);
    setSelectedCard(null);
    setShowNaringDragCard(false);
    setShowBurningLakeCard(false);
    setShowBurningLakeBookImg(false);
    setShowNaringDragBookImg(false);
    setShowMonasteriesCard(false);
    setShowPelingDanceCard(false);
    setShowMonasteriesImgCard(false);
    setShowPelingdanceImgs(false);
    setEnlargedImage(false);
    setShowYearText(true);
  };

  const handleShowCards = () => {
    setShowIntroduction(false);
    setShowCards(true);
  };

  const handleCardClick = (cardName) => {
    setShowCards(false);
    setShowIntroduction(false);
    setSelectedCard(cardName);
  };

  const handleNaringDragClick = () => {
    setSelectedCard(null);
    setShowNaringDragCard(true);
  };

  const handleBurningLakeClick = () => {
    setSelectedCard(null);
    setShowBurningLakeCard(true);
  };

  const handleNaringDragBookImgClick = () => {
    setShowNaringDragCard(false);
    setShowNaringDragBookImg(true);
  };

  const handleBurningLakeBookImgClick = () => {
    setShowBurningLakeCard(false);
    setShowBurningLakeBookImg(true);
  };

  const handleBurningLakeAnimationCardClick = () => {
    setShowNaringDragBookImg(false);
    setShowNaringDragCard(true);
  };

  const handleNaringDragAnimationCardClick = () => {
    setShowBurningLakeBookImg(false);
    setShowBurningLakeCard(true);
  };

  const handleOpenMonasteriesCard = () => {
    setSelectedCard(null);
    setShowMonasteriesCard(true);
  };

  const handleOpenPelingDanceCard = () => {
    setSelectedCard(null);
    setShowPelingDanceCard(true);
  };

  const handleShowMonasteriesImgCard = () => {
    setShowMonasteriesCard(false);
    setShowMonasteriesImgCard(true);
  };

  const handleOpenPeleingCard = () => {
    setShowMonasteriesImgCard(false);
    setShowPelingdanceImgs(false);
    setShowPelingDanceCard(true);
  };

  const handleOpenPelingdanceImgs = () => {
    setShowPelingDanceCard(false);
    setShowPelingdanceImgs(true);
  };

  const handlePreviousClick = () => {
    if (showBurningLakeBookImg) {
      setShowBurningLakeBookImg(false);
      setShowBurningLakeCard(true);
    } else if (showNaringDragBookImg) {
      setShowNaringDragBookImg(false);
      setShowNaringDragCard(true);
    } else if (showNaringDragCard || showBurningLakeCard) {
      setShowNaringDragCard(false);
      setShowBurningLakeCard(false);
      setSelectedCard("revelations");
    } else if (showMonasteriesCard || showPelingDanceCard) {
      setShowMonasteriesCard(false);
      setShowPelingDanceCard(false);
      setSelectedCard("legacy");
    } else if (showPelingdanceImgs) {
      setShowPelingdanceImgs(false);
      setShowPelingDanceCard(true);
    } else if (showMonasteriesImgCard) {
      setShowMonasteriesImgCard(false);
      setShowMonasteriesCard(true);
    }
  };

  const handleHomeClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowNaringDragCard(false);
    setShowBurningLakeCard(false);
    setShowBurningLakeBookImg(false);
    setShowNaringDragBookImg(false);
    setShowMonasteriesCard(false);
    setShowPelingDanceCard(false);
    setShowMonasteriesImgCard(false);
    setShowPelingdanceImgs(false);
  };

  const handleNextIcon = () => {
    if (showIntroduction) {
      setShowIntroduction(false);
      setShowCards(true);
    } else if (selectedCard === "historic") {
      setSelectedCard("lineage");
    } else if (selectedCard === "lineage") {
      setSelectedCard("revelations");
    }
  };

  const isBlueCard =
    showIntroduction ||
    showNaringDragCard ||
    showBurningLakeCard ||
    showMonasteriesCard ||
    showPelingDanceCard;

  const nameCardBackground = showCards
    ? "#FFD9BC"
    : selectedCard === "historic" ||
      selectedCard === "lineage" ||
      selectedCard === "revelations" ||
      selectedCard === "legacy"
    ? "#F38C64"
    : isBlueCard
    ? "#C9D7EE"
    : "#384E63";

  const nameCardColor = showCards
    ? "#6A1F11"
    : selectedCard === "historic" ||
      selectedCard === "lineage" ||
      selectedCard === "revelations" ||
      selectedCard === "legacy"
    ? "#6A1F11"
    : isBlueCard
    ? "#2B455D"
    : "white";

  const cardNameFontSize = language === BHUTAN ? "1.5rem" : "1.25rem";
  const subCardnameFontSize = language === BHUTAN ? "1.5rem" : "1.25rem";
  const subCardnameMarginLeft = language === BHUTAN ? "10.1rem" : "12.2rem";
  const showYear =
    showCards ||
    selectedCard ||
    showIntroduction ||
    showNaringDragBookImg ||
    showNaringDragCard ||
    showBurningLakeBookImg ||
    showBurningLakeCard ||
    showMonasteriesImgCard ||
    showMonasteriesCard ||
    showPelingDanceCard ||
    showPelingdanceImgs;

  const renderSelectedCard = () => {
    switch (selectedCard) {
      case "historic":
        return <HistoricCard language={language} showIntro={true} />;
      case "lineage":
        return <LineageCard language={language} showIntro={true} />;
      case "revelations":
        return <RevelationsCard language={language} showIntro={true} />;
      case "legacy":
        return <LegacyCards language={language} showIntro={true} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pemaContainer}>
      <AnimatePresence>
        {showYearText && (
          <motion.div
            className={styles.pemaText}
            initial={false} // Prevent initial animation on first mount
            exit={{ opacity: 0, x: 150 }} // Fade out on exit
            transition={{ duration: 3 }} // Adjust the duration as needed
          >
            <YearText
              BornYear="1450"
              Endyear="-1521"
              fontSize="118px"
              marginLeft="40px"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.pemaImage} onClick={handleCardOrImageClick}>
        <img src={Pema} alt="" />
      </div>

      <div
        className={styles.NameCardContainer}
        onClick={handleCardOrImageClick}
      >
        <NameCard
          cardName={
            showYear
              ? PEMA_LINGPA_INFORMATION[language].nameCardtitle
              : PEMA_LINGPA_INFORMATION[language].nameCardtitle
          }
          subCardname={
            showYear
              ? PEMA_LINGPA_INFORMATION[language].nameCardtitleTwo
              : PEMA_LINGPA_INFORMATION[language].nameCardtitleTwo
          }
          width="310px"
          height="100px"
          year={
            showYear ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                1450 - 1521
              </motion.div>
            ) : undefined
          }
          paraSize="15px"
          paraColor={nameCardColor}
          background={nameCardBackground}
          color={nameCardColor}
          fontSize={cardNameFontSize}
          subCardnameFontSize={subCardnameFontSize}
          subCardnameMarginLeft={subCardnameMarginLeft}
        />
      </div>

      <AnimatePresence>
        {showIntroduction && (
          <>
            <div className={styles.IntroCard}>
              <IntroductionCard
                language={language}
                showIntro={showIntroduction}
              />
            </div>
            <LanguageIcon
              onClick={toggleLanguage}
              whiteImage={true}
              showIcons={showIcons}
              language={language}
              left="64.4%"
              top="95.5%"
              iconWidth="25px"
              IconHeight="25px"
              height="50px"
              width="50px"
              margin="12px"
            />
            <NextIcon
              showIcons={showIcons}
              whiteImage={true}
              left="76%"
              top="82%"
              height="70px"
              width="80px"
              margin="25px"
              background="#2B455D"
              onClick={handleShowCards}
            />
            <CloseIcon
              showIcons={showIcons}
              left="63.8%"
              top="91.5%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCards && (
          <>
            <PemaCards
              // isFadingOut={isFadingOut}
              language={language}
              onCardClick={handleCardClick}
              showCards={true}
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              language={language}
              left="66.4%"
              top="92.2%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="65.7%"
              top="88.2%"
              background="#6A1F11"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCard && (
          <>
            <AnimatePresence>
              {selectedCard === "historic" && (
                <>
                  <div className={styles.HistoricCard}>
                    <HistoricCard language={language} showIntro={true} />

                    <LanguageIcon
                      onClick={toggleLanguage}
                      showIcons={showIcons}
                      language={language}
                      left="64.45%"
                      top="92.5%"
                      iconWidth="25px"
                      IconHeight="25px"
                      height="48px"
                      width="50px"
                      margin="13px"
                      background="#3A1701"
                    />
                    <HomeIcon
                      showIcons={showIcons}
                      left="63.8%"
                      top="88.5%"
                      background="#6A1F11"
                      onClick={handleHomeClick}
                    />
                    <NextIcon
                      showIcons={showIcons}
                      whiteImage={true}
                      left="74.8%"
                      top="82%"
                      height="70px"
                      width="80px"
                      margin="25px"
                      background="#3A1701"
                      color="#FFD9BC"
                      onClick={handleNextIcon}
                    />
                    <CloseIcon
                      showIcons={showIcons}
                      left="63.8%"
                      top="84.5%"
                      background="#6A1F11"
                      onClick={handleCardOrImageClick}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedCard === "lineage" && (
                <>
                  <div className={styles.LineageCard}>
                    <LineageCard
                      language={language}
                      showIntro={true}
                      showIcons={showIcons}
                      onNextClick={handleNextIcon}
                    />

                    <LanguageIcon
                      onClick={toggleLanguage}
                      showIcons={showIcons}
                      language={language}
                      left="61.9%"
                      top="96%"
                      background="#3A1701"
                    />
                    <HomeIcon
                      showIcons={showIcons}
                      left="61.3%"
                      top="92%"
                      background="#6A1F11"
                      height="70px"
                      width="80px"
                      margin="25px"
                      onClick={handleHomeClick}
                    />
                    {/* <NextIcon
                  showIcons={showIcons}
                  left="75.5%"
                  top="82%"
                  height="70px"
                  width="80px"
                  margin="25px"
                  background="#3A1701"
                  color="#FFD9BC"
                  onClick={handleNextIcon}
                /> */}
                    <CloseIcon
                      showIcons={showIcons}
                      left="61.3%"
                      top="88%"
                      background="#6A1F11"
                      onClick={handleCardOrImageClick}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedCard === "revelations" && (
                <>
                  <div className={styles.LineageCard}>
                    <RevelationsCard
                      language={language}
                      showIntro={true}
                      onNaringDragClick={handleNaringDragClick}
                      onBurningLakeClick={handleBurningLakeClick}
                    />

                    <LanguageIcon
                      language={language}
                      onClick={toggleLanguage}
                      showIcons={showIcons}
                      left="61.8%"
                      top="96%"
                      iconWidth="25px"
                      IconHeight="25px"
                      height="55px"
                      background="#3A1701"
                    />
                    <HomeIcon
                      showIcons={showIcons}
                      left="61.2%"
                      top="92%"
                      background="#6A1F11"
                      height="70px"
                      width="80px"
                      margin="25px"
                      onClick={handleHomeClick}
                    />
                    <CloseIcon
                      showIcons={showIcons}
                      left="61.2%"
                      top="88%"
                      background="#6A1F11"
                      onClick={handleCardOrImageClick}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {selectedCard === "legacy" && (
                <>
                  <div className={styles.LineageCard}>
                    <LegacyCards
                      language={language}
                      showIntro={true}
                      onMonasteriesCardClick={handleOpenMonasteriesCard}
                      onPelingDanceCardClick={handleOpenPelingDanceCard}
                    />

                    <LanguageIcon
                      language={language}
                      onClick={toggleLanguage}
                      showIcons={showIcons}
                      left="61.8%"
                      top="91.5%"
                      iconWidth="25px"
                      IconHeight="25px"
                      height="55px"
                      background="#3A1701"
                    />
                    <HomeIcon
                      showIcons={showIcons}
                      left="61.2%"
                      top="87.5%"
                      background="#6A1F11"
                      height="70px"
                      width="80px"
                      margin="25px"
                      onClick={handleHomeClick}
                    />
                    <CloseIcon
                      showIcons={showIcons}
                      left="61.2%"
                      top="83.5%"
                      background="#6A1F11"
                      onClick={handleCardOrImageClick}
                    />
                  </div>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNaringDragCard && (
          <>
            <div className={styles.NaringDragCard}>
              <NaringDrag
                language={language}
                showIntro={true}
                onNaringDragBookImgClick={handleNaringDragBookImgClick}
              />
            </div>
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              left="64.25%"
              top="96.2%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="63.6%"
              top="92.2%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
              whiteImage={true}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="63.6%"
              top="88.2%"
              height="100px"
              marginTop="40px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="63.6%"
              top="84.3%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNaringDragBookImg && (
          <>
            <div className={styles.NaringDragBook}>
              <NaringDragBook
                language={language}
                onBurningLakeAnimationCardClick={
                  handleBurningLakeAnimationCardClick
                }
              />
            </div>
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="60.8%"
              top="86.8%"
              height="130px"
              marginTop="50px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="60.8%"
              top="90.7%"
              onClick={handleHomeClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="61.4%"
              top="94.6%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="60.8%"
              top="83%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBurningLakeBookImg && (
          <>
            <div className={styles.NaringDragBook}>
              <BurningLakeBook
                language={language}
                onNaringDragAnimationCardClick={
                  handleNaringDragAnimationCardClick
                }
              />
            </div>
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="60.8%"
              top="86.8%"
              height="130px"
              marginTop="50px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="60.8%"
              top="90.7%"
              onClick={handleHomeClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="61.4%"
              top="94.6%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="60.8%"
              top="83%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBurningLakeCard && (
          <>
            <div className={styles.BurningLakeCard}>
              <BurningLake
                language={language}
                showIntro={true}
                onBurningLakeBookImgClick={handleBurningLakeBookImgClick}
              />
            </div>
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              left="64.25%"
              top="96.3%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="63.6%"
              top="92.3%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
              whiteImage={true}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="63.6%"
              top="88.2%"
              height="100px"
              marginTop="40px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="63.6%"
              top="84.3%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMonasteriesCard && (
          <>
            <div className={styles.MonasteriesCard}>
              <Monastries
                language={language}
                showIntro={true}
                onMonasteriesImgClick={handleShowMonasteriesImgCard}
              />
            </div>
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              left="62.35%"
              top="96%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="61.7%"
              top="92%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
              whiteImage={true}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="61.7%"
              top="88%"
              height="100px"
              marginTop="35px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="61.7%"
              top="84%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMonasteriesImgCard && (
          <>
            <MonasteriesImg
              language={language}
              handleOpenPeleingCard={handleOpenPeleingCard}
            />

            <motion.div
              className={styles.SmallMonstriesPelingCard}
              onClick={handleOpenPeleingCard}
              initial={{ opacity: 0 }} // Initial opacity
              animate={{ opacity: 1 }} // Final opacity
              transition={{ duration: 0.5, delay: 2 }} // Fade duration
              exit={{ opacity: 0, transition: { duration: 2.5 } }}
            >
              <motion.div
                className={styles.SmallPeilingCardHeader}
                initial={{ opacity: 0 }} // Initial opacity for header
                animate={{ opacity: 1 }} // Final opacity for header
                transition={{ duration: 0.5, delay: 1.5 }} // Fade duration for header
                exit={{ opacity: 0, transition: { duration: 3 } }}
              >
                {PEMA_LINGPA_INFORMATION[language].pelingdance.title}
              </motion.div>
              <motion.div
                className={styles.SmallPeilingCardTitle}
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 1.7 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 3.2 } }}
              >
                {PEMA_LINGPA_INFORMATION[language].pelingdance.header}
              </motion.div>
            </motion.div>

            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="60.5%"
              top="86.8%"
              height="130px"
              marginTop="50px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="60.5%"
              top="90.7%"
              onClick={handleHomeClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="61.2%"
              top="94.6%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="60.5%"
              top="83%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPelingDanceCard && (
          <>
            <div className={styles.PelingDanceCard}>
              <PelingDance
                language={language}
                showIntro={true}
                onPelingVideoClick={handleOpenPelingdanceImgs}
              />
            </div>
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="61.8%"
              top="89%"
              onClick={handleHomeClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="62.4%"
              top="92.9%"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="61.8%"
              top="85%"
              height="130px"
              marginTop="50px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="61.8%"
              top="81%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPelingdanceImgs && (
          <>
            <div className={styles.PelingDanceVideo}>
              {/* Main Video with Fade Effect */}
              <motion.video
                className={styles.videoFrame}
                autoPlay
                muted
                loop
                initial={{ opacity: 0 }} // Initial opacity
                animate={{ opacity: 1 }} // Final opacity
                transition={{ duration: 0.5, delay: 2 }} // Fade duration
                exit={{ opacity: 0, transition: { duration: 2 } }}
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>

              {/* Container for additional videos */}
              <div style={{ display: "flex" }}>
                {/* First Additional Video with Fade Effect */}
                <motion.div
                  className={styles.PelingDanceVideo1}
                  initial={{ opacity: 0 }} // Initial opacity
                  animate={{ opacity: 1 }} // Final opacity
                  transition={{ duration: 0.5, delay: 2 }} // Fade duration with delay
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                >
                  <video className={styles.videoFrame2} autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>

                {/* Second Additional Video with Fade Effect */}
                <motion.div
                  className={styles.PelingDanceVideo2}
                  initial={{ opacity: 0 }} // Initial opacity
                  animate={{ opacity: 1 }} // Final opacity
                  transition={{ duration: 0.5, delay: 2.2 }} // Fade duration with delay
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                >
                  <video className={styles.videoFrame3} autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={styles.SmallMonstriesCard}
              onClick={handleOpenPeleingCard}
              initial={{ opacity: 0 }} // Initial opacity
              animate={{ opacity: 1 }} // Final opacity
              transition={{ duration: 0.5, delay: 2.5 }} // Fade duration for the card
              exit={{ opacity: 0, transition: { duration: 2.4 } }}
            >
              <motion.div
                className={styles.SmallPeilingCardHeader}
                initial={{ opacity: 0 }} // Initial opacity for header
                animate={{ opacity: 1 }} // Final opacity for header
                transition={{ duration: 0.5, delay: 2.8 }} // Fade duration for header
                exit={{ opacity: 0, transition: { duration: 2.5 } }}
              >
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.title}
              </motion.div>
              <motion.div
                className={styles.SmallPeilingCardTitle}
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 3 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 2.8 } }}
              >
                {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.header}
              </motion.div>
            </motion.div>
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              left="63.4%"
              top="96%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="62.8%"
              top="92.1%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
              whiteImage={true}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="62.8%"
              top="88.2%"
              height="100px"
              marginTop="40px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="62.8%"
              top="84.3%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PemaLinghpa;
