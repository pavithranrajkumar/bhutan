import React, { useEffect, useState } from "react";
import styles from "./Supine.module.css";
import { motion } from "framer-motion";
import supine from "../../assests/Supine/SupineDemoness.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import { SUPINE_INFORMATION } from "../../constants/Characters/Supine";
import Introduction from "./Cards/Introduction/Introduction";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import SupineCards from "./Cards/SupineCards/SupineCards";
import ReligiousCard from "./Cards/ReligiousCard/ReligiousCard";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import HimalayanCard from "./Cards/HimalayanCard/HimalayanCard";
import BhutanCard from "./Cards/BhutanCard/BhutanCard";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import JamBayCard from "./Cards/JamBayCard/JamBayCard";
import KyichuCard from "./Cards/KyichuCard/KyichuCard";
import JambayImg1 from "../../assests/Supine/JambayCard/Imgs/JamBayImgs1.png";
import JambayImg2 from "../../assests/Supine/JambayCard/Imgs/JamBayImgs2.png";
import KyichuImg1 from "../../assests/Supine/KyichuImgs/KyichuImg1.png";
import KyichuImg2 from "../../assests/Supine/KyichuImgs/KyichuImg2.png";
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import base from "../../assests/Supine/Base.png";
import Puzzle from "../../pages/Puzzle/Puzzle";

const Supine = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState(ENGLISH);
  const [showIcons, setShowIcons] = useState(false);
  const [showReligiousCard, setShowReligiousCard] = useState(false);
  const [showHimalayanCard, setShowHimalayanCard] = useState(false);
  const [showBhutanCard, setShowBhutanCard] = useState(false);
  const [showJamBayImages, setShowJamBayImages] = useState(false);
  const [showKyichuImages, setShowKyichuImages] = useState(false);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);

  const kyichuFontSize = language === BHUTAN ? "1.25rem" : "1.5625rem";
  const cardNameFontSize = language === BHUTAN ? "1.5rem" : "1.09375rem";
  const subCardnameFontSize = language === BHUTAN ? "1.5rem" : "1.09375rem";
  const subCardnameMarginLeft = language === BHUTAN ? "9rem" : "6.5625rem";

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === ENGLISH ? BHUTAN : ENGLISH;
      console.log("Language changed to:", newLanguage);
      return newLanguage;
    });
    console.log("Current language:", language);
  };

  const handlePuzzleComplete = () => {
    setPuzzleCompleted(true);
  };

  const resetPuzzle = () => {
    setPuzzleCompleted(false);
  };

  const handleCardOrImageClick = () => {
    if (
      showIntroduction ||
      showCards ||
      selectedCard ||
      showHimalayanCard ||
      showBhutanCard ||
      showReligiousCard ||
      showJamBayImages ||
      showKyichuImages
    ) {
      setShowIntroduction(false);
      setShowCards(false);
      setShowHimalayanCard(false);
      setShowBhutanCard(false);
      setShowReligiousCard(false);
      setSelectedCard(null);
      setShowJamBayImages(false);
      setShowKyichuImages(false);
      setShowYearText(true);
    } else {
      setShowIntroduction(true);
      setShowIcons(true);
    }
  };

  const showSupineCards = () => {
    console.log("Showing supine cards");
    setShowIntroduction(false);
    setShowCards(true);
    setShowYearText(false);
  };

  const handleReligiousCardClick = () => {
    setShowCards(false);
    setShowReligiousCard(true);
  };

  const handleHimalayanClick = () => {
    setShowHimalayanCard(true);
    setShowReligiousCard(false);
  };

  const handleBhutanClick = () => {
    setShowBhutanCard(true);
    setShowReligiousCard(false);
  };

  const handleJamBayClick = () => {
    setSelectedCard("jamBay");
    setShowBhutanCard(false);
  };

  const handleKyichuClick = () => {
    setSelectedCard("kyichu");
    setShowBhutanCard(false);
  };

  const handleJamBayImageClick = () => {
    setShowJamBayImages(true);
    setSelectedCard(null);
  };

  const handleKyichuImageClick = () => {
    setShowKyichuImages(true);
    setSelectedCard(null);
  };

  const handleKyichuImagesCardClick = () => {
    setSelectedCard("jamBay");
    setShowKyichuImages(false);
  };

  const handleJamBayImagesCardClick = () => {
    setSelectedCard("kyichu");
    setShowJamBayImages(false);
  };

  const handlePreviousClick = () => {
    if (showKyichuImages) {
      setShowKyichuImages(false);
      setSelectedCard("kyichu");
    } else if (showJamBayImages) {
      setShowJamBayImages(false);
      setSelectedCard("jamBay");
    } else if (selectedCard === "kyichu") {
      setSelectedCard(null);
      setShowBhutanCard(true);
    } else if (selectedCard === "jamBay") {
      setSelectedCard(null);
      setShowBhutanCard(true);
    } else if (showBhutanCard) {
      setShowBhutanCard(false);
      setShowReligiousCard(true);
    } else if (showHimalayanCard) {
      setShowHimalayanCard(false);
      setShowReligiousCard(true);
    } else if (showReligiousCard) {
      setShowReligiousCard(false);
      setShowCards(true);
    } else if (showCards) {
      setShowCards(false);
      setShowIntroduction(true);
    }
  };

  const handleHomeClick = () => {
    setShowYearText(false);
    setShowIntroduction(false);
    setShowCards(true);
    setSelectedCard(null);
    setShowReligiousCard(false);
    setShowHimalayanCard(false);
    setShowBhutanCard(false);
    setShowJamBayImages(false);
    setShowKyichuImages(false);
  };

  useEffect(() => {
    if (showCards) {
      setShowIntroduction(false);
      setShowHimalayanCard(false);
      setShowBhutanCard(false);
      setShowReligiousCard(false);
      setSelectedCard(null);
      setShowCards(true);
      setShowYearText(false);
    }
  });

  useEffect(() => {
    console.log("showCards state changed:", showCards);
  }, [showCards]);

  useEffect(() => {
    if (selectedCard) {
      setShowIntroduction(false);
    }
  }, [selectedCard]);

  const isBlueCard = showIntroduction || showHimalayanCard || showBhutanCard;

  const nameCardBackground = showCards
    ? "#E5E7D5"
    : selectedCard
    ? "#ABB176"
    : isBlueCard
    ? "#C9D7EE"
    : "#384E63";

  const nameCardColor = showCards
    ? "#3A3C25"
    : selectedCard
    ? "#E5E7D5"
    : isBlueCard
    ? "#2B455D"
    : "white";

  const nameParaColor = showCards
    ? "#3A3C25"
    : selectedCard
    ? "#3A3C25"
    : isBlueCard
    ? "#2B455D"
    : "white";

  return (
    <motion.div
      className={styles.SupineContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {showYearText && !showIntroduction && (
        <motion.div
          className={styles.SupineText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <YearText
            BornYear="800"
            Endyear="-900"
            fontSize="118px"
            marginLeft="40px"
          />
        </motion.div>
      )}
      <motion.div
        className={styles.SupineImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        {showHimalayanCard ? "" : <img src={supine} alt="Pema Lingpa" />}{" "}
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={styles.SupineNameCardContainer}
          onClick={handleCardOrImageClick}
        >
          <motion.div
            className={styles.SupineNameCardContainer}
            onClick={handleCardOrImageClick}
          >
            <NameCard
              cardName={SUPINE_INFORMATION[language].nameCardtitle}
              subCardname={SUPINE_INFORMATION[language].nameCardtitleTwo}
              width="250px"
              height="80px"
              fontSize={cardNameFontSize}
              subCardnameFontSize={subCardnameFontSize}
              subCardnameMarginLeft={subCardnameMarginLeft}
              background={nameCardBackground}
              color={nameCardColor}
              year={
                showCards ||
                selectedCard ||
                showIntroduction ||
                showReligiousCard ||
                showHimalayanCard ||
                showBhutanCard
                  ? "800-900"
                  : undefined
              }
              paraColor={nameParaColor}
              paraSize="13px"
              language={language}
            />
          </motion.div>
        </div>
      </motion.div>

      {showIntroduction && (
        <>
          <div className={styles.SupineIntroduction}>
            <Introduction language={language} showIntro={showIntroduction} />
          </div>
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="17.5%"
            top="86%"
            onClick={showSupineCards}
            background="#2B455D"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            language={language}
            left="5.4%"
            top="73.8%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
        </>
      )}

      {showCards && (
        <div>
          <SupineCards
            isFadingOut={isFadingOut}
            language={language}
            onCardClick={handleReligiousCardClick}
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            language={language}
            // supine={true}
            background="#3A3C25"
            left="17.9%"
            top="82.5%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
        </div>
      )}

      {showReligiousCard && (
        <>
          <div className={styles.ReligiousCard}>
            <ReligiousCard
              language={language}
              showIntro={true}
              onHimalayanClick={handleHimalayanClick}
              onBhutanClick={handleBhutanClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            language={language}
            background="#3A3C25"
            left="5%"
            top="83.7%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            background="#555835"
            left="4.4%"
            top="79.5%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showHimalayanCard && (
        <>
          <div className={styles.Puzzle}>
            <Puzzle
              onComplete={handlePuzzleComplete}
              resetPuzzleCard={resetPuzzle}
            />
          </div>
          <div className={styles.HimalayanCard}>
            <HimalayanCard
              language={language}
              showIntro={true}
              puzzleCompleted={puzzleCompleted}
              resetPuzzleCard={resetPuzzle}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            language={language}
            left="3.1%"
            top="87.5%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="2.5%"
            top="83.5%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}

      {showBhutanCard && (
        <>
          <div className={styles.BhutanCard}>
            <BhutanCard
              showIntro={true}
              language={language}
              onJamBayClick={handleJamBayClick}
              onKyichuClick={handleKyichuClick}
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              language={language}
              iconWidth="25px"
              IconHeight="25px"
              height="48px"
              width="50px"
              margin="13px"
              left="5.4%"
              top="84%"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="4.7%"
              top="76.1%"
              height="80px"
              marginTop="28px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="4.7%"
              top="80%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
          </div>
        </>
      )}

      {selectedCard === "jamBay" && (
        <>
          <div className={styles.JamBayCard}>
            <JamBayCard
              showIntro={true}
              language={language}
              onJamBayCardImageClick={handleJamBayImageClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            language={language}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="2.8%"
            top="78%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="2.2%"
            top="70.1%"
            height="80px"
            background="#555835"
            marginTop="28px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="2.2%"
            top="74%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showJamBayImages && (
        <>
          <div className={styles.JamBayImages}>
            <div className={`${styles.palaceImg1} ${styles.animatedImg}`}>
              <img src={JambayImg1} alt="palaceImg1" />
            </div>
            <div className={`${styles.palaceImg2} ${styles.animatedImg}`}>
              <img src={JambayImg2} alt="palaceImg2" />
            </div>
          </div>
          <div
            className={`${styles.JamBayImagesCard} ${styles.animatedCard}`}
            onClick={handleJamBayImagesCardClick}
          >
            <p style={{ fontSize: kyichuFontSize }}>
              {SUPINE_INFORMATION[language].kyichu.title}
            </p>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            language={language}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="7.2%"
            top="83%"
            height="55px"
            className={styles.animatedIcon}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="6.6%"
            top="75%"
            height="80px"
            background="#555835"
            marginTop="28px"
            className={styles.animatedIcon}
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="6.6%"
            top="79.1%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
            className={styles.animatedIcon}
          />
        </>
      )}

      {selectedCard === "kyichu" && (
        <>
          <div className={styles.KyichuCard}>
            <KyichuCard
              showIntro={true}
              language={language}
              onKyichuCardImageClick={handleKyichuImageClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            language={language}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="2.8%"
            top="80.5%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="2.2%"
            top="72.6%"
            height="80px"
            background="#555835"
            marginTop="28px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="2.2%"
            top="76.5%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showKyichuImages && (
        <>
          <div className={styles.JamBayImages}>
            <div className={`${styles.KyichuImg1} ${styles.animatedImg}`}>
              <img src={KyichuImg1} alt="palaceImg1" />
            </div>
            <div className={`${styles.KyichuImg2} ${styles.animatedImg}`}>
              <img src={KyichuImg2} alt="palaceImg2" />
            </div>
          </div>
          <div
            className={`${styles.KyichuImagesCard} ${styles.animatedCard}`}
            onClick={handleKyichuImagesCardClick}
          >
            <p
              style={{
                fontSize: kyichuFontSize,
              }}
            >
              <p>{SUPINE_INFORMATION[language].jambay.title}</p>
            </p>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            language={language}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="7.2%"
            top="83%"
            height="55px"
            className={styles.animatedIcon}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="6.6%"
            top="75%"
            height="80px"
            background="#555835"
            marginTop="28px"
            className={styles.animatedIcon}
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="6.6%"
            top="79.1%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
            className={styles.animatedIcon}
          />
        </>
      )}
    </motion.div>
  );
};

export default Supine;
