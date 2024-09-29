import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./PemaLinghpa.module.css";
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

const PemaLinghpa = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };

  const handleCardOrImageClick = () => {
    if (showCards || selectedCard) {
      setShowCards(false);
      setSelectedCard(null);
      // setShowKurjeLhakhang(false);
      // setShowKurjeLhakhangImgs(false);
      // setShowManifestationCardWithImg(false);
      // setShowPalaceImg(false);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
      setIsActive(true);
      // setSelectedCard(null);
      // setShowCards(false);
    }
  };

  const handleShowCards = () => {
    setShowIntroduction(false);
    setShowCards(true);
  };

  const handleCardClick = (cardName) => {
    setShowCards(false);
    setSelectedCard(null);
    setShowIntroduction(false);
    // setShowSealOfZhabrung(false);
    // setShoTravellers(false);
    setShowYearText(false);
    setSelectedCard(cardName);
  };

  return (
    <motion.div
      className={styles.pemaContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {showYearText && (
        <motion.div
          className={styles.pemaText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <YearText
            BornYear="1450"
            Endyear="-1521"
            fontSize="118px"
            marginLeft="40px"
          />
        </motion.div>
      )}

      <motion.div
        className={`${styles.pemaImage} ${isActive ? styles.ActiveImage : ""}`}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        <img src={Pema} alt="Pema Lingpa" />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={`${styles.NameCardContainer} ${
            isActive ? styles.ActiveCard : ""
          }`}
          onClick={handleCardOrImageClick}
        >
          <NameCard
            cardName="PEMA LINGPA"
            width="250px"
            height="80px"
            fontSize="15px"
            subCardnameFontSize="15px"
            subCardnameMarginLeft="125px"
            // background={nameCardBackground}
            // color={nameCardColor}
            paraColor="white"
            year={"1450-1521"}
            // paraColor={nameParaColor}
            paraSize="13px"
          />
        </div>
      </motion.div>

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
            iconWidth="25px"
            IconHeight="25px"
            left="60%"
            top="95.5%"
            height="55px"
          />
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="76.5%"
            top="82%"
            height="70px"
            width="80px"
            margin="25px"
            background="#2B455D"
            onClick={handleShowCards}
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
            iconWidth="25px"
            IconHeight="25px"
            left="64%"
            top="91%"
            height="55px"
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
                  showIcons={showIcons}
                  left="60.5%"
                  top="96%"
                  iconWidth="25px"
                  IconHeight="25px"
                  height="55px"
                  background="#3A1701"
                />
                <HomeIcon
                  showIcons={showIcons}
                  left="60.2%"
                  top="92.5%"
                  background="#6A1F11"
                  height="70px"
                  width="80px"
                  margin="25px" // onClick={handleHomeClick}
                />
                <NextIcon
                  showIcons={showIcons}
                  whiteImage={true}
                  left="76.5%"
                  top="82%"
                  height="70px"
                  width="80px"
                  margin="25px"
                  background="#3A1701"
                  color="#FFD9BC"
                  // onClick={handleShowCards}
                />
              </div>
            </>
          )}
          {selectedCard === "lineage" && (
            <>
              <div className={styles.LineageCard}>
                <LineageCard language={language} showIntro={true} />

                <LanguageIcon
                  showIcons={showIcons}
                  left="60.5%"
                  top="96%"
                  iconWidth="25px"
                  IconHeight="25px"
                  height="55px"
                  background="#3A1701"
                />
                <HomeIcon
                  showIcons={showIcons}
                  left="60.2%"
                  top="92.5%"
                  background="#6A1F11"
                  height="70px"
                  width="80px"
                  margin="25px" // onClick={handleHomeClick}
                />
                <NextIcon
                  showIcons={showIcons}
                  whiteImage={true}
                  left="76.5%"
                  top="82%"
                  height="70px"
                  width="80px"
                  margin="25px"
                  background="#3A1701"
                  color="#FFD9BC"
                  // onClick={handleShowCards}
                />
              </div>
            </>
          )}
          {selectedCard === "revelations" && (
            <>
              <div className={styles.LineageCard}>
                <RevelationsCard language={language} showIntro={true} />

                <LanguageIcon
                  showIcons={showIcons}
                  left="60.5%"
                  top="96%"
                  iconWidth="25px"
                  IconHeight="25px"
                  height="55px"
                  background="#3A1701"
                />
                <HomeIcon
                  showIcons={showIcons}
                  left="60.2%"
                  top="92.5%"
                  background="#6A1F11"
                  height="70px"
                  width="80px"
                  margin="25px" // onClick={handleHomeClick}
                />
              </div>
            </>
          )}
          {selectedCard === "legacy" && (
            <>
              <div className={styles.LineageCard}>
                <LegacyCards language={language} showIntro={true} />

                <LanguageIcon
                  showIcons={showIcons}
                  left="60.5%"
                  top="96%"
                  iconWidth="25px"
                  IconHeight="25px"
                  height="55px"
                  background="#3A1701"
                />
                <HomeIcon
                  showIcons={showIcons}
                  left="60.2%"
                  top="92.5%"
                  background="#6A1F11"
                  height="70px"
                  width="80px"
                  margin="25px" // onClick={handleHomeClick}
                />
              </div>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PemaLinghpa;
