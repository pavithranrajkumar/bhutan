import React, { useEffect, useState } from "react";
import styles from "./Zhabrung.module.css";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../../components/Card/Icons/CloseIcon/CloseIcon";
import NameCard from "../../components/NameCard/NameCard";
import { ZHABRUNG_INFORMATION } from "../../constants/Characters/ZhabrungNgawangNamgyal";
import Zhabrung from "../../assests/Zhabrung/Zhabdrung.svg";
import YearText from "../../components/YearText/YearText";
import IntroductionCard from "./Cards/IntroductionCard";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import ZhabrungCards from "./Cards/ZhabrungCards/ZhabrungCards";
import HistoricCard from "./Cards/HistoricCard/HistoricCard";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import ReligiousCard from "./Cards/ReligiousCard/ReligiousCard";
import SealCard from "./Cards/ReligiousCard/SealCard/SealCard";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import PoliticalCard from "./Cards/PoliticalCard/PoliticalCard";
import TravellerCard from "./Cards/PoliticalCard/TravellerCard/TravellerCard";
import Administration from "./Cards/Administration/Administration";
import DriglamCard from "./Cards/DriglamCard/DriglamCard";
import SecrecyAtDeath from "./Cards/SecrecyAtDeath/SecrecyAtDeath";
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import CharacterAnimation from "../../CharacterAnimations/AnimationRender";

const ZhabrungNgawangNamgyal = () => {
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSealOfZhabrung, setShowSealOfZhabrung] = useState(false);
  const [showTravellers, setShoTravellers] = useState(false);
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
        }, 500);
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
  };

  const handleHomeClick = () => {
    setShowCards(true);
    setShowIntroduction(false);
    setSelectedCard(null);
    setShowSealOfZhabrung(false);
    setShoTravellers(false);
  };

  const resetState = () => {
    setShowIntroduction(false);
    setShowCards(false);
    setSelectedCard(null);
    setShowSealOfZhabrung(false);
    setShoTravellers(false);
    setShowYearText(true);
    setLanguageChanging(true);
  };

  const handleCardOrImageClick = () => {
    setLanguageChanging(false);
    setIsVisible(true);
    setLanguage(ENGLISH);
    if (showCards || selectedCard) {
      resetState();
      setShowYearText(true);
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
      setLanguageChanging(true);
    } else {
      setShowIntroduction(true);
      setShowIcons(true);
      setShowYearText(false);
    }
  };

  const showZhabrungCards = () => {
    setShowCards(true);
    setShowIntroduction(false);
    setSelectedCard(null);
    setShowYearText(false);
  };

  const handleCardClick = (cardName) => {
    setShowCards(false);
    setSelectedCard(cardName);
    setShowIntroduction(false);
    setShowYearText(false);
  };

  const handleHistoricNextIconClick = () => {
    setSelectedCard("religious");
  };

  const handleSealClick = () => {
    setShowSealOfZhabrung(!showSealOfZhabrung);
  };

  const handleTraverllerClick = () => {
    setShoTravellers(!showTravellers);
  };

  const handleTravellerPreviousClick = () => {
    setShoTravellers(false);
    setSelectedCard("political");
  };

  const handleSealPreviousClick = () => {
    setShowSealOfZhabrung(false);
    setSelectedCard("religious");
  };

  const isBlueCard = showIntroduction || showSealOfZhabrung || showTravellers;
  const nameCardBackground = showCards
    ? "#FFD9BC"
    : isBlueCard
    ? "#C9D7EE"
    : selectedCard
    ? "#C76224"
    : "#384E63";
  const nameCardColor = showCards
    ? "#9C3D22"
    : isBlueCard
    ? "#2B455D"
    : selectedCard
    ? "#FCD7C2"
    : "white";

  useEffect(() => {
    if (selectedCard) {
      setShowIntroduction(false);
    }
  }, [selectedCard]);

  return (
    <div className={styles.ZhabrungContainer}>
      <AnimatePresence>
        {showYearText && (
          <motion.div
            className={styles.pemaText}
            initial={false} // Prevent initial animation on first mount
            exit={{ opacity: 0, x: 150 }} // Fade out on exit
            transition={{ duration: 3 }} // Adjust the duration as needed
          >
            <YearText BornYear="1594" Endyear="-1651" fontSize="118px" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.ZhabrungImage} onClick={handleCardOrImageClick}>
        {/* <img src={Zhabrung} alt="Pema Lingpa" /> */}
        <div className={styles.ZhabrungImage}>
          <CharacterAnimation characterName="zhabdrung" />
        </div>
      </div>

      <div
        className={styles.NameCardContainer}
        onClick={handleCardOrImageClick}
      >
        <NameCard
          cardName={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {ZHABRUNG_INFORMATION[language].title}
            </motion.div>
          }
          width="250px"
          height="110px"
          paraSize="15px"
          fontSize={language === BHUTAN ? "1.5rem" : "20px"}
          year={
            showCards || selectedCard || showIntroduction
              ? "1594-1651"
              : undefined
          }
          paraColor={nameCardColor}
          background={nameCardBackground}
          color={nameCardColor}
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
            <NextIcon
              showIcons={showIcons}
              whiteImage={true}
              left="93.6%"
              top="86%"
              onClick={showZhabrungCards}
              background="#2B455D"
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="80.7%"
              top="77.5%"
              height="65px"
            />
            <CloseIcon
              left="80%"
              top="73.5%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCards && (
          <div>
            <ZhabrungCards
              showCards={true}
              language={language}
              onCardClick={handleCardClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              background="#AA5018"
              left="85.2%"
              top="81.8%"
            />
            <CloseIcon
              left="84.5%"
              top="77.8%"
              background="#AA5018"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCard === "historic" && (
          <>
            <div className={styles.ZhabrungHistoricCard}>
              <HistoricCard language={language} showIntro={true} />
              <NextIcon
                showIcons={showIcons}
                background="#8F4110"
                color="#FCD7C2"
                left="96.8%"
                top="87.5%"
                onClick={handleHistoricNextIconClick}
              />
              <LanguageIcon
                language={language}
                onClick={toggleLanguage}
                showIcons={showIcons}
                left="81.6%"
                top="81.5%"
                height="65px"
                background="#3A1701"
              />
              <HomeIcon
                showIcons={showIcons}
                left="81%"
                top="77.5%"
                background="#8F4110"
                onClick={handleHomeClick}
              />
              <CloseIcon
                showIcons={showIcons}
                left="81%"
                top="73.5%"
                background="#8F4110"
                onClick={handleCardOrImageClick}
              />
            </div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "religious" && !showSealOfZhabrung && (
          <div className={styles.ZhabrungReligousCard}>
            <ReligiousCard
              language={language}
              showIntro={true}
              onSealClick={handleSealClick}
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
              left="88.1%"
              top="80.8%"
              background="#3A1701"
            />
            <HomeIcon
              showIcons={showIcons}
              left="87.5%"
              top="76.9%"
              height="80px"
              width="80px"
              margin="30px"
              background="#8F4110"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="87.5%"
              top="73%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSealOfZhabrung && (
          <div className={styles.SealCard}>
            <SealCard language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="81%"
              top="82%"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="80.4%"
              top="78%"
              onClick={handleHomeClick}
            />
            <PreviousIcon
              onClick={handleSealPreviousClick}
              showIcons={showIcons}
              whiteImage={true}
              left="80.4%"
              top="74%"
              height="100px"
              marginTop="35px"
            />
            <CloseIcon
              left="80.4%"
              top="70%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "political" && !showTravellers && (
          <div className={styles.PoliticalCardContains}>
            <PoliticalCard
              language={language}
              showIntro={true}
              onTravelerClick={handleTraverllerClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="88.4%"
              top="78.5%"
              height="55px"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#8F4110"
              left="87.8%"
              top="74.5%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="87.8%"
              top="70.5%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showTravellers && (
          <div className={styles.TravellerCardContains}>
            <TravellerCard language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="88.2%"
              top="80%"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="87.5%"
              top="76%"
              onClick={handleHomeClick}
            />
            <PreviousIcon
              onClick={handleTravellerPreviousClick}
              showIcons={showIcons}
              whiteImage={true}
              left="87.5%"
              top="72%"
              height="100px"
              marginTop="35px"
            />
            <CloseIcon
              left="87.5%"
              top="68%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "administration" && (
          <div className={styles.AdministrationCardContains}>
            <Administration language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="81.7%"
              top="84%"
              height="55px"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#8F4110"
              left="81%"
              top="80%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="81%"
              top="76%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "secrecy" && (
          <div className={styles.SecrecyAtDeathCardContains}>
            <SecrecyAtDeath language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              left="88.45%"
              top="80.3%"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#8F4110"
              left="87.8%"
              top="76.3%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="87.8%"
              top="72.4%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "driglam" && (
          <div className={styles.DriglamCardContains}>
            <DriglamCard language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="20px"
              IconHeight="20px"
              height="40px"
              width="40px"
              margin="12px"
              left="84.4%"
              top="76.5%"
            />
            <HomeIcon
              showIcons={showIcons}
              background="#8F4110"
              left="83.8%"
              top="72.5%"
              height="50px"
              width="70px"
              margin="15px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="83.8%"
              top="68.5%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZhabrungNgawangNamgyal;
