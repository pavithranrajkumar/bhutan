import React, { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
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
    setShowYearText(false);
    setEnlargedImage(false);
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

      <div
        className={styles.pemaImage}
        onClick={handleCardOrImageClick}
      >
        <img src={Pema} alt="Pema Lingpa" />
        <div className="shine"></div>
      </div>

      <div
        className={styles.NameCardContainer}
        onClick={handleCardOrImageClick}
      >
        <NameCard
          cardName={PEMA_LINGPA_INFORMATION[language].title}
          width="310px"
          height="100px"
          fontSize={language === BHUTAN ? "1.5rem" : "20px"}
          year={
            showCards ||
            selectedCard ||
            showIntroduction ||
            showNaringDragBookImg ||
            showNaringDragCard ||
            showBurningLakeBookImg ||
            showBurningLakeCard ||
            showMonasteriesImgCard ||
            showPelingdanceImgs
              ? "1450 - 1521"
              : undefined
          }
          paraSize="15px"
          paraColor={nameCardColor}
          background={nameCardBackground}
          color={nameCardColor}
        />
      </div>

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
            left="75.8%"
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

      {showCards && (
        <>
          <div>
            <PemaCards
              isFadingOut={isFadingOut}
              language={language}
              onCardClick={handleCardClick}
            />
          </div>
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

      {selectedCard && (
        <div>
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
                  left="74.5%"
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

          {selectedCard === "lineage" && (
            <>
              <div className={styles.LineageCard}>
                <LineageCard
                  language={language}
                  showIntro={true}
                  showIcons={showIcons}
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
                <NextIcon
                  showIcons={showIcons}
                  left="75.5%"
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
                  left="61.3%"
                  top="88%"
                  background="#6A1F11"
                  onClick={handleCardOrImageClick}
                />
              </div>
            </>
          )}

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
        </div>
      )}

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
            top="97%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="63.6%"
            top="93%"
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
            top="93%"
            onClick={handleHomeClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="61.4%"
            top="97%"
          />
          <CloseIcon
            showIcons={showIcons}
            left="60.8%"
            top="83%"
            onClick={handleCardOrImageClick}
          />
        </>
      )}

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
            top="93%"
            onClick={handleHomeClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="61.4%"
            top="97%"
          />
          <CloseIcon
            showIcons={showIcons}
            left="60.8%"
            top="83%"
            onClick={handleCardOrImageClick}
          />
        </>
      )}

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
            top="97%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="63.6%"
            top="93%"
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
            top="97%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="61.7%"
            top="93%"
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

      {showMonasteriesImgCard && (
        <>
          <MonasteriesImg />
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
            top="93%"
            onClick={handleHomeClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="61.2%"
            top="97%"
          />
          <CloseIcon
            showIcons={showIcons}
            left="60.5%"
            top="83%"
            onClick={handleCardOrImageClick}
          />
        </>
      )}

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
            top="91.3%"
            onClick={handleHomeClick}
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="62.4%"
            top="95.2%"
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

      {showPelingdanceImgs && (
        <>
          <div className={styles.PelingDanceVideo}>
            <video className={styles.videoFrame} autoPlay muted loop>
              <source src={video1} type="video/mp4" className={styles.videoF} />
              Your browser does not support the video tag.
            </video>
            <div style={{ display: "flex" }}>
              <div className={styles.PelingDanceVideo1}>
                <video className={styles.videoFrame2} autoPlay muted loop>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={styles.PelingDanceVideo2}>
                {" "}
                <video className={styles.videoFrame3} autoPlay muted loop>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div
            className={styles.SmallMonstriesCard}
            onClick={handleOpenPeleingCard}
          >
            <div className={styles.SmallPeilingCardHeader}>
              {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.title}
            </div>
            <div className={styles.SmallPeilingCardTitle}>
              {PEMA_LINGPA_INFORMATION[language].monastriesAndTemples.header}
            </div>
          </div>
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="63.4%"
            top="97%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="62.8%"
            top="93%"
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
    </div>
  );
};

export default PemaLinghpa;
