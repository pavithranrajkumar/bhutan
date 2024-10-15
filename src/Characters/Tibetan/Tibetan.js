import React, { useEffect, useState } from "react";
import styles from "./Tibetan.module.css";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import tibetan from "../../assests/Tibetan/Migrants.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import Introduction from "./Cards/Introduction/Introduction";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TibetanCards from "./Cards/TibetanCards/TibetanCards";
import { TIBETAN_INFORMATION } from "../../constants/Characters/Tibetan";
import Arrival from "./Cards/Arrival/Arrival";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import SchoolsCard from "./Cards/SchoolsCard/SchoolsCard";
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
import EnlargepopularImg1 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar1.png";
import EnlargepopularImg2 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar2.png";
import EnlargepopularImg3 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar3.png";
import EnlargepopularImg4 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar4.png";
import EnlargepopularImg5 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar5.png";
import EnlargepopularImg6 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar6.png";
import EnlargepopularImg7 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar7.png";
import EnlargepopularImg8 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar8.png";
import EnlargepopularImg9 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar9.png";
import EnlargepopularImg10 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar10.png";
import EnlargepopularImg11 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar11.png";
import EnlargepopularImg12 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar12.png";
import EnlargepopularImg13 from "../../assests/Tibetan/PopularSchools/EnlargeImg/Yagang Lhakhang, Mongar13.png";
import EnlargeDrukpaImg8 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg8.png";
import EnlargeDrukpaImg1 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg1.png";
import EnlargeDrukpaImg2 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg2.png";
import EnlargeDrukpaImg3 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg3.png";
import EnlargeDrukpaImg4 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg4.png";
import EnlargeDrukpaImg5 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg5.png";
import EnlargeDrukpaImg6 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg6.png";
import EnlargeDrukpaImg7 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg7.png";
import EnlargeDrukpaImg9 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg9.png";
import EnlargeDrukpaImg10 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg10.png";
import EnlargeDrukpaImg11 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg11.png";
import EnlargeDrukpaImg12 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg12.png";
import EnlargeDrukpaImg13 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg13.png";
import EnlargeDrukpaImg14 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg14.png";
import EnlargeDrukpaImg15 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg15.png";
import EnlargeDrukpaImg16 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg16.png";
import EnlargeDrukpaImg17 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg17.png";
import EnlargeDrukpaImg18 from "../../assests/Tibetan/Drukpakagyu/EnlargeImg/DrugpaImg18.png";

import { BHUTAN, ENGLISH } from "../../constants/languages/Language";

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
  const [showDrugpaKagyuImgCard, setShowDrugpaKagyuImgCard] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState({
    src: null,
    index: 0,
    isPopular: true,
  });

  const handleSwipe = (direction) => {
    const { index, isPopular } = enlargedImage;
    const nextIndex =
      direction === "left"
        ? (index + 1) % (isPopular ? images.length : drukpaKagyuImages.length)
        : (index - 1 + (isPopular ? images.length : drukpaKagyuImages.length)) %
          (isPopular ? images.length : drukpaKagyuImages.length);

    const nextImgSrc = isPopular
      ? images[nextIndex].enlargeSrc
      : drukpaKagyuImages[nextIndex].enlargeSrc;
    setEnlargedImage({ src: nextImgSrc, index: nextIndex, isPopular });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const images = [
    {
      src: popularImg1,
      enlargeSrc: EnlargepopularImg1,
      alt: "Image 1",
      className: styles.KurjeLhakhangTemplesImg1,
    },
    {
      src: popularImg2,
      enlargeSrc: EnlargepopularImg2,
      alt: "Image 2",
      className: styles.KurjeLhakhangTemplesImg2,
    },
    {
      src: popularImg3,
      enlargeSrc: EnlargepopularImg3,
      alt: "Image 3",
      className: styles.KurjeLhakhangTemplesImg3,
    },
    {
      src: popularImg4,
      enlargeSrc: EnlargepopularImg4,
      alt: "Image 4",
      className: styles.KurjeLhakhangTemplesImg4,
    },
    {
      src: popularImg5,
      enlargeSrc: EnlargepopularImg5,
      alt: "Image 5",
      className: styles.KurjeLhakhangTemplesImg5,
    },
    {
      src: popularImg6,
      enlargeSrc: EnlargepopularImg6,
      alt: "Image 6",
      className: styles.KurjeLhakhangTemplesImg6,
    },
    {
      src: popularImg7,
      enlargeSrc: EnlargepopularImg7,
      alt: "Image 7",
      className: styles.KurjeLhakhangTemplesImg7,
    },
    {
      src: popularImg8,
      enlargeSrc: EnlargepopularImg8,
      alt: "Image 8",
      className: styles.KurjeLhakhangTemplesImg8,
    },
    {
      src: popularImg9,
      enlargeSrc: EnlargepopularImg9,
      alt: "Image 9",
      className: styles.KurjeLhakhangTemplesImg9,
    },
    {
      src: popularImg10,
      enlargeSrc: EnlargepopularImg10,
      alt: "Image 10",
      className: styles.KurjeLhakhangTemplesImg10,
    },
    {
      src: popularImg11,
      enlargeSrc: EnlargepopularImg11,
      alt: "Image 11",
      className: styles.KurjeLhakhangTemplesImg11,
    },
    {
      src: popularImg12,
      enlargeSrc: EnlargepopularImg12,
      alt: "Image 12",
      className: styles.KurjeLhakhangTemplesImg12,
    },
    {
      src: popularImg13,
      enlargeSrc: EnlargepopularImg13,
      alt: "Image 13",
      className: styles.KurjeLhakhangTemplesImg13,
    },
  ];

  const drukpaKagyuImages = [
    {
      src: DrugpaKagyuImg1,
      enlargeSrc: EnlargeDrukpaImg1,
      alt: "Image 1",
      className: styles.DrugpaKagyuImg1,
    },
    {
      src: DrugpaKagyuImg2,
      enlargeSrc: EnlargeDrukpaImg2,
      alt: "Image 2",
      className: styles.DrugpaKagyuImg2,
    },
    {
      src: DrugpaKagyuImg3,
      enlargeSrc: EnlargeDrukpaImg3,
      alt: "Image 3",
      className: styles.DrugpaKagyuImg3,
    },
    {
      src: DrugpaKagyuImg4,
      enlargeSrc: EnlargeDrukpaImg4,
      alt: "Image 4",
      className: styles.DrugpaKagyuImg4,
    },
    {
      src: DrugpaKagyuImg5,
      enlargeSrc: EnlargeDrukpaImg5,
      alt: "Image 5",
      className: styles.DrugpaKagyuImg5,
    },
    {
      src: DrugpaKagyuImg6,
      enlargeSrc: EnlargeDrukpaImg6,
      alt: "Image 6",
      className: styles.DrugpaKagyuImg6,
    },
    {
      src: DrugpaKagyuImg7,
      enlargeSrc: EnlargeDrukpaImg7,
      alt: "Image 7",
      className: styles.DrugpaKagyuImg7,
    },
    {
      src: DrugpaKagyuImg8,
      enlargeSrc: EnlargeDrukpaImg8,
      alt: "Image 8",
      className: styles.DrugpaKagyuImg8,
    },
    {
      src: DrugpaKagyuImg9,
      enlargeSrc: EnlargeDrukpaImg9,
      alt: "Image 9",
      className: styles.DrugpaKagyuImg9,
    },
    {
      src: DrugpaKagyuImg10,
      enlargeSrc: EnlargeDrukpaImg10,
      alt: "Image 10",
      className: styles.DrugpaKagyuImg10,
    },
    {
      src: DrugpaKagyuImg11,
      enlargeSrc: EnlargeDrukpaImg11,
      alt: "Image 11",
      className: styles.DrugpaKagyuImg11,
    },
    {
      src: DrugpaKagyuImg12,
      enlargeSrc: EnlargeDrukpaImg12,
      alt: "Image 12",
      className: styles.DrugpaKagyuImg12,
    },
    {
      src: DrugpaKagyuImg13,
      enlargeSrc: EnlargeDrukpaImg13,
      alt: "Image 13",
      className: styles.DrugpaKagyuImg13,
    },
    {
      src: DrugpaKagyuImg14,
      enlargeSrc: EnlargeDrukpaImg14,
      alt: "Image 14",
      className: styles.DrugpaKagyuImg14,
    },
    {
      src: DrugpaKagyuImg15,
      enlargeSrc: EnlargeDrukpaImg15,
      alt: "Image 15",
      className: styles.DrugpaKagyuImg15,
    },
    {
      src: DrugpaKagyuImg16,
      enlargeSrc: EnlargeDrukpaImg16,
      alt: "Image 16",
      className: styles.DrugpaKagyuImg16,
    },
    {
      src: DrugpaKagyuImg17,
      enlargeSrc: EnlargeDrukpaImg17,
      alt: "Image 17",
      className: styles.DrugpaKagyuImg17,
    },
    {
      src: DrugpaKagyuImg18,
      enlargeSrc: EnlargeDrukpaImg18,
      alt: "Image 18",
      className: styles.DrugpaKagyuImg18,
    },
  ];

  const handleImageClick = (img, index, isPopular) => {
    setEnlargedImage({ src: img, index, isPopular });
  };

  const nextImage = () => {
    const { index, isPopular } = enlargedImage;
    const nextIndex = isPopular
      ? (index + 1) % images.length
      : (index + 1) % drukpaKagyuImages.length;

    const nextImgSrc = isPopular
      ? images[nextIndex].enlargeSrc
      : drukpaKagyuImages[nextIndex].enlargeSrc;
    setEnlargedImage({ src: nextImgSrc, index: nextIndex, isPopular });
  };

  const previousImage = () => {
    const { index, isPopular } = enlargedImage;
    const prevIndex = isPopular
      ? (index - 1 + images.length) % images.length
      : (index - 1 + drukpaKagyuImages.length) % drukpaKagyuImages.length;

    const prevImgSrc = isPopular
      ? images[prevIndex].enlargeSrc
      : drukpaKagyuImages[prevIndex].enlargeSrc;
    setEnlargedImage({ src: prevImgSrc, index: prevIndex, isPopular });
  };

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
      setEnlargedImage(false);
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
    setEnlargedImage(false);
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
    setEnlargedImage(false);
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
      setEnlargedImage(false);
      setShowPopularSchoolsCard(true);
    } else if (showDrugpaKagyuImgCard) {
      setShowDrugpaKagyuImgCard(false);
      setEnlargedImage(false);
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
            cardName={TIBETAN_INFORMATION[language].nameCardTitleFirst}
            cardNameTwo={TIBETAN_INFORMATION[language].nameCardTitleSecond}
            width="255px"
            height="90px"
            paraSize="15px"
            fontSize={language === BHUTAN ? "1.5rem" : "1.25rem"}
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
            left="55.8%"
            top="85.7%"
            onClick={showTibetanCards}
            background="#2B455D"
          />
          <LanguageIcon
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="44.2%"
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
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            background="#523019"
            left="49.5%"
            top="81.1%"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            margin="13px"
          />
        </div>
      )}

      {selectedCard && (
        <div>
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
                top="75.5%"
                height="55px"
                background="#7D431C"
              />
              <HomeIcon
                showIcons={showIcons}
                left="46.5%"
                top="71.5%"
                background="#8F4110"
                height="70px"
                width="80px"
                margin="25px"
                onClick={handleHomeClick}
              />
              <NextIcon
                showIcons={showIcons}
                left="56.7%"
                top="85.7%"
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
                language={language}
                onClick={toggleLanguage}
                showIcons={showIcons}
                iconWidth="25px"
                IconHeight="25px"
                left="46.4%"
                top="79.9%"
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
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            margin="15px"
            iconWidth="25px"
            IconHeight="25px"
            height="50px"
            width="55px"
            left="41.3%"
            top="79.8%"
            whiteImage={true}
          />
          <HomeIcon
            showIcons={showIcons}
            left="40.7%"
            top="75.9%"
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
            top="72%"
            height="80px"
            marginTop="28px"
          />
        </div>
      )}

      {showPopularSchoolsImgCard && (
        <>
          <div
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
          </div>

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
            language={language}
            onClick={toggleLanguage}
            showIcons={showIcons}
            iconWidth="25px"
            IconHeight="25px"
            left="42.5%"
            top="78.9%"
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
            marginTop="28px"
          />
        </>
      )}

      {showDrugpaKagyuImgCard && (
        <>
          <div
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
          </div>
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
        </>
      )}

      {enlargedImage.src && (
        <div className={styles.overlay} {...handlers}>
          <div
            className={`${styles.KurjeLhakhangTemplesEnlargeImg} ${styles.fadeIn}`}
          >
            <button
              onClick={() => setEnlargedImage({ ...enlargedImage, src: null })}
              style={{
                position: "absolute",
                top: -20,
                right: -30,
                cursor: "pointer",
              }}
            >
              <FaTimes size={30} className={styles.CloseIcon} />
            </button>
            <img
              src={enlargedImage.src}
              alt=""
              className={styles.enlargedImage}
              onError={() => console.error("Image failed to load.")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
              }}
            >
              {enlargedImage.index + 1} /{" "}
              {enlargedImage.isPopular
                ? images.length
                : drukpaKagyuImages.length}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Tibetan;
