import React, { useEffect, useState } from "react";
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
import Arrival from "./Cards/Arrival/Arrival";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import SchoolsCard from "./Cards/SchoolsCard/SchoolsCard";
import { faL } from "@fortawesome/free-solid-svg-icons";
import PopularSchoolsCard from "./Cards/SchoolsCard/PopularSchoolsCard/PopularSchoolsCard";
import DrukpaKagyu from "./Cards/SchoolsCard/DrukpaKagyu/DrukpaKagyu";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import popularImg1 from "../../assests/Tibetan/PopularSchools/popularImg1.png";
import popularImg2 from "../../assests/Tibetan/PopularSchools/popularImg2.png";
import popularImg3 from "../../assests/Tibetan/PopularSchools/popularImg3.png";
import popularImg4 from "../../assests/Tibetan/PopularSchools/popularImg4.png";
import popularImg5 from "../../assests/Tibetan/PopularSchools/popularImg5.png";
import popularImg6 from "../../assests/Tibetan/PopularSchools/popularImg6.png";
import popularImg7 from "../../assests/Tibetan/PopularSchools/popularImg7.png";
import popularImg8 from "../../assests/Tibetan/PopularSchools/popularImg8.png";
import popularImg9 from "../../assests/Tibetan/PopularSchools/popularImg9.png";
import popularImg10 from "../../assests/Tibetan/PopularSchools/popularImg10.png";
import popularImg11 from "../../assests/Tibetan/PopularSchools/popularImg11.png";
import popularImg12 from "../../assests/Tibetan/PopularSchools/popularImg12.png";
import popularImg13 from "../../assests/Tibetan/PopularSchools/popularImg13.png";
import DrugpaKagyuImg1 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg1.png";
import DrugpaKagyuImg2 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg2.png";
import DrugpaKagyuImg3 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg3.png";
import DrugpaKagyuImg4 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg4.png";
import DrugpaKagyuImg5 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg5.png";
import DrugpaKagyuImg6 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg6.png";
import DrugpaKagyuImg7 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg7.png";
import DrugpaKagyuImg8 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg8.png";
import DrugpaKagyuImg9 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg9.png";
import DrugpaKagyuImg10 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg10.png";
import DrugpaKagyuImg11 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg11.png";
import DrugpaKagyuImg12 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg12.png";
import DrugpaKagyuImg13 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg13.png";
import DrugpaKagyuImg14 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg14.png";
import DrugpaKagyuImg15 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg15.png";
import DrugpaKagyuImg16 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg16.png";
import DrugpaKagyuImg17 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg17.png";
import DrugpaKagyuImg18 from "../../assests/Tibetan/Drukpakagyu/DrugpaKagyuImg18.png";
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";

const TibetanTwo = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showPopularSchoolsCard, setShowPopularSchoolsCard] = useState(false);
  const [showDrukpaKagyuCard, setShowDrukpaKagyuCard] = useState(false);
  const [showPopularSchoolsImgCard, setShowPopularSchoolsImgCard] =
    useState(false);
  const [showDrugpaKagyuImgCard, setShowDrugpaKagyuImgCard] = useState(false);

  const handleCardOrImageClick = () => {
    if (
      showCards ||
      selectedCard ||
      showDrukpaKagyuCard ||
      showPopularSchoolsCard ||
      showPopularSchoolsImgCard ||
      showDrugpaKagyuImgCard
    ) {
      setShowCards(false);
      setSelectedCard(null);
      setShowIntroduction(false);
      setShowPopularSchoolsCard(false);
      setShowDrukpaKagyuCard(false);
      setShowPopularSchoolsImgCard(false);
      setShowDrugpaKagyuImgCard(false);
      setShowYearText(true);
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
      setSelectedCard(null);
    }
  };

  const resetView = () => {
    setShowCards(true);
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowPopularSchoolsCard(false);
    setShowDrukpaKagyuCard(false);
    setShowPopularSchoolsImgCard(false);
    setShowDrugpaKagyuImgCard(false);
    setShowYearText(true);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === ENGLISH ? BHUTAN : ENGLISH;
      console.log("Language changed to:", newLanguage);
      return newLanguage;
    });
  };

  const showTibetanCards = () => {
    setShowIntroduction(false);
    setShowCards(true);
  };

  const handleCardClick = (cardName) => {
    setShowCards(false);
    setSelectedCard(cardName);
    setShowIntroduction(false);
    setShowYearText(false);
  };

  const showSchoolsCards = () => {
    setSelectedCard("schools");
  };

  const showPopularSchools = () => {
    setShowPopularSchoolsCard(true);
    setSelectedCard(null);
  };

  const showDrukpaKagyu = () => {
    setShowDrukpaKagyuCard(true);
    setSelectedCard(null);
  };

  const showPopularSchoolsImg = () => {
    setShowPopularSchoolsCard(false);
    setShowPopularSchoolsImgCard(true);
  };

  const showDrugpaKagyuImg = () => {
    setShowDrukpaKagyuCard(false);
    setShowDrugpaKagyuImgCard(true);
  };

  const handlePreviousClick = () => {
    if (showPopularSchoolsImgCard) {
      setShowPopularSchoolsImgCard(false);
      setShowPopularSchoolsCard(true);
    } else if (showDrugpaKagyuImgCard) {
      setShowDrugpaKagyuImgCard(false);
      setShowDrukpaKagyuCard(true);
    } else if (showPopularSchoolsCard) {
      setShowPopularSchoolsCard(false);
      setSelectedCard("schools");
    } else if (showDrukpaKagyuCard) {
      setShowDrukpaKagyuCard(false);
      setSelectedCard("schools");
    } else if (selectedCard) {
      setSelectedCard(null);
    } else if (showCards) {
      setShowCards(false);
      setShowIntroduction(true);
    }
  };

  const handleHomeClick = () => {
    setShowCards(true);
    resetView();
  };

  const isBlueCard =
    showIntroduction ||
    showPopularSchoolsCard ||
    showPopularSchoolsImgCard ||
    showDrukpaKagyuCard;
  const nameCardBackground = showCards
    ? "#E6C3A6"
    : isBlueCard
    ? "#C9D7EE"
    : selectedCard
    ? "#BD6C36"
    : "#384E63";
  const nameCardColor = showCards
    ? "#9E501A"
    : isBlueCard
    ? "#2B455D"
    : selectedCard
    ? "#FCD7C2"
    : "white";

  const paraSize =
    language === BHUTAN
      ? showCards || selectedCard || showIntroduction
        ? "13px"
        : "18px"
      : showCards || selectedCard || showIntroduction
      ? "15px"
      : "20px";
  const fontSize =
    language === BHUTAN
      ? showCards || selectedCard || showIntroduction
        ? "15px"
        : "10px"
      : showCards || selectedCard || showIntroduction
      ? "15px"
      : "18px";

  useEffect(() => {
    if (selectedCard) {
      setShowIntroduction(false);
    }
  }, [selectedCard]);

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
          <NameCard
            cardName={TIBETAN_INFORMATION[language].title}
            width="220px"
            height="90px"
            paraSize={paraSize}
            fontSize={fontSize}
            year={
              showCards || selectedCard || showIntroduction
                ? "1200-1800"
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
          <div className={styles.TibetanIntroCard}>
            <Introduction language={language} showIntro={showIntroduction} />
          </div>
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="55.3%"
            top="63%"
            onClick={showTibetanCards}
            background="#2B455D"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="43.8%"
            top="28%"
            height="65px"
          />
        </>
      )}

      {showCards && (
        <div>
          <TibetanCards
            isFadingOut={isFadingOut}
            language={language}
            onCardClick={handleCardClick}
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            background="#523019"
            left="50.5%"
            top="61%"
          />
        </div>
      )}

      {selectedCard && (
        <div>
          {selectedCard === "arrival" && (
            <div className={styles.ArrivalCard}>
              <Arrival language={language} showIntro={true} />
              <LanguageIcon
                onClick={toggleLanguage}
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="46.8%"
                top="33%"
                height="55px"
                background="#7D431C"
              />
              <HomeIcon
                showIcons={showIcons}
                left="46.5%"
                top="23%"
                background="#8F4110"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
              <NextIcon
                showIcons={showIcons}
                left="56%"
                top="62%"
                onClick={showSchoolsCards}
                background="#8F4110"
                color="#FFDFC3"
              />
            </div>
          )}

          {selectedCard === "schools" && (
            <div className={styles.SchoolsCard}>
              <SchoolsCard
                language={language}
                showIntro={true}
                onPopularSchoolsClick={showPopularSchools}
                onDrukpaKagyuClick={showDrukpaKagyu}
              />
              <LanguageIcon
                onClick={toggleLanguage}
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="46.2%"
                top="44%"
                height="55px"
                background="#7D431C"
              />
              <HomeIcon
                showIcons={showIcons}
                left="45.8%"
                top="33%"
                background="#8F4110"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
            </div>
          )}
        </div>
      )}

      {showPopularSchoolsCard && (
        <div className={styles.PopularSchoolsCard}>
          <PopularSchoolsCard
            language={language}
            showIntro={true}
            onPopularSchoolsImgClick={showPopularSchoolsImg}
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="40.8%"
            top="42%"
            height="55px"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="40.7%"
            top="32%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="40.7%"
            top="20%"
            height="80px"
            marginTop="28px"
          />
        </div>
      )}

      {showPopularSchoolsImgCard && (
        <>
          <div className={styles.KurjeLhakhangTemplesImgContainer}>
            <div className={styles.KurjeLhakhangTemplesImg1}>
              <img src={popularImg1} alt="palaceImg1" />
            </div>

            <div className={styles.KurjeLhakhangTemplesImg12}>
              <img src={popularImg13} alt="palaceImg1" />
            </div>

            <div className={styles.KurjeLhakhangTemplesImg13}>
              <img src={popularImg12} alt="palaceImg1" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.KurjeLhakhangTemplesImg2}>
                <img src={popularImg2} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg3}>
                <img src={popularImg3} alt="palaceImg1" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.KurjeLhakhangTemplesImg4}>
                <img src={popularImg4} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg5}>
                <img src={popularImg5} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg6}>
                <img src={popularImg6} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg7}>
                <img src={popularImg7} alt="palaceImg1" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.KurjeLhakhangTemplesImg8}>
                <img src={popularImg8} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg9}>
                <img src={popularImg9} alt="palaceImg1" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.KurjeLhakhangTemplesImg10}>
                <img src={popularImg10} alt="palaceImg1" />
              </div>
              <div className={styles.KurjeLhakhangTemplesImg11}>
                <img src={popularImg11} alt="palaceImg1" />
              </div>
            </div>
          </div>

          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            left="45.9%"
            top="39%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="45.3%"
            top="28%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="45.3%"
            top="15%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}

      {showDrukpaKagyuCard && (
        <>
          <div className={styles.DrukpaKagyuCard}>
            <DrukpaKagyu
              language={language}
              showIntro={true}
              onDrugpaKagyuImgClick={showDrugpaKagyuImg}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="41.9%"
            top="42%"
            height="55px"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="41.8%"
            top="31%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="41.8%"
            top="19%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}

      {showDrugpaKagyuImgCard && (
        <>
          <div className={styles.KurjeLhakhangTemplesImgContainer}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg1}>
                <img src={DrugpaKagyuImg1} alt="palaceImg1" />
              </div>
              <div className={styles.DrugpaKagyuImg2}>
                <img src={DrugpaKagyuImg2} alt="palaceImg1" />
              </div>
            </div>

            <div className={styles.DrugpaKagyuImg3}>
              <img src={DrugpaKagyuImg3} alt="palaceImg1" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg4}>
                <img src={DrugpaKagyuImg4} alt="palaceImg1" />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className={styles.DrugpaKagyuImg5}>
                  <img src={DrugpaKagyuImg5} alt="palaceImg1" />
                </div>
                <div className={styles.DrugpaKagyuImg6}>
                  <img src={DrugpaKagyuImg6} alt="palaceImg1" />
                </div>
              </div>
              <div className={styles.DrugpaKagyuImg7}>
                <img src={DrugpaKagyuImg7} alt="palaceImg1" />
              </div>
              <div style={{ display: "flex" }}>
                <div className={styles.DrugpaKagyuImg8}>
                  <img src={DrugpaKagyuImg8} alt="palaceImg1" />
                </div>
                <div className={styles.DrugpaKagyuImg9}>
                  <img src={DrugpaKagyuImg9} alt="palaceImg1" />
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg10}>
                <img src={DrugpaKagyuImg10} alt="palaceImg1" />
              </div>
              <div className={styles.DrugpaKagyuImg11}>
                <img src={DrugpaKagyuImg11} alt="palaceImg1" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg12}>
                <img src={DrugpaKagyuImg12} alt="palaceImg1" />
              </div>
              <div className={styles.DrugpaKagyuImg13}>
                <img src={DrugpaKagyuImg13} alt="palaceImg1" />
              </div>
            </div>

            <div className={styles.DrugpaKagyuImg14}>
              <img src={DrugpaKagyuImg14} alt="palaceImg1" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg15}>
                <img src={DrugpaKagyuImg15} alt="palaceImg1" />
              </div>
              <div className={styles.DrugpaKagyuImg16}>
                <img src={DrugpaKagyuImg16} alt="palaceImg1" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.DrugpaKagyuImg17}>
                <img src={DrugpaKagyuImg17} alt="palaceImg1" />
              </div>
              <div className={styles.DrugpaKagyuImg18}>
                <img src={DrugpaKagyuImg18} alt="palaceImg1" />
              </div>
            </div>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            left="44.7%"
            top="42%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="44.1%"
            top="31%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="44.1%"
            top="19%"
            height="80px"
            marginTop="28px"
          />
        </>
      )}
    </motion.div>
  );
};

export default TibetanTwo;
