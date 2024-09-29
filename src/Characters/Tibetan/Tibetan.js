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
import popularImg1 from "../../assests/Tibetan/PopularSchools/popularSchool1.png";
import popularImg2 from "../../assests/Tibetan/PopularSchools/popularSchool2.png";
import popularImg3 from "../../assests/Tibetan/PopularSchools/popularSchool3.png";
import popularImg4 from "../../assests/Tibetan/PopularSchools/popularSchool4.png";

const Tibetan = () => {
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

  const handleCardOrImageClick = () => {
    if (
      showCards ||
      selectedCard ||
      showDrukpaKagyuCard ||
      showPopularSchoolsCard ||
      showPopularSchoolsImgCard
    ) {
      setShowCards(false);
      setSelectedCard(null);
      setShowIntroduction(false);
      setShowDrukpaKagyuCard(false);
      setShowPopularSchoolsCard(false);
      setShowPopularSchoolsImgCard(false);
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

  const showTibetanCards = () => {
    setShowIntroduction(false);
    setShowCards(true);
  };

  const handleCardClick = (cardName) => {
    console.log("Card clicked:", cardName); // Add this log to verify
    setSelectedCard(cardName);
    setShowCards(false);
    setShowIntroduction(false);
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

  const handlePreviousClick = () => {
    if (showPopularSchoolsImgCard) {
      setShowPopularSchoolsImgCard(false);
      setShowPopularSchoolsCard(true);
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
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowPopularSchoolsCard(false);
    setShowDrukpaKagyuCard(false);
    setShowPopularSchoolsImgCard(false);
  };

  const nameCardStyles = {
    default: {
      background: "#384E63",
      color: "white",
    },
    introduction: {
      background: "#C9D7EE",
      color: "#2B455D",
    },
    arrival: {
      background: "#BD6C36",
      color: "#FFDFC3",
    },
    schools: {
      background: "#BD6C36",
      color: "#FFDFC3",
    },
    popularSchools: {
      background: "#C9D7EE",
      color: "#2B455D",
    },
    drukpaKagyu: {
      background: "#C9D7EE",
      color: "#2B455D",
    },
    showCards: {
      background: "#E6C3A6",
      color: "#9E501A",
    },
  };

  const getNameCardStyle = () => {
    if (showCards) {
      return nameCardStyles.showCards;
    }
    switch (selectedCard) {
      case "introduction":
        console.log("Introduction card selected"); // Debug log

        return nameCardStyles.introduction;
      case "arrival":
        console.log("Arrival card selected"); // Debug log

        return nameCardStyles.arrival;
      case "schools":
        console.log("Schools card selected"); // Debug log

        return nameCardStyles.schools;
      case "popularSchools":
        return nameCardStyles.popularSchools;
      case "drukpaKagyu":
        return nameCardStyles.drukpaKagyu;
      default:
        return nameCardStyles.default;
    }
  };
  console.log("Current Card Style:", getNameCardStyle());

  useEffect(() => {
    console.log("Current Card Style: ", getNameCardStyle());
  }, [selectedCard, showCards]);

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
                paraSize="13px"
                paraColor={getNameCardStyle().color}
                background={getNameCardStyle().background}
                color={getNameCardStyle().color}
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
            left="55.3%"
            top="85.7%"
            onClick={showTibetanCards}
            background="#2B455D"
          />
          <LanguageIcon
            showIcons={showIcons}
            whiteImage={true}
            left="43.8%"
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
            onCardClick={handleCardClick}
          />
          <LanguageIcon
            showIcons={showIcons}
            background="#523019"
            left="50.5%"
            top="85.2%"
          />
        </div>
      )}

      {selectedCard && (
        <div>
          {selectedCard === "arrival" && (
            <div className={styles.ArrivalCard}>
              <Arrival language={language} showIntro={true} />
              <LanguageIcon
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="46.8%"
                top="76.5%"
                height="55px"
                background="#7D431C"
              />
              <HomeIcon
                showIcons={showIcons}
                left="46.5%"
                top="73%"
                background="#8F4110"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
              <NextIcon
                showIcons={showIcons}
                left="56%"
                top="85.8%"
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
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="46.2%"
                top="79.5%"
                height="55px"
                background="#7D431C"
              />
              <HomeIcon
                showIcons={showIcons}
                left="45.8%"
                top="76%"
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
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="40.8%"
            top="76.5%"
            height="55px"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="40.7%"
            top="73%"
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
            top="69%"
            height="80px"
            margin="25px"
          />
        </div>
      )}

      {showPopularSchoolsImgCard && (
        <>
          <div className={styles.KurjeLhakhangTemplesImgContainer}>
            <div className={styles.KurjeLhakhangTemplesImg1}>
              <img src={popularImg1} alt="palaceImg1" />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg2}>
              <img src={popularImg2} alt="palaceImg2" />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg3}>
              <img src={popularImg3} alt="palaceImg3" />
            </div>
            <div className={styles.KurjeLhakhangTemplesImg4}>
              <img src={popularImg4} alt="palaceImg3" />
            </div>
          </div>
          <LanguageIcon
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="44.7%"
            top="81%"
            height="55px"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="44.6%"
            top="77.5%"
            height="70px"
            width="80px"
            margin="25px"
            whiteImage={true}
            onClick={handleHomeClick}
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="44.6%"
            top="73.6%"
            height="80px"
            margin="25px"
          />
        </>
      )}

      {showDrukpaKagyuCard && (
        <>
          <div className={styles.DrukpaKagyuCard}>
            <DrukpaKagyu language={language} showIntro={true} />
          </div>
          <LanguageIcon
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="41.9%"
            top="78.5%"
            height="55px"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="41.8%"
            top="75%"
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
            top="71%"
            height="80px"
            margin="25px"
          />
        </>
      )}
    </motion.div>
  );
};

export default Tibetan;
