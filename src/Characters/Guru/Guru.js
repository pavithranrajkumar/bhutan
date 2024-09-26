import React, { useState } from "react";
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

const Guru = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showKurjeLhakhang, setShowKurjeLhakhang] = useState(false);

  const handleHomeClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowKurjeLhakhang(false);
  };

  const handleCardOrImageClick = () => {
    if (showCards || selectedCard) {
      setShowCards(false);
      setSelectedCard(null);
      setShowIntroduction(false);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
      setSelectedCard(null);
    }
  };

  const showGuruCards = () => {
    setShowCards(true);
    setShowIntroduction(false);
    setSelectedCard(null);
  };

  const handleCardClick = (cardName) => {
    setShowCards(false);
    setSelectedCard(cardName);
    setShowIntroduction(false);
    if (cardName !== "historic") {
      setShowKurjeLhakhang(false);
    }
  };

  const handleKurjeClick = () => {
    setShowKurjeLhakhang(!showKurjeLhakhang);
  };
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
          {!showIntroduction && !selectedCard ? (
            <>
              <NameCard
                cardName={GURU_INFORMATION[language].cardName}
                subCardname={GURU_INFORMATION[language].subCardName}
                subCardnameMarginLeft="25px"
                subCardnameFontSize="13px"
                background="#384E63"
                color="white"
                width="200px"
                height="90px"
                fontSize="20px"
              />
            </>
          ) : (
            <>
              <NameCard
                cardName={GURU_INFORMATION[language].title}
                width="200px"
                height="90px"
                fontSize="15px"
                year="1594-1651"
                paraColor="white"
                paraSize="13px"
                // background={nameCardBackground}
                // color={nameCardColor}
              />
            </>
          )}
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
            top="80%"
            onClick={showGuruCards}
            background="#2B455D"
          />
          <LanguageIcon
            showIcons={showIcons}
            whiteImage={true}
            left="27.4%"
            top="93.9%"
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
            showIcons={showIcons}
            background="#613900"
            left="28.5%"
            top="84.3%"
          />
        </div>
      )}

      {selectedCard && (
        <div>
          {selectedCard === "historic" && !showKurjeLhakhang && (
            <>
              <div className={styles.GuruHistoricCard}>
                <HistoricCard
                  language={language}
                  showIntro={true}
                  onKurjeClick={handleKurjeClick}
                />
                <LanguageIcon
                  showIcons={showIcons}
                  iconWidth="25px"
                  IconHeight="25px"
                  left="22.1%"
                  top="91.4%"
                  height="55px"
                  background="#613900"
                />
                <HomeIcon
                  showIcons={showIcons}
                  background="#C87E12"
                  left="21.8%"
                  top="88%"
                  height="70px"
                  width="80px"
                  margin="25px"
                  onClick={handleHomeClick}
                />
              </div>
            </>
          )}

          {showKurjeLhakhang && (
            <div className={styles.GuruKurjeLhakhangCard}>Jothika</div>
          )}

          {/* {selectedCard === "administration" && (
            <div className={styles.AdministrationCardContains}>
              <Administration language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="81%"
                top="84%"
                height="55px"
              />
              <HomeIcon
                showIcons={showIcons}
                background="#8F4110"
                left="80.5%"
                top="80.5%"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
            </div>
          )} */}
        </div>
      )}
    </motion.div>
  );
};

export default Guru;
