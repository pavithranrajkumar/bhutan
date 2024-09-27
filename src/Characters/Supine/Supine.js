import React, { useState } from "react";
import styles from "./Supine.module.css";
import { motion } from "framer-motion";
import supine from "../../assests/Supine/SupineDemoness.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import { SUPINE_INFORMATION } from "../../constants/Characters/Supine";
import Introduction from "./Cards/Introduction/Introduction";
import NextIcon from "../../components/Card/Icons/NextIcon/NextIcon";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import SupineCards from "./Cards/SupineCards/SupineCards";
import ReligiousCard from "./Cards/ReligiousCard/ReligiousCard";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import HimalayanCard from "./Cards/HimalayanCard/HimalayanCard";
import BhutanCard from "./Cards/BhutanCard/BhutanCard";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import JamBayCard from "./Cards/JamBayCard/JamBayCard";
import KyichuCard from "./Cards/KyichuCard/KyichuCard";
import JambayImg1 from "../../assests/Supine/JambayCard/Imgs/JambayPhotoFrameMain1.png";
import JambayImg2 from "../../assests/Supine/JambayCard/Imgs/Jambay2.png";
import JambayImg3 from "../../assests/Supine/JambayCard/Imgs/Jambay3.png";
import JambayImg4 from "../../assests/Supine/JambayCard/Imgs/Jambay4.png";
import KyichuImg1 from "../../assests/Supine/KyichuImgs/Kyichu1.png";
import KyichuImg2 from "../../assests/Supine/KyichuImgs/Kyichu2.png";
import KyichuImg3 from "../../assests/Supine/KyichuImgs/Kyichu3.png";
import KyichuImg4 from "../../assests/Supine/KyichuImgs/Kyichu4.png";

const Supine = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);
  const [showReligiousCard, setShowReligiousCard] = useState(false);
  const [showHimalayanCard, setShowHimalayanCard] = useState(false);
  const [showBhutanCard, setShowBhutanCard] = useState(false);
  const [showJamBayImages, setShowJamBayImages] = useState(false);
  const [showKyichuImages, setShowKyichuImages] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };

  const handleCardOrImageClick = () => {
    if (
      showCards ||
      selectedCard ||
      showHimalayanCard ||
      showBhutanCard ||
      showReligiousCard ||
      showJamBayImages ||
      showKyichuImages
    ) {
      setShowCards(false);
      setShowHimalayanCard(false);
      setShowBhutanCard(false);
      setShowReligiousCard(false);
      setSelectedCard(null);
      setShowJamBayImages(false);
      setShowKyichuImages(false);
    } else {
      setShowYearText(false);
      setShowIntroduction(true);
      setShowIcons(true);
    }
  };

  const showSupineCards = () => {
    setShowIntroduction(false);
    setShowCards(true);
  };

  const handleReligiousCardClick = () => {
    setShowCards(false);
    setShowReligiousCard(true);
  };

  const handleHimalayanClick = () => {
    setShowHimalayanCard(true);
    setShowReligiousCard(false);
  };

  const handleBhutanClick = () => {
    setShowBhutanCard(true);
    setShowReligiousCard(false);
  };

  const handleJamBayClick = () => {
    setSelectedCard("jamBay");
    setShowBhutanCard(false);
  };

  const handleKyichuClick = () => {
    setSelectedCard("kyichu");
    setShowBhutanCard(false);
  };

  const handleJamBayImageClick = () => {
    setShowJamBayImages(true);
    setSelectedCard(null);
  };

  const handleKyichuImageClick = () => {
    setShowKyichuImages(true);
    setSelectedCard(null);
  };

  const handleKyichuImagesCardClick = () => {
    setSelectedCard("jamBay");
    setShowKyichuImages(false);
  };

  const handleJamBayImagesCardClick = () => {
    setSelectedCard("kyichu");
    setShowJamBayImages(false);
  };

  const handlePreviousClick = () => {
    if (showKyichuImages) {
      setShowKyichuImages(false);
      setSelectedCard("kyichu");
    } else if (showJamBayImages) {
      setShowJamBayImages(false);
      setSelectedCard("jamBay");
    } else if (selectedCard === "kyichu") {
      setSelectedCard(null);
      setShowBhutanCard(true);
    } else if (selectedCard === "jamBay") {
      setSelectedCard(null);
      setShowBhutanCard(true);
    } else if (showBhutanCard) {
      setShowBhutanCard(false);
      setShowReligiousCard(true);
    } else if (showHimalayanCard) {
      setShowHimalayanCard(false);
      setShowReligiousCard(true);
    } else if (showReligiousCard) {
      setShowReligiousCard(false);
      setShowCards(true);
    } else if (showCards) {
      setShowCards(false);
      setShowIntroduction(true);
    }
  };

  const handleHomeClick = () => {
    setShowYearText(true);
    setShowIntroduction(false);
    setShowCards(true);
    setSelectedCard(null);
    setShowReligiousCard(false);
    setShowHimalayanCard(false);
    setShowBhutanCard(false);
    setShowJamBayImages(false);
    setShowKyichuImages(false);
  };

  const isBlueCard = showIntroduction || showHimalayanCard || showBhutanCard;

  const isGreenCard =
    showJamBayImages ||
    showKyichuImages ||
    selectedCard === "jambay" ||
    selectedCard === "kyichu";

  const nameCardBackground = showCards
    ? "#FFC571"
    : isGreenCard
    ? "#E4931D"
    : isBlueCard
    ? "#E5E7D5"
    : "#384E63";

  const nameCardColor = showCards
    ? "#A06611"
    : isGreenCard
    ? "#3A3C25"
    : isBlueCard
    ? "#2B455D"
    : "#2B455D";

  const nameParaColor = showCards
    ? "#A06611"
    : isGreenCard
    ? "#3A3C25"
    : isBlueCard
    ? "#2B455D"
    : "#2B455D";

  return (
    <motion.div
      className={styles.SupineContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {showYearText && (
        <motion.div
          className={styles.SupineText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <YearText
            BornYear="800"
            Endyear="-900"
            fontSize="118px"
            marginLeft="40px"
          />
        </motion.div>
      )}
      <motion.div
        className={styles.SupineImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        onClick={handleCardOrImageClick}
      >
        <img src={supine} alt="Pema Lingpa" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={styles.SupineNameCardContainer}
          onClick={handleCardOrImageClick}
        >
          {!showIntroduction && !selectedCard ? (
            <>
              <NameCard
                // cardName={SUPINE_INFORMATION[language].title}
                cardName="SUPINE"
                subCardname="DEMONESS"
                background="#384E63"
                color="white"
                width="250px"
                height="75px"
                fontSize="15px"
                subCardnameFontSize="15px"
                subCardnameMarginLeft="130px"
              />
            </>
          ) : (
            <>
              <NameCard
                // cardName={SUPINE_INFORMATION[language].title}
                cardName="SUPINE"
                subCardname="DEMONESS"
                width="250px"
                height="80px"
                fontSize="15px"
                year="1200-1800"
                paraColor={nameParaColor}
                paraSize="13px"
                subCardnameFontSize="15px"
                subCardnameMarginLeft="125px"
                background={nameCardBackground}
                color={nameCardColor}
              />
            </>
          )}
        </div>
      </motion.div>

      {showIntroduction && (
        <>
          <div className={styles.SupineIntroduction}>
            <Introduction language={language} showIntro={showIntroduction} />
          </div>
          <NextIcon
            showIcons={showIcons}
            whiteImage={true}
            left="17%"
            top="86%"
            onClick={showSupineCards}
            background="#2B455D"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="5%"
            top="75%"
            height="65px"
          />
        </>
      )}

      {showCards && (
        <div>
          <SupineCards
            isFadingOut={isFadingOut}
            language={language}
            onCardClick={handleReligiousCardClick}
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            background="#3A3C25"
            left="16.9%"
            top="81.6%"
          />
        </div>
      )}

      {showReligiousCard && (
        <>
          <div className={styles.ReligiousCard}>
            <ReligiousCard
              language={language}
              showIntro={true}
              onHimalayanClick={handleHimalayanClick}
              onBhutanClick={handleBhutanClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            iconWidth="25px"
            IconHeight="25px"
            left="4.8%"
            top="86%"
            height="55px"
            background="#3A3C25"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            background="#555835"
            left="4.4%"
            top="82.5%"
            height="70px"
            width="80px"
            margin="25px"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showHimalayanCard && (
        <>
          <div className={styles.HimalayanCard}>
            <HimalayanCard language={language} showIntro={true} />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            iconWidth="25px"
            IconHeight="25px"
            left="4.8%"
            top="86%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            left="4.7%"
            top="81.5%"
            height="80px"
            margin="25px"
          />
        </>
      )}
      {showBhutanCard && (
        <>
          <div className={styles.BhutanCard}>
            <BhutanCard
              showIntro={true}
              language={language}
              onJamBayClick={handleJamBayClick}
              onKyichuClick={handleKyichuClick}
            />
            <LanguageIcon
              onClick={toggleLanguage}
              showIcons={showIcons}
              whiteImage={true}
              iconWidth="25px"
              IconHeight="25px"
              left="4.8%"
              top="83.5%"
              height="55px"
            />
            <PreviousIcon
              onClick={handlePreviousClick}
              showIcons={showIcons}
              left="4.7%"
              top="76.1%"
              height="80px"
              margin="25px"
            />
            <HomeIcon
              showIcons={showIcons}
              whiteImage={true}
              left="4.7%"
              top="80%"
              height="70px"
              width="80px"
              margin="25px"
              onClick={handleHomeClick}
            />
          </div>
        </>
      )}

      {selectedCard === "jamBay" && !showJamBayImages && (
        <>
          <div className={styles.JamBayCard}>
            <JamBayCard
              showIntro={true}
              language={language}
              onJamBayCardImageClick={handleJamBayImageClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="2.5%"
            top="77.5%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="2.2%"
            top="70.1%"
            height="80px"
            background="#555835"
            margin="25px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="2.2%"
            top="74%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showJamBayImages && (
        <>
          <div className={styles.JamBayImages}>
            <div className={styles.palaceImg1}>
              <img src={JambayImg1} alt="palaceImg1" />
            </div>
            <div className={styles.palaceImg2}>
              <img src={JambayImg2} alt="palaceImg2" />
            </div>
            <div className={styles.palaceImg3}>
              <img src={JambayImg3} alt="palaceImg3" />
            </div>
            <div className={styles.palaceImg4}>
              <img src={JambayImg4} alt="palaceImg4" />
            </div>
          </div>
          <div
            className={styles.JamBayImagesCard}
            onClick={handleJamBayImagesCardClick}
          >
            <p>KYICHU LHAKHANG</p>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="4.4%"
            top="78.5%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="4%"
            top="71%"
            height="80px"
            background="#555835"
            margin="25px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="4%"
            top="75%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}

      {selectedCard === "kyichu" && (
        <>
          <div className={styles.KyichuCard}>
            <KyichuCard
              showIntro={true}
              language={language}
              onKyichuCardImageClick={handleKyichuImageClick}
            />
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="2.5%"
            top="80%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="2.2%"
            top="72.6%"
            height="80px"
            background="#555835"
            margin="25px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="2.2%"
            top="76.5%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}

      {showKyichuImages && (
        <>
          <div className={styles.JamBayImages}>
            <div className={styles.KyichuImg1}>
              <img src={KyichuImg1} alt="palaceImg1" />
            </div>
            <div className={styles.KyichuImg2}>
              <img src={KyichuImg2} alt="palaceImg2" />
            </div>
            <div className={styles.KyichuImg3}>
              <img src={KyichuImg3} alt="palaceImg3" />
            </div>
            <div className={styles.KyichuImg4}>
              <img src={KyichuImg4} alt="palaceImg4" />
            </div>
          </div>
          <div
            className={styles.KyichuImagesCard}
            onClick={handleKyichuImagesCardClick}
          >
            <p>JAMBAY LHAKHANG</p>
          </div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            supine={true}
            background="#3A3C25"
            iconWidth="25px"
            IconHeight="25px"
            left="4.4%"
            top="78.5%"
            height="55px"
          />
          <PreviousIcon
            onClick={handlePreviousClick}
            showIcons={showIcons}
            color="#D9D9D9"
            left="4%"
            top="71%"
            height="80px"
            background="#555835"
            margin="25px"
          />
          <HomeIcon
            showIcons={showIcons}
            supine={true}
            left="4%"
            top="75%"
            height="70px"
            width="80px"
            margin="25px"
            background="#555835"
            onClick={handleHomeClick}
          />
        </>
      )}
    </motion.div>
  );
};

export default Supine;
