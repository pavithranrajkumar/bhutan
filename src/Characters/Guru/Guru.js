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
import KurjeLhakhang from "./Cards/GuruCards/HistoricCard/KurjeLhakhang/KurjeLhakhang";
import KurjeLhakhangTemplesImgOne from "../../assests/Guru/Historic/KurjeImgs/PhotoFrame.png";
import KurjeLhakhangTemplesImgTwo from "../../assests/Guru/Historic/KurjeImgs/PhotoFrame(1).png";
import KurjeLhakhangTemplesImgThree from "../../assests/Guru/Historic/KurjeImgs/PhotoFrame(2).png";
import KurjeLhakhangTemplesImgFour from "../../assests/Guru/Historic/KurjeImgs/PhotoFrameMain(1).png";
import Kurje from "../../assests/Guru/Historic/KurjeImgs/Frame 233.jpg";
import KurjeLhakhangImgs from "./Cards/GuruCards/HistoricCard/KurjeLhakhangImgs/KurjeLhakhangImgs";
import Manifestation from "./Cards/GuruCards/Manifestation/Manifestation";

const Guru = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showKurjeLhakhang, setShowKurjeLhakhang] = useState(false);
  const [showKurjeLhakhangImgs, setShowKurjeLhakhangImgs] = useState(false);

  const handleHomeClick = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
  };

  const handleCardOrImageClick = () => {
    if (showCards || selectedCard) {
      setShowCards(false);
      setSelectedCard(null);
      setShowIntroduction(false);
      setShowKurjeLhakhang(false);
      setShowKurjeLhakhangImgs(false);
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
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(false);
  };

  const handleCardClick = (cardName) => {
    console.log(`Selected Card: ${cardName}`);
    setShowCards(false);
    setSelectedCard(cardName);
    setShowIntroduction(false);
    if (cardName === "historic") {
      setShowKurjeLhakhang(false);
      setShowKurjeLhakhangImgs(false);
    } else {
      setShowKurjeLhakhang(false);
    }
  };

  const handleKurjeClick = () => {
    setShowKurjeLhakhang(!showKurjeLhakhang);
    setShowKurjeLhakhangImgs(false);
  };

  const handleKurjeTempleClick = () => {
    setShowKurjeLhakhang(false);
    setShowKurjeLhakhangImgs(true);
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

      {showKurjeLhakhangImgs ? (
        <div>
          <KurjeLhakhangImgs />
        </div>
      ) : selectedCard === "historic" && !showKurjeLhakhang ? (
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
      ) : (
        showKurjeLhakhang && (
          <div className={styles.GuruKurjeLhakhangCard}>
            <KurjeLhakhang
              language={language}
              showIntro={true}
              onKurjeTempleClick={handleKurjeTempleClick}
            />
            <LanguageIcon
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="20.8%"
              top="95.3%"
              height="55px"
              background="#193145"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              background="#2B455D"
              left="20.7%"
              top="91.8%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
          </div>
        )
      )}

      {selectedCard === "manifestation" && (
        <div className={styles.GuruHistoricCard}>
          <Manifestation language={language} showIntro={true} />
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
      )}
    </motion.div>
  );
};

export default Guru;
