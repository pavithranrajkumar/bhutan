import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./PemaLingpa.module.css";
import pemaLingpa from "../../assests/PemaLingpa.png";
import Card from "../../components/Card/Card";
import DrakpaGyalpos from "../../assests/DrakpaGyalpo.svg";
import Sangda from "../../assests/Sangda.svg";
import KuengaWangpo from "../../assests/KuengaWangpo.svg";
import DawaGyaltshen from "../../assests/DawaGyaltshen.svg";
import Tamshing from "../../assests/Tamshing.svg";
import Prakhar from "../../assests/Layer.svg";
import Kochung from "../../assests/Kochung.svg";
import Bidung from "../../assests/Bidung.svg";
import Kheri from "../../assests/Kheri.svg";
import Dungkar from "../../assests/Dungkar.svg";
import Tsakaling from "../../assests/Tsakaling.svg";
import Drophu from "../../assests/Drophu.svg";
import Drametse from "../../assests/Drametse.svg";
import Yagang from "../../assests/Yagang.svg";
import ComicBook from "../../assests/Burning Lake Cover Image.jpg";
import NaringDrag from "../../assests/Naring Drag Cover Image.jpg";
import KenchosumLhakhang from "../../assests/KenchosumLhakhang.svg";
import MonsTemples from "../../assests/StateCollapsed.jpg";
import MonsTemplesFrst from "../../assests/Photo Frame Main.svg";
import MonsTemplesScnd from "../../assests/Photo Frame.svg";
import MonsTemplesThrd from "../../assests/Photo Frame (1).svg";
import MonsTemplesFrth from "../../assests/Photo Frame (2).svg";
import MonsTemplesFvth from "../../assests/Photo Frame (3).svg";
import MonsTemplesSxth from "../../assests/Photo Frame (6).svg";
import MonsTemplesSvnth from "../../assests/Photo Frame (5).svg";
import BookOpen from "../../assests/Comic Book Open.jpg";
import PelingDanceVideo from "../../assests/Legacy/PelingDance.jpg";
import NameCard from "../../components/NameCard/NameCard";
import { PEMALINGPA, PEMALINGPAYEAR } from "../../constants/Names/Names";
import { PREMA_LINGPA_INFORMATION } from "../../constants/Characters/PremaLingpa";
import LanguageIcon from "../../components/Card/Icons/LanguageIcon/LanguageIcon";
import HomeIcon from "../../components/Card/Icons/HomeIcon/HomeIcon";
import PreviousIcon from "../../components/Card/Icons/PreviousIcon/PreviousIcon";
import PeilingVedio1 from "../../assests/Peiling/peilingVideo1.png";
import PeilingVedio2 from "../../assests/Peiling/peilingVideo2.png";
import NaringDragBook from "./BookAnimation/NaringDragBook/NaringDragBook";
import BurningLakeBook from "./BookAnimation/BurningLake";

const PemaLingpa = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [nameCardText, setNameCardText] = useState("PEMALINGPA");
  const [nameCardSubtitle, setNameCardSubtitle] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showHistoricDetails, setShowHistoricDetails] = useState(false);
  const [showLineageCard, setShowLineageCard] = useState(false);
  const [showRevelationsCard, setShowRevelationsCard] = useState(false);
  const [showLegacyCard, setShowLegacyCard] = useState(false);
  const [showFirstLevel, setShowFirstLevel] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [showNaringDragCard, setShowNaringDragCard] = useState(false);
  const [showBurningLakeCard, setShowBurningLakeCard] = useState(false);
  const [showMonstariesAndTemples, setShowMonstariesAndTemples] =
    useState(false);
  const [showMonstariesAndTemplesImgs, setShowMonstariesAndTemplesImgs] =
    useState(false);
  const [showPelingDance, setShowPelingDance] = useState(false);
  const [showNaringDragBook, setShowNaringDragBook] = useState(false);
  const [showBurningLakeBook, setShowBurningLakeBook] = useState(false);
  const [showNaringDragBookImage, setShowNaringDragBookImage] = useState(false);
  const [showBurningLakeBookImage, setShowBurningLakeBookImage] =
    useState(false);
  const [showPelingVideo, setShowPelingVideo] = useState(false);
  const [language, setLanguage] = useState("english");

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };

  const handleCardClick = () => {
    if (
      showDetails ||
      showCards ||
      showHistoricDetails ||
      showLineageCard ||
      showRevelationsCard ||
      showLegacyCard ||
      showBurningLakeCard ||
      showNaringDragCard ||
      showMonstariesAndTemples ||
      showMonstariesAndTemplesImgs ||
      showPelingDance ||
      showNaringDragBook ||
      showPelingVideo
    ) {
      resetCardVisibility();
    } else {
      startFadeIn();
    }
  };

  const handleHistoricCardClick = () => {
    fadeOutThen(() => {
      setShowHistoricDetails(true);
      setShowCards(false);
      setShowDetails(false);
      setShowIntro(true);
    });
  };

  const handleLineageCardClick = () => {
    fadeOutThen(() => {
      setShowHistoricDetails(false);
      setShowCards(false);
      setShowLineageCard(true);
      setShowIntro(true);
    });
  };

  const handleRevelationsCardClick = () => {
    fadeOutThen(() => {
      setShowHistoricDetails(false);
      setShowCards(false);
      setShowRevelationsCard(true);
      setShowIntro(true);
    });
  };

  const handleNaringDragCardClick = () => {
    setShowRevelationsCard(false); // Close Revelations card
    setShowBurningLakeBook(false); // Close Burning Lake Book (if applicable)
    setShowNaringDragCard((prev) => !prev); // Toggle Naring Drag card visibility
    setShowBurningLakeCard(false); // Close Burning Lake card when Naring Drag is clicked
  };

  const handleBurningLakeCardClick = () => {
    setShowRevelationsCard(false); // Close Revelations card
    setShowNaringDragBook(false); // Close Naring Drag Book (if applicable)
    setShowBurningLakeCard((prev) => !prev); // Toggle Burning Lake card visibility
    setShowNaringDragCard(false); // Close Naring Drag card when Burning Lake is clicked
  };

  const handleLegacyCardClick = () => {
    fadeOutThen(() => {
      setShowHistoricDetails(false);
      setShowCards(false);
      setShowLegacyCard(true);
      setShowIntro(true);
    });
  };

  // Other handlers
  const PelingCardClick = () => {
    setShowLegacyCard(false);
    setShowPelingVideo(false);
    setShowMonstariesAndTemples(true);
  };

  const PelingCardImageClick = () => {
    setShowMonstariesAndTemples(false);
    setShowMonstariesAndTemplesImgs(true);
  };

  const PelingDanceClick = () => {
    setShowMonstariesAndTemplesImgs(false);
    setShowLegacyCard(false);
    setShowPelingDance(true);
  };

  const PelingVideoClick = () => {
    setShowPelingDance(false);
    setShowPelingVideo(true);
  };

  const NaringDragBookClick = () => {
    setShowNaringDragCard(false);
    setShowNaringDragBook(true);
  };

  const BurningLakeBookClick = () => {
    setShowBurningLakeCard(false);
    setShowBurningLakeBook(true);
  };

  const handleNaringDragBook = () => {
    // Match this duration to the animation timing
  };

  const handleHeaderIconClick = () => {
    if (showHistoricDetails) {
      fadeOutThen(() => {
        setShowHistoricDetails(false);
        setShowLineageCard(true);
      });
    } else if (showDetails) {
      setShowDetails(false);
      setShowIntro(false);
      setShowCards(true);
    } else {
      toggleShowCards();
    }
  };

  const handleFooterIconClick = () => {
    if (
      showHistoricDetails ||
      showLineageCard ||
      showRevelationsCard ||
      showLegacyCard ||
      showNaringDragCard ||
      showBurningLakeCard ||
      showNaringDragBook ||
      showBurningLakeBook ||
      showMonstariesAndTemples ||
      showMonstariesAndTemplesImgs ||
      showPelingDance ||
      showPelingVideo
    ) {
      setShowHistoricDetails(false);
      setShowLineageCard(false);
      setShowRevelationsCard(false);
      setShowLegacyCard(false);
      setShowNaringDragCard(false);
      setShowBurningLakeCard(false);
      setShowBurningLakeBook(false);
      setShowNaringDragBook(false);
      setShowMonstariesAndTemples(false);
      setShowMonstariesAndTemplesImgs(false);
      setShowPelingDance(false);
      setShowPelingVideo(false);
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };

  const handlePreviousIconClick = () => {
    if (showMonstariesAndTemplesImgs) {
      setShowMonstariesAndTemplesImgs(false);
      setShowMonstariesAndTemples(true);
    } else if (showNaringDragBook) {
      setShowNaringDragBookImage(false);
      setShowNaringDragBook(false);
      setShowNaringDragCard(true);
    } else if (showBurningLakeBook) {
      setShowBurningLakeBookImage(false);
      setShowBurningLakeBook(false);
      setShowBurningLakeCard(true);
    } else if (showPelingVideo) {
      setShowPelingVideo(false);
      setShowPelingDance(true);
    }
  };

  const handleFamilyHeaderClick = () => {
    setShowFirstLevel((prev) => !prev);
  };

  const handleTreeCardClick = (cardName) => {
    setActiveCard(activeCard === cardName ? null : cardName);
  };

  const handleNaringDragBookImageClick = () => {
    toggleState(setShowNaringDragBookImage);
  };

  const handleBurningLakeImageClick = () => {
    toggleState(setShowBurningLakeBookImage);
  };

  const resetCardVisibility = () => {
    setShowDetails(false);
    setShowCards(false);
    setShowHistoricDetails(false);
    setShowLineageCard(false);
    setShowRevelationsCard(false);
    setShowLegacyCard(false);
    setShowBurningLakeCard(false);
    setShowNaringDragCard(false);
    setShowMonstariesAndTemples(false);
    setShowMonstariesAndTemplesImgs(false);
    setShowPelingDance(false);
    setShowNaringDragBook(false);
    setNameCardText("PEMALINGPA");
    setNameCardSubtitle("");
    setShowIntro(false);
    setShowIcons(false);
    setIsFadingOut(false);
  };

  const startFadeIn = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowDetails(true);
      setShowIntro(true);
      setShowIcons(true);
      setNameCardText("Pema Lingpa");
      setNameCardSubtitle("1450-1521");
      setIsFadingOut(false);
    }, 800);
  };

  const fadeOutThen = (callback) => {
    setIsFadingOut(true);
    setTimeout(() => {
      callback();
      setIsFadingOut(false);
    }, 500);
  };

  const toggleCardVisibility = (setShowCard, setHideCard) => {
    setHideCard(false);
    setShowCard((prev) => !prev);
  };

  const toggleShowCards = () => {
    setShowCards((prev) => !prev);
  };

  const toggleState = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <motion.div
      className={styles.pemaContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.pemaText}
        initial={{ opacity: 1 }}
        animate={{
          opacity:
            showDetails ||
            showCards ||
            showHistoricDetails ||
            showLineageCard ||
            showRevelationsCard ||
            showLegacyCard ||
            showNaringDragBook ||
            showNaringDragBookImage ||
            showNaringDragCard ||
            showBurningLakeBook ||
            showBurningLakeBookImage ||
            showBurningLakeCard
              ? 0
              : 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.pemaTextContainer}>
          <div className={styles.YearText}>1450</div>
          <div className={styles.YearText}>-1521</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.pemaImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img src={pemaLingpa} alt="Pema Lingpa" />
      </motion.div>

      <motion.div
        onClick={handleCardClick}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.NameCardContainer}>
          {nameCardSubtitle ? (
            <>
              <NameCard
                cardName={PREMA_LINGPA_INFORMATION[language].title}
                year={PEMALINGPAYEAR}
                background="#FFD9BC"
                color="#6A1F11"
              />
            </>
          ) : (
            <>
              <NameCard cardName={PEMALINGPA} />
            </>
          )}
        </div>
      </motion.div>

      {showDetails && (
        <>
          <Card
            title={PREMA_LINGPA_INFORMATION[language].introduction.title}
            content={PREMA_LINGPA_INFORMATION[language].introduction.content}
            showIntro={showIntro}
            language={language}
          />

          <motion.div
            className={styles.detailCardHeader}
            onClick={handleHeaderIconClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 5 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="60.5%"
          />
        </>
      )}

      {showCards && (
        <>
          <motion.div
            className={styles.cardsContainer}
            initial={{ opacity: 1 }}
            animate={{ opacity: isFadingOut ? 0 : 1 }} // Fade out effect
            transition={{ duration: 1 }} // Match this duration with the timeout in handleHistoricCardClick
          >
            <motion.div
              className={styles.HistoricCard}
              onClick={handleHistoricCardClick}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.CardsContainerText}>
                {PREMA_LINGPA_INFORMATION[language].historicBackground.title}
              </div>
            </motion.div>
            <motion.div
              className={styles.LineageCard}
              onClick={handleLineageCardClick}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.CardsContainerText}>
                {PREMA_LINGPA_INFORMATION[language].lineage.title}
              </div>
            </motion.div>
            <motion.div
              className={styles.RevelationsCard}
              onClick={handleRevelationsCardClick}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.CardsContainerText}>
                {PREMA_LINGPA_INFORMATION[language].revelations.title}
              </div>
            </motion.div>
            <motion.div
              className={styles.LegacyCard}
              onClick={handleLegacyCardClick}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.CardsContainerText}>
                {PREMA_LINGPA_INFORMATION[language].legacy.title}
              </div>
            </motion.div>
          </motion.div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="60%"
            top="92%"
            width="100px"
            height="100px"
            margin="30px"
          />
        </>
      )}

      {showHistoricDetails && (
        <>
          <Card
            title={PREMA_LINGPA_INFORMATION[language].historicBackground.title}
            content={
              PREMA_LINGPA_INFORMATION[language].historicBackground.content
            }
            showIntro={showIntro}
            language={language}
            backgroundColor="#FFD9BC"
            color="#380100"
            borderBottom="2px solid #6A1F11"
          />
          <motion.div
            className={styles.HistoricdetailCardHeader}
            onClick={handleHeaderIconClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.HistoricIcon}
            />
          </motion.div>
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="60.5%"
          />
        </>
      )}

      {showLineageCard && (
        <div>
          <Card
            title={PREMA_LINGPA_INFORMATION[language].lineage.title}
            content={PREMA_LINGPA_INFORMATION[language].lineage.content}
            width="470px"
            showIntro={showIntro}
            language={language}
            backgroundColor="#FFD9BC"
            color="#380100"
            borderBottom="2px solid #6A1F11"
          />
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="60.5%"
          />

          <div className={styles.FamilCard}>
            <div
              className={styles.FamilyHeader}
              onClick={handleFamilyHeaderClick}
            >
              <p>{PREMA_LINGPA_INFORMATION[language].title}</p>
            </div>

            {showFirstLevel && (
              <>
                {/* First level cards */}
                <div className={styles.SonsList}>
                  <div
                    className={`${styles.SonsTree} ${
                      activeCard === "DrakpaGyalpos" ? "" : styles.faded
                    }`}
                    onClick={() => handleTreeCardClick("DrakpaGyalpos")}
                  >
                    <div className={styles.DrakpaGyalpos}>
                      <img src={DrakpaGyalpos} alt="" />
                      <div className={styles.DrakpaGyalposCard}>
                        <p>Drakpa Gyalpo</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.SonsTree} ${
                      activeCard === "DawaGyaltshen" ? "" : styles.faded
                    }`}
                    onClick={() => handleTreeCardClick("DawaGyaltshen")}
                  >
                    <div className={styles.DawaGyaltshen}>
                      <img src={DawaGyaltshen} alt="" />
                      <div className={styles.DawaGyaltshenCard}>
                        <p>Dawa Gyaltshen</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.SonsTree} ${
                      activeCard === "KuengaWangpo" ? "" : styles.faded
                    }`}
                    onClick={() => handleTreeCardClick("KuengaWangpo")}
                  >
                    <div className={styles.KuengaWangpo}>
                      <img src={KuengaWangpo} alt="" />
                      <div className={styles.KuengaWangpoCard}>
                        <p>Kuenga Wangpo</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.SonsTree} ${
                      activeCard === "Sangda" ? "" : styles.faded
                    }`}
                    onClick={() => handleTreeCardClick("Sangda")}
                  >
                    <div className={styles.Sangda}>
                      <img src={Sangda} alt="" />
                      <div
                        className={styles.SangdaCard}
                        style={{ padding: "0.2vw" }}
                      >
                        <p>Sangda</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Containers for each card */}
                {activeCard === "DrakpaGyalpos" && (
                  <>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      onClick={() => handleTreeCardClick("DrakpaGyalpos")}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    ></motion.div>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    >
                      <div>
                        <div className={styles.VerticalLine}></div>
                        <div className={styles.SonsCard}>
                          <p>Sons</p>
                        </div>
                        <div className={styles.SonsHorizontalLine}></div>
                        <div className={styles.SonsVerticalLine}></div>
                        <div className={styles.DrakpaGyalposContainer}>
                          <div
                            className={styles.DrakpaGyalposVerticalLine}
                          ></div>
                          <div className={styles.ChoejeCard}>
                            <p>Choeje</p>
                          </div>
                          <div className={styles.ChoejeVerticalLine}></div>
                          <div className={styles.Tamshing}>
                            <img src={Tamshing} alt="" />
                            <div className={styles.TamshingCard}>
                              <p>Tamshing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {activeCard === "DawaGyaltshen" && (
                  <>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      onClick={() => handleTreeCardClick("DrakpaGyalpos")}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    ></motion.div>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    >
                      <div>
                        <div className={styles.VerticalLine}></div>
                        <div className={styles.SonsCard}>
                          <p>Sons</p>
                        </div>
                        <div
                          className={styles.DawaGyaltshenSonsVerticalLine}
                        ></div>
                        <div
                          className={styles.DawaGyaltshenSonsHorizontalLine}
                        ></div>
                        <div
                          className={styles.DawaGyaltshenDownSonsVerticalLine}
                        ></div>

                        <div className={styles.DawaGyaltshenCardContainer}>
                          <div
                            className={styles.DawaGyaltshenVerticalLine}
                          ></div>
                          <div className={styles.PrakharChoejeCard}>
                            <p>Choeje</p>
                          </div>
                          <div className={styles.PrakharVerticalLine}></div>
                          <div className={styles.Prakhar}>
                            <img src={Prakhar} alt="" />
                            <div className={styles.PrakharCard}>
                              <p>Prakhar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {activeCard === "KuengaWangpo" && (
                  <>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      onClick={() => handleTreeCardClick("DrakpaGyalpos")}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    ></motion.div>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 1.5 } }}
                    >
                      <div className={styles.DawaGyaltshenCardContainer}>
                        <div className={styles.VerticalLine}></div>
                        <div className={styles.SonsCard}>
                          <p>Sons</p>
                        </div>

                        <div
                          className={styles.KuengaWangpoSonsVerticalLine}
                        ></div>

                        <div
                          className={styles.KuengaWangpoSonsHorizontalLine}
                        ></div>
                        <div className={styles.KuengaWangpoVerticalLine}></div>
                        <div className={styles.KochungChoejeCard}>
                          <p>Choeje</p>
                        </div>
                        {/* <div className={styles.KochungChoejeVerticalLine}></div>
                        <div className={styles.KochungHorizontalLine}></div>
                        <div className={styles.KochungVerticalLine}></div>
                        <div className={styles.BidungVerticalLine}></div>
                        <div className={styles.KheriVerticalLine}></div>
                        <div className={styles.KheriVerticalLine2}></div>

                        <div className={styles.DungkarVerticalLine}></div>
                        <div className={styles.DungkarHorizontalLine}></div> */}

                        <div style={{ display: "flex" }}>
                          <div className={styles.Kochung}>
                            <img src={Kochung} alt="" />
                            <div className={styles.KochungCard}>
                              <p>Kochung</p>
                            </div>
                          </div>
                          <div className={styles.Bidung}>
                            <img src={Bidung} alt="" />
                            <div className={styles.BidungCard}>
                              <p>Bidung</p>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className={styles.Kheri}>
                            <img src={Kheri} alt="" />
                            <div className={styles.KheriCard}>
                              <p>Kheri</p>
                            </div>
                          </div>
                          <div className={styles.Dungkar}>
                            <img src={Dungkar} alt="" />
                            <div className={styles.DungkarCard}>
                              <p>Dungkar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {activeCard === "Sangda" && (
                  <>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      onClick={() => handleTreeCardClick("DrakpaGyalpos")}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 5 } }}
                    ></motion.div>
                    <motion.div
                      className={`${styles.SonsTree} ${
                        activeCard === "DrakpaGyalpos" ? "" : styles.faded
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeInOut}
                      transition={{ duration: 2, exit: { duration: 5 } }}
                    >
                      <div className={styles.SangdaCardContainer}>
                        <div className={styles.VerticalLine}></div>
                        <div className={styles.SonsCard}>
                          <p>Sons</p>
                        </div>
                        {/* <div className={styles.SangdaSonsHorizontalLine}></div>
                        <div className={styles.SangdaSonsVerticalLine}></div>

                        <div className={styles.SangdaVerticalLine}></div> */}
                        <div className={styles.SangdaSonsCard}>
                          <p>Choeje</p>
                        </div>
                        {/* <div className={styles.SangdaDownVerticalLine}></div>
                        <div className={styles.SangdaHorizontalLine}></div>
                        <div
                          className={styles.SangdaFrstSonsVerticalLine}
                        ></div>
                        <div
                          className={styles.SangdaScndSonsVerticalLine}
                        ></div>
                        <div
                          className={styles.SangdaThrdSonsVerticalLine}
                        ></div>
                        <div
                          className={styles.SangdaFrthSonsVerticalLine}
                        ></div> */}

                        <div className={styles.SangdaSonsContainer}>
                          <div className={styles.Tsakaling}>
                            <img src={Tsakaling} alt="" />
                            <div className={styles.TsakalingCard}>
                              <p>Tsakaling</p>
                            </div>
                          </div>
                          <div className={styles.Drophu}>
                            <img src={Drophu} alt="" />
                            <div className={styles.DrophuCard}>
                              <p>Drophu</p>
                            </div>
                          </div>
                          <div className={styles.Drametse}>
                            <img src={Drametse} alt="" />
                            <div className={styles.DrametseCard}>
                              <p>Drametse</p>
                            </div>
                          </div>
                          <div className={styles.Yagang}>
                            <img src={Yagang} alt="" />
                            <div className={styles.YagangCard}>
                              <p>Yagang</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {showRevelationsCard && (
        <>
          <Card
            width="470px"
            title={PREMA_LINGPA_INFORMATION[language].revelations.title}
            content={PREMA_LINGPA_INFORMATION[language].revelations.content}
            showIntro={showIntro}
            language={language}
            backgroundColor="#FFD9BC"
            color="#380100"
            borderBottom="2px solid #6A1F11"
          />
          <div className={styles.RevelationsSideCards}>
            <div
              className={styles.NaringDragCard}
              onClick={handleNaringDragCardClick}
            >
              <div className={styles.RevalationSideCardTextContainer}>
                <div className={styles.RevelationsSideCardsfrst}>
                  Revelations at
                </div>
                <div className={styles.RevelationsSideCardsScnd}>
                  {PREMA_LINGPA_INFORMATION[language].naringDrag.title}
                </div>
              </div>

              <img src={NaringDrag} alt="NaringDrag" />
              <div className={styles.NaringDragCardBookText}>
                NARING <span>DRAG</span>
              </div>
            </div>
            <div
              className={styles.BurningLakeCard}
              onClick={handleBurningLakeCardClick}
            >
              <div className={styles.RevalationSideCardTextContainer}>
                <div className={styles.RevelationsSideCardsfrst}>
                  Revelations at
                </div>
                <div className={styles.RevelationsSideCardsScnd}>
                  {PREMA_LINGPA_INFORMATION[language].burningLake.title}
                </div>
              </div>
              <img src={ComicBook} alt="ComicBook" />
              <div className={styles.BurningLakeCardBookText}>
                {PREMA_LINGPA_INFORMATION[language].burningLake.title}
              </div>
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="60.5%"
          />
        </>
      )}

      {showNaringDragBook && (
        <>
          <div className={styles.NaringDragBookAnimate}>
            <NaringDragBook />
          </div>
          <div
            className={styles.NaringDragCardBookBurningLakeCardContainer}
            onClick={handleBurningLakeCardClick}
          >
            <div className={styles.RevelationsSideCardsfrst}>
              {PREMA_LINGPA_INFORMATION[language].naringDrag.header}
            </div>
            <div className={styles.RevelationsSideCardsScnd}>
              {PREMA_LINGPA_INFORMATION[language].burningLake.title}
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="58.5%"
            top="89%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="59.5%"
          />
          <PreviousIcon
            showIcons={showIcons}
            onClick={handlePreviousIconClick}
            left="58.5%"
            top="83.5%"
          />
        </>
      )}

      {showBurningLakeBook && (
        <>
          <div className={styles.NaringDragBookAnimate}>
            <BurningLakeBook />
          </div>
          <div
            className={styles.NaringDragCardBookTextContainer}
            onClick={handleNaringDragCardClick}
          >
            <div className={styles.RevelationsSideCardsfrst}>
              {PREMA_LINGPA_INFORMATION[language].naringDrag.header}
            </div>
            <div className={styles.RevelationsSideCardsScnd}>
              {PREMA_LINGPA_INFORMATION[language].naringDrag.title}
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="58.5%"
            top="89%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="59.5%"
          />
          <PreviousIcon
            showIcons={showIcons}
            onClick={handlePreviousIconClick}
            left="58.5%"
            top="83.5%"
          />
        </>
      )}

      {showNaringDragCard && (
        <>
          <Card
            width="470px"
            header={PREMA_LINGPA_INFORMATION[language].naringDrag.header}
            title={PREMA_LINGPA_INFORMATION[language].naringDrag.title}
            content={PREMA_LINGPA_INFORMATION[language].naringDrag.content}
            showIntro={showIntro}
            language={language}
          />
          <div className={styles.NaringDragCardBook}>
            <img
              src={NaringDrag}
              alt="NaringDrag"
              onClick={NaringDragBookClick}
            />
            <div className={styles.NaringDragCardBookTextScnd}>
              {PREMA_LINGPA_INFORMATION[language].naringDrag.title}
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="60.5%"
          />
        </>
      )}

      {showBurningLakeCard && (
        <>
          <Card
            width="470px"
            header={PREMA_LINGPA_INFORMATION[language].burningLake.header}
            title={PREMA_LINGPA_INFORMATION[language].burningLake.title}
            content={PREMA_LINGPA_INFORMATION[language].burningLake.content}
            showIntro={showIntro}
            language={language}
          />
          <div
            className={styles.NaringDragCardBook}
            onClick={BurningLakeBookClick}
          >
            <img src={ComicBook} alt="NaringDrag" />
            <div className={styles.BurningLakeCardText}>
              {PREMA_LINGPA_INFORMATION[language].burningLake.title}
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="60.5%"
          />
        </>
      )}

      {showLegacyCard && (
        <>
          <Card
            width="470px"
            title={PREMA_LINGPA_INFORMATION[language].legacy.title}
            content={PREMA_LINGPA_INFORMATION[language].legacy.content}
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
            language={language}
            borderBottom="2px solid #6A1F11"
          />
          <div className={styles.PelingCard} onClick={PelingCardClick}>
            <img src={KenchosumLhakhang} alt="KenchosumLhakhang" />
            <div style={{ margin: "15px" }}>
              <div className={styles.PelingSideCardsfrst}>
                {" "}
                title={PREMA_LINGPA_INFORMATION[language].legacy.header}
              </div>
              <div className={styles.PelingSideCardsScnd}>
                <p>
                  {
                    PREMA_LINGPA_INFORMATION[language].monastriesAndTemples
                      .title
                  }
                </p>
              </div>
            </div>
          </div>
          <div className={styles.PelingDanceCard} onClick={PelingDanceClick}>
            <div className={styles.PelingDanceVideo}>
              <img src={PelingDanceVideo} alt="PelingDanceVideo " />
            </div>
            <div style={{ margin: "30px" }}>
              <div className={styles.PelingSideCardsfrst}>
                {PREMA_LINGPA_INFORMATION[language].pelingdance.header}
              </div>
              <div className={styles.PelingSideCardsScnd}>
                <p> {PREMA_LINGPA_INFORMATION[language].pelingdance.title}</p>
              </div>
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            left="60.5%"
          />
        </>
      )}

      {showMonstariesAndTemples && (
        <>
          <Card
            width="470px"
            header={
              PREMA_LINGPA_INFORMATION[language].monastriesAndTemples.header
            }
            title={
              PREMA_LINGPA_INFORMATION[language].monastriesAndTemples.title
            }
            content={
              PREMA_LINGPA_INFORMATION[language].monastriesAndTemples.content
            }
            showIntro={showIntro}
            language={language}
          />
          <div
            className={styles.MonsTemplesCardBook}
            onClick={PelingCardImageClick}
          >
            <img src={MonsTemples} alt="NaringDrag" />
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="59.5%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="60.5%"
          />
        </>
      )}

      {showMonstariesAndTemplesImgs && (
        <>
          <div className={styles.MonstariesAndTemplesImgsContainer}>
            <div className={styles.MonstariesAndTemplesImgsContainerfrst}>
              <img src={MonsTemplesFrst} alt="MonsTemplesFrst" />
            </div>
            <div className={styles.MonstariesAndTemplesImgsContainerScnd}>
              <div className={styles.MonstariesAndTemplesImgs}>
                <img src={MonsTemplesScnd} alt="MonsTemplesFrst" />
              </div>
              <div className={styles.MonstariesAndTemplesImgs2}>
                <img src={MonsTemplesThrd} alt="MonsTemplesFrst" />
              </div>
            </div>
            <div className={styles.MonstariesAndTemplesImgsContainerThrd}>
              <img src={MonsTemplesFrth} alt="MonsTemplesFrst" />
              <img src={MonsTemplesFvth} alt="MonsTemplesFrst" />
              <img src={MonsTemplesSxth} alt="MonsTemplesFrst" />
            </div>
            <div className={styles.MonstariesAndTemplesImgsContainerFrth}>
              <img src={MonsTemplesSvnth} alt="MonsTemplesFrst" />
              <div
                className={styles.MonstariesAndTemplesImgsPelingDanceCard}
                onClick={PelingDanceClick}
              >
                <div className={styles.PelingSideCardsfrst}>
                  {PREMA_LINGPA_INFORMATION[language].pelingdance.header}
                </div>
                <div className={styles.PelingSideCardsScnd}>
                  {PREMA_LINGPA_INFORMATION[language].pelingdance.title}
                </div>
              </div>
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="58.5%"
            top="89%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="59.5%"
          />
          <PreviousIcon
            showIcons={showIcons}
            onClick={handlePreviousIconClick}
            left="58.5%"
            top="83.5%"
          />
        </>
      )}

      {showPelingDance && (
        <>
          <Card
            header={PREMA_LINGPA_INFORMATION[language].pelingdance.header}
            title={PREMA_LINGPA_INFORMATION[language].pelingdance.title}
            content={PREMA_LINGPA_INFORMATION[language].pelingdance.content}
            width="470px"
            showIntro={showIntro}
            language={language}
          />
          <div className={styles.PeilingVedio} onClick={PelingVideoClick}>
            <img src={PeilingVedio1} alt="peling video" />
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="58.5%"
            top="89%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="59.5%"
          />
        </>
      )}

      {showPelingVideo && (
        <>
          <div className={styles.PelingVideoScnd}>
            <div className={styles.PeilingVedioScnd}>
              <img src={PeilingVedio2} alt="peling video" />
            </div>
            <div
              className={styles.PelingVideoScndCard}
              onClick={PelingCardClick}
            >
              <div style={{ margin: "10px" }}>
                <div className={styles.PelingVideoScndCardFrstTitle}>
                  <p>{PREMA_LINGPA_INFORMATION[language].pelingdance.header}</p>
                </div>
                <div className={styles.PelingVideoScndCardcndTitle}>
                  <p>
                    {
                      PREMA_LINGPA_INFORMATION[language].monastriesAndTemples
                        .title
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <HomeIcon
            showIcons={showIcons}
            onClick={handleFooterIconClick}
            whiteImage={true}
            left="58.5%"
            top="89%"
          />
          <LanguageIcon
            onClick={toggleLanguage}
            showIcons={showIcons}
            whiteImage={true}
            left="59.5%"
          />
          <PreviousIcon
            showIcons={showIcons}
            onClick={handlePreviousIconClick}
            left="58.5%"
            top="83.5%"
          />
        </>
      )}
    </motion.div>
  );
};

export default PemaLingpa;
