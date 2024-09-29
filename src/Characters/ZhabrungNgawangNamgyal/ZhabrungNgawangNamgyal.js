import React, { useEffect, useState } from "react";
import styles from "./Zhabrung.module.css";
import { motion } from "framer-motion";
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

const ZhabrungNgawangNamgyal = () => {
  const [language, setLanguage] = useState("english");
  const [nameCardSubtitle, setNameCardSubtitle] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSealOfZhabrung, setShowSealOfZhabrung] = useState(false);
  const [showTravellers, setShoTravellers] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };

  const handleHomeClick = () => {
    setShowCards(true);
    resetState();
  };

  const resetState = () => {
    setShowIntroduction(false);
    setSelectedCard(null);
    setShowSealOfZhabrung(false);
    setShoTravellers(false);
    setShowYearText(true);
  };

  const handleCardOrImageClick = () => {
    if (showCards || selectedCard) {
      resetState();
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
    <motion.div
      className={styles.ZhabrungContainer}
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
          <YearText BornYear="1594" Endyear="-1651" fontSize="118px" />
        </motion.div>
      )}
      <motion.div
        className={styles.ZhabrungImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        <img src={Zhabrung} alt="Pema Lingpa" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={styles.NameCardContainer}
          onClick={handleCardOrImageClick}
        >
          <NameCard
            cardName={ZHABRUNG_INFORMATION[language].title}
            width="200px"
            height="90px"
            paraSize={
              showCards || selectedCard || showIntroduction ? "15px" : "20px"
            }
            fontSize={
              showCards || selectedCard || showIntroduction ? "15px" : "20px"
            }
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
      </motion.div>

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
            left="93%"
            top="86%"
            onClick={showZhabrungCards}
            background="#2B455D"
          />
          <LanguageIcon
            showIcons={showIcons}
            whiteImage={true}
            left="80%"
            top="73.5%"
            height="65px"
          />
        </>
      )}

      {showCards && (
        <div>
          <ZhabrungCards
            isFadingOut={isFadingOut}
            language={language}
            onCardClick={handleCardClick}
          />
          <LanguageIcon
            showIcons={showIcons}
            background="#AA5018"
            left="85.5%"
            top="82%"
          />
        </div>
      )}

      {selectedCard && (
        <div>
          {selectedCard === "historic" && (
            <>
              <div className={styles.ZhabrungHistoricCard}>
                <HistoricCard language={language} showIntro={true} />
                <NextIcon
                  showIcons={showIcons}
                  background="#8F4110"
                  color="#FCD7C2"
                  left="96.2%"
                  top="87.5%"
                  onClick={handleHistoricNextIconClick}
                />
                <LanguageIcon
                  showIcons={showIcons}
                  left="81.2%"
                  top="85%"
                  height="65px"
                  background="#3A1701"
                />
                <HomeIcon
                  showIcons={showIcons}
                  left="80.5%"
                  top="80%"
                  background="#8F4110"
                  onClick={handleHomeClick}
                />
              </div>
            </>
          )}
          {selectedCard === "religious" && !showSealOfZhabrung && (
            <div className={styles.ZhabrungReligousCard}>
              <ReligiousCard
                language={language}
                showIntro={true}
                onSealClick={handleSealClick}
              />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="87.9%"
                top="84%"
                height="55px"
                background="#3A1701"
              />
              <HomeIcon
                showIcons={showIcons}
                left="87.5%"
                top="80.5%"
                background="#8F4110"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
            </div>
          )}

          {showSealOfZhabrung && (
            <div className={styles.SealCard}>
              <SealCard language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                whiteImage={true}
                iconWidth="25px"
                IconHeight="25px"
                left="80.5%"
                top="80%"
                height="55px"
              />
              <HomeIcon
                showIcons={showIcons}
                whiteImage={true}
                left="80.4%"
                top="76.5%"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
              <PreviousIcon
                onClick={handleSealPreviousClick}
                showIcons={showIcons}
                whiteImage={true}
                left="80.4%"
                top="71.5%"
                height="100px"
                margin="35px"
              />
            </div>
          )}

          {selectedCard === "political" && !showTravellers && (
            <div className={styles.PoliticalCardContains}>
              <PoliticalCard
                language={language}
                showIntro={true}
                onTravelerClick={handleTraverllerClick}
              />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="88.2%"
                top="78%"
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
            </div>
          )}
          {showTravellers && (
            <div className={styles.TravellerCardContains}>
              <TravellerCard language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                whiteImage={true}
                iconWidth="25px"
                IconHeight="25px"
                left="87.5%"
                top="80%"
                height="55px"
              />
              <HomeIcon
                showIcons={showIcons}
                whiteImage={true}
                left="87.5%"
                top="76.5%"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
              <PreviousIcon
                onClick={handleTravellerPreviousClick}
                showIcons={showIcons}
                whiteImage={true}
                left="87.5%"
                top="71.5%"
                height="100px"
                margin="35px"
              />
            </div>
          )}
          {selectedCard === "administration" && (
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
          )}
          {selectedCard === "secrecy" && (
            <div className={styles.SecrecyAtDeathCardContains}>
              <SecrecyAtDeath language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="88.2%"
                top="76%"
                height="55px"
              />
              <HomeIcon
                showIcons={showIcons}
                background="#8F4110"
                left="87.8%"
                top="72.4%"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
            </div>
          )}
          {selectedCard === "driglam" && (
            <div className={styles.DriglamCardContains}>
              <DriglamCard language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="88.2%"
                top="83%"
                height="55px"
              />
              <HomeIcon
                showIcons={showIcons}
                background="#8F4110"
                left="87.8%"
                top="79.5%"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ZhabrungNgawangNamgyal;
