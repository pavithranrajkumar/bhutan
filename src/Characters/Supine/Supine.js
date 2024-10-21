import React, { useEffect, useState } from "react";
import styles from "./Supine.module.css";
import { AnimatePresence, motion } from "framer-motion";
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
import CloseIcon from "../../components/Card/Icons/CloseIcon/CloseIcon";
import CharacterAnimation from "../../CharacterAnimations/AnimationRender";

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
  const [languageChanging, setLanguageChanging] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const kyichuFontSize = language === BHUTAN ? "1.25rem" : "1.5625rem";
  const cardNameFontSize = language === BHUTAN ? "1.5rem" : "1.25rem";
  const subCardnameFontSize = language === BHUTAN ? "1.5rem" : "1.25rem";
  const subCardnameMarginLeft = language === BHUTAN ? "10.1rem" : "7rem";

  useEffect(() => {
    const interval = setInterval(() => {
      if (languageChanging) {
        setIsVisible(false);

        setTimeout(() => {
          setLanguage((prevLanguage) =>
            prevLanguage === ENGLISH ? BHUTAN : ENGLISH
          );
          setIsVisible(true);
        }, 3000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [languageChanging]);

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
    setLanguageChanging(false);
    setLanguage(ENGLISH);
    setIsVisible(true);
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
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
      setLanguageChanging(true);
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
    <div
      className={styles.SupineContainer}
    >
      <AnimatePresence>
        {showYearText && !showIntroduction && (
          <motion.div
            className={styles.SupineText}
            initial={false} // Prevent initial animation on first mount
            exit={{ opacity: 0, x: 150 }} // Fade out on exit
            transition={{ duration: 3 }}
          >
            <YearText
              BornYear="800"
              Endyear="-900"
              fontSize="118px"
              marginLeft="40px"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showHimalayanCard ? (
        ""
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="base-image"
          >
            <div
              className={styles.SupineImage}
              onClick={handleCardOrImageClick}
            >
              <div className={styles.SupineImage}>
                <CharacterAnimation characterName="supine" />
              </div>
            </div>
          </motion.div>
        </>
      )}

      <div
        className={styles.SupineNameCardContainer}
        onClick={handleCardOrImageClick}
      >
        <motion.div
          className={styles.SupineNameCardContainer}
          onClick={handleCardOrImageClick}
        >
          <NameCard
            cardName={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 2.5 }}
              >
                {SUPINE_INFORMATION[language].nameCardtitle}
              </motion.div>
            }
            subCardname={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 2.5 }}
              >
                {SUPINE_INFORMATION[language].nameCardtitleTwo}
              </motion.div>
            }
            width="270px"
            height="100px"
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
            paraSize="15px"
            language={language}
          />
        </motion.div>
      </div>

      <AnimatePresence>
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
              top="77.8%"
              iconWidth="25px"
              IconHeight="25px"
              height="50px"
              width="55px"
              margin="13px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="4.8%"
              top="73.8%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCards && (
          <div>
            <SupineCards
              showCards={true}
              language={language}
              onCardClick={handleReligiousCardClick}
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              language={language}
              background="#3A3C25"
              left="12.2%"
              top="82.7%"
            />
            <CloseIcon
              showIcons={showIcons}
              left="11.6%"
              top="78.5%"
              background="#3A3C25"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
            />
            <HomeIcon
              showIcons={showIcons}
              supine={true}
              background="#555835"
              left="4.4%"
              top="79.5%"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              background="#555835"
              left="4.4%"
              top="71.5%"
              onClick={handleCardOrImageClick}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              background="#555835"
              left="4.4%"
              top="75.5%"
              height="80px"
              marginTop="28px"
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHimalayanCard && (
          <>
            <div className={styles.Puzzle}>
              <div>
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
            </div>
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="0.5%"
              top="83.5%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              language={language}
              left="1.1%"
              top="95.5%"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="0.5%"
              top="91.5%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              showIcons={showIcons}
              left="0.5%"
              top="87.5%"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              <CloseIcon
                showIcons={showIcons}
                left="4.7%"
                top="72%"
                onClick={handleCardOrImageClick}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              top="82%"
              height="55px"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              color="#D9D9D9"
              left="2.2%"
              top="74%"
              height="80px"
              background="#555835"
              marginTop="28px"
            />
            <HomeIcon
              showIcons={showIcons}
              supine={true}
              left="2.2%"
              top="78%"
              height="70px"
              width="80px"
              margin="25px"
              background="#555835"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="2.2%"
              top="70%"
              background="#555835"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showJamBayImages && (
          <>
            {" "}
            <div className={styles.JamBayImages}>
              <div className={styles.palaceImg1}>
                <motion.img
                  src={JambayImg1}
                  alt=""
                  initial={{ opacity: 0 }} // Initial state
                  animate={{ opacity: 1 }} // Animation state
                  transition={{ duration: 1.5, delay: 2.5 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                />
              </div>
              <div className={styles.palaceImg2}>
                <motion.img
                  src={JambayImg2}
                  alt=""
                  initial={{ opacity: 0 }} // Initial state
                  animate={{ opacity: 1 }} // Animation state
                  transition={{ duration: 1.5, delay: 2.8 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                />
              </div>
            </div>
            <motion.div
              className={styles.JamBayImagesCard}
              onClick={handleJamBayImagesCardClick}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 3 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              <motion.div
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 3.8 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 2.8 } }}
              >
                <p style={{ fontSize: kyichuFontSize }}>
                  {SUPINE_INFORMATION[language].kyichu.title}
                </p>{" "}
              </motion.div>
            </motion.div>
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
            <CloseIcon
              showIcons={showIcons}
              left="6.6%"
              top="71%"
              background="#555835"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              top="84.5%"
              height="55px"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              color="#D9D9D9"
              left="2.2%"
              top="76.5%"
              height="80px"
              background="#555835"
              marginTop="28px"
            />
            <HomeIcon
              showIcons={showIcons}
              supine={true}
              left="2.2%"
              top="80.5%"
              height="70px"
              width="80px"
              margin="25px"
              background="#555835"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="2.2%"
              top="72.6%"
              background="#555835"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showKyichuImages && (
          <>
            <div className={styles.JamBayImages}>
              <div className={styles.KyichuImg1}>
                <motion.img
                  src={KyichuImg1}
                  alt=""
                  initial={{ opacity: 0 }} // Initial state
                  animate={{ opacity: 1 }} // Animation state
                  transition={{ duration: 1.5, delay: 2.5 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                />
              </div>
              <div className={styles.KyichuImg2}>
                <motion.img
                  src={KyichuImg2}
                  alt=""
                  initial={{ opacity: 0 }} // Initial state
                  animate={{ opacity: 1 }} // Animation state
                  transition={{ duration: 1.5, delay: 2.8 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                />
              </div>
            </div>
            <motion.div
              className={styles.KyichuImagesCard}
              onClick={handleKyichuImagesCardClick}
              initial={{ opacity: 0 }} // Initial opacity for title
              animate={{ opacity: 1 }} // Final opacity for title
              transition={{ duration: 0.5, delay: 3 }} // Fade duration for title
              exit={{ opacity: 0, transition: { duration: 2.8 } }}
            >
              <motion.div
                initial={{ opacity: 0 }} // Initial opacity for title
                animate={{ opacity: 1 }} // Final opacity for title
                transition={{ duration: 0.5, delay: 3.8 }} // Fade duration for title
                exit={{ opacity: 0, transition: { duration: 2.8 } }}
              >
                <p
                  style={{
                    fontSize: kyichuFontSize,
                  }}
                >
                  <p>{SUPINE_INFORMATION[language].jambay.title}</p>
                </p>
              </motion.div>
            </motion.div>
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
            <CloseIcon
              showIcons={showIcons}
              left="6.6%"
              top="71%"
              background="#555835"
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Supine;
