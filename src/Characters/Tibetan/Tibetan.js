import React, { useEffect, useState } from "react";
import styles from "./Tibetan.module.css";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
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
import PopularSchoolsCard from "./Cards/SchoolsCard/PopularSchoolsCard/PopularSchoolsCard";
import DrukpaKagyu from "./Cards/SchoolsCard/DrukpaKagyu/DrukpaKagyu";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import CloseIcon from "../../components/Card/Icons/CloseIcon/CloseIcon";
import { BHUTAN, ENGLISH } from "../../constants/languages/Language";
import PopularSchoolCardImgs from "./Cards/SchoolsCard/PopularSchoolsCard/PopularSchoolCardImgs/PopularSchoolCardImgs";
import DrukpaKagyuImgs from "./Cards/SchoolsCard/DrukpaKagyu/DrukpaKagyuImgCard/DrukpaKagyuImgs";
import CharacterAnimation from "../../CharacterAnimations/AnimationRender";

const Tibetan = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showPopularSchoolsCard, setShowPopularSchoolsCard] = useState(false);
  const [showDrukpaKagyuCard, setShowDrukpaKagyuCard] = useState(false);
  const [showPopularSchoolsImgCard, setShowPopularSchoolsImgCard] =
    useState(false);
  const [showDrugpaKagyuImgCard, setShowDrugpaKagyuImgCard] = useState(false);
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

  const handleCardOrImageClick = () => {
    setLanguageChanging(false);
    setIsVisible(true);
    setLanguage(ENGLISH);
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
      setLanguageChanging(true);
    } else if (showIntroduction) {
      setShowIntroduction(false);
      setShowYearText(true);
      setLanguageChanging(true);
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
    setLanguageChanging(true);
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
    setShowYearText(false);
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
    setSelectedCard(null);
    setShowIntroduction(false);
    setShowPopularSchoolsCard(false);
    setShowDrukpaKagyuCard(false);
    setShowPopularSchoolsImgCard(false);
    setShowDrugpaKagyuImgCard(false);
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

  useEffect(() => {
    if (selectedCard) {
      setShowIntroduction(false);
    }
  }, [selectedCard]);

  return (
    <div className={styles.TibetanContainer}>
      <AnimatePresence>
        {showYearText && (
          <motion.div
            className={styles.TibetanText}
            initial={false} // Prevent initial animation on first mount
            exit={{ opacity: 0, x: 150 }} // Fade out on exit
            transition={{ duration: 3 }}
          >
            <YearText BornYear="1200" Endyear="-1800" fontSize="118px" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.tibetanImage} onClick={handleCardOrImageClick}>
        {/* <img src={tibetan} alt="Pema Lingpa" /> */}
        <div  className={styles.tibetanImage}>
        <CharacterAnimation characterName="tibetan" />
        </div>
      </div>

      <div
        className={styles.tibetanNameCardContainer}
        onClick={handleCardOrImageClick}
      >
        <NameCard
          cardName={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 2.5 }}
            >
              {TIBETAN_INFORMATION[language].nameCardTitleFirst}
            </motion.div>
          }
          cardNameTwo={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 2.5 }}
            >
              {TIBETAN_INFORMATION[language].nameCardTitleSecond}{" "}
            </motion.div>
          }
          width="255px"
          height="95px"
          paraSize="15px"
          fontSize={language === BHUTAN ? "1.5rem" : "1.25rem"}
          year={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 2.5 }}
            >
              {showCards || selectedCard || showIntroduction
                ? "1200-1800"
                : undefined}
            </motion.div>
          }
          paraColor={nameCardColor}
          background={nameCardBackground}
          color={nameCardColor}
        />
      </div>

      <AnimatePresence>
        {showIntroduction && (
          <>
            <div className={styles.TibetanIntroCard}>
              <Introduction language={language} showIntro={showIntroduction} />
            </div>
            <NextIcon
              showIcons={showIcons}
              whiteImage={true}
              left="56%"
              top="85%"
              onClick={showTibetanCards}
              background="#2B455D"
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              left="44.3%"
              top="78%"
              height="65px"
            />
            <CloseIcon
              left="43.7%"
              top="74%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCards && (
          <div>
            <TibetanCards
              showCards={true}
              language={language}
              onCardClick={handleCardClick}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              background="#523019"
              left="49.5%"
              top="81.5%"
            />
            <CloseIcon
              left="48.8%"
              top="77.5%"
              background="#523019"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCard === "arrival" && (
          <div className={styles.ArrivalCard}>
            <Arrival language={language} showIntro={true} />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="47.2%"
              top="79.7%"
              height="55px"
              background="#7D431C"
            />
            <HomeIcon
              showIcons={showIcons}
              left="46.5%"
              top="75.6%"
              background="#8F4110"
              onClick={handleHomeClick}
            />
            <NextIcon
              showIcons={showIcons}
              left="56.7%"
              top="85.5%"
              onClick={showSchoolsCards}
              background="#8F4110"
              color="#FFDFC3"
            />
            <CloseIcon
              showIcons={showIcons}
              left="46.5%"
              top="71.5%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedCard === "schools" && (
          <div className={styles.SchoolsCard}>
            <SchoolsCard
              language={language}
              showIntro={true}
              onPopularSchoolsClick={showPopularSchools}
              onDrukpaKagyuClick={showDrukpaKagyu}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="46.4%"
              top="83%"
              height="55px"
              background="#7D431C"
            />
            <HomeIcon
              showIcons={showIcons}
              left="45.8%"
              top="79%"
              background="#8F4110"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
            <CloseIcon
              showIcons={showIcons}
              left="45.8%"
              top="75%"
              background="#8F4110"
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopularSchoolsCard && (
          <div className={styles.PopularSchoolsCard}>
            <PopularSchoolsCard
              language={language}
              showIntro={true}
              onPopularSchoolsImgClick={showPopularSchoolsImg}
            />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              margin="15px"
              iconWidth="25px"
              IconHeight="25px"
              height="50px"
              width="55px"
              left="41.3%"
              top="82%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="40.7%"
              top="78%"
              whiteImage={true}
              onClick={handleHomeClick}
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="40.7%"
              top="74%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="40.7%"
              top="70%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopularSchoolsImgCard && (
          <>
            {/* <div
            className={styles.KurjeLhakhangTemplesImgContainer}
            style={{
              position: "relative",
              transition: "opacity 0.3s ease",
              backgroundColor: enlargedImage.src
                ? "rgba(0, 0, 0, 0.7)"
                : "transparent", // Only apply black opacity when enlarged
              opacity: enlargedImage.src ? 0.4 : 1, // Adjust opacity effect only when enlarged
            }}
          >
            {images.map((img, index) => (
              <div className={img.className} key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => handleImageClick(img.enlargeSrc, index, true)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div> */}
            <PopularSchoolCardImgs />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              margin="15px"
              iconWidth="25px"
              IconHeight="25px"
              height="50px"
              width="55px"
              left="45.9%"
              top="79.8%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="45.3%"
              top="75.6%"
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
              top="71.5%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="45.3%"
              top="67.5%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
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
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              iconWidth="25px"
              IconHeight="25px"
              left="42.4%"
              top="83%"
              height="55px"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="41.8%"
              top="79%"
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
              top="75%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="41.8%"
              top="71%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDrugpaKagyuImgCard && (
          <>
            {/* <div
            className={styles.KurjeLhakhangTemplesImgContainer}
            style={{
              position: "relative",
              transition: "opacity 0.3s ease",
              backgroundColor: enlargedImage.src
                ? "rgba(0, 0, 0, 0.7)"
                : "transparent", // Only apply black opacity when enlarged
              opacity: enlargedImage.src ? 0.4 : 1, // Adjust opacity effect only when enlarged
            }}
          >
            {drukpaKagyuImages.map((img, index) => (
              <div className={img.className} key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => handleImageClick(img.enlargeSrc, index, false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div> */}
            <DrukpaKagyuImgs />
            <LanguageIcon
              language={language}
              onClick={toggleLanguage}
              showIcons={showIcons}
              margin="15px"
              iconWidth="25px"
              IconHeight="25px"
              height="50px"
              width="55px"
              left="44.7%"
              top="80.9%"
              whiteImage={true}
            />
            <HomeIcon
              showIcons={showIcons}
              left="44.1%"
              top="77%"
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
              top="73%"
              height="80px"
              marginTop="28px"
            />
            <CloseIcon
              left="44.1%"
              top="69%"
              showIcons={showIcons}
              onClick={handleCardOrImageClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tibetan;
