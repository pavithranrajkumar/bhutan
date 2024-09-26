import React, { useState } from "react";
import styles from "./Tibetan.module.css";
import { motion } from "framer-motion";
import tibetan from "../../assests/Tibetan/Migrants.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import Introduction from "./Cards/Introduction/Introduction";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import TibetanCards from "./Cards/TibetanCards/TibetanCards";
import { TIBETAN_INFORMATION } from "../../constants/Characters/Tibetan";

const Tibetan = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };

  //   const handleHomeClick = () => {
  //     setShowCards(true);
  //     setSelectedCard(null);
  //     setShowIntroduction(false);
  //     setShowSealOfZhabrung(false);
  //   };

  //   const showZhabrungCards = () => {
  //     setShowCards(true);
  //     setShowIntroduction(false);
  //     setSelectedCard(null);
  //   };

  //   const handleCardClick = (cardName) => {
  //     setShowCards(false);
  //     setSelectedCard(cardName);
  //     setShowIntroduction(false);
  //     console.log("Selected Card:", cardName);
  //   };

  //   const handleHistoricNextIconClick = () => {
  //     setSelectedCard("religious");
  //   };

  //   const handleSealClick = () => {
  //     setShowSealOfZhabrung(!showSealOfZhabrung);
  //   };

  //   const handleTraverllerClick = () => {
  //     setShoTravellers(!showTravellers);
  //   };

  //   const handleTravellerPreviousClick = () => {
  //     setShoTravellers(false);
  //     setSelectedCard("political");
  //   };

  //   const handleSealPreviousClick = () => {
  //     setShowSealOfZhabrung(false);
  //     setSelectedCard("religious");
  //   };

  //   const nameCardBackground =
  //     selectedCard === "historic" && selectedCard === "religious"
  //       ? "#C76224"
  //       : showIntroduction
  //       ? "#C9D7EE"
  //       : "#384E63";

  //   const nameCardColor =
  //     selectedCard === "historic" && selectedCard === "religious"
  //       ? "#FCD7C2"
  //       : showIntroduction
  //       ? "#2B455D"
  //       : "white";

  return (
    <motion.div
      className={styles.TibetanContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {showYearText && (
        <motion.div
          className={styles.TibetanText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <YearText BornYear="1200" Endyear="-1800" fontSize="118px" />
        </motion.div>
      )}
      <motion.div
        className={styles.tibetanImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        <img src={tibetan} alt="Pema Lingpa" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={styles.tibetanNameCardContainer}
          onClick={handleCardOrImageClick}
        >
          {!showIntroduction && !selectedCard ? (
            <>
              <NameCard
                cardName={TIBETAN_INFORMATION[language].title}
                background="#384E63"
                color="white"
                width="250px"
                height="90px"
                fontSize="20px"
              />
            </>
          ) : (
            <>
              <NameCard
                cardName={TIBETAN_INFORMATION[language].title}
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
          <div className={styles.TibetanIntroCard}>
            <Introduction language={language} showIntro={showIntroduction} />
          </div>
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="93%"
            top="86%"
            // onClick={showZhabrungCards}
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
          <TibetanCards
            isFadingOut={isFadingOut}
            language={language}
            // onCardClick={handleCardClick}
          />
          <LanguageIcon
            showIcons={showIcons}
            background="#AA5018"
            left="85.5%"
            top="82%"
          />
        </div>
      )}

      {/* {selectedCard && (
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
      )} */}
    </motion.div>
  );
};

export default Tibetan;
