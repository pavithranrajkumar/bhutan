import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./PemaLingpa.module.css";
import pemaLingpa from "../../assests/PemaLingpa.png";
import Namecard from "../../assests/NameCard/NameCard.svg";
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
import PelingVedio from "../../assests/Video Block.jpg";
import Introduction from "./Introduction/Introduction";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

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
  const [isBookOpening, setIsBookOpening] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const getIconColor = () => {
    if (
      showHistoricDetails ||
      showLineageCard ||
      showRevelationsCard ||
      showLegacyCard
    )
      return "#ffd9bc";
  };

  const getIconBgColor = () => {
    if (
      showHistoricDetails ||
      showLineageCard ||
      showRevelationsCard ||
      showLegacyCard
    )
      return "#380100";
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
      showNaringDragBook
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

  const NaringDragBookClick = () => {
    setShowNaringDragCard(false);
    setShowNaringDragBook(true);
  };

  const BurningLakeBookClick = () => {
    setShowBurningLakeCard(false);
    setShowBurningLakeBook(true);
  };

  const handleNaringDragBook = () => {
    console.log("Book clicked");
    setIsBookOpening(true); // Start the book opening animation

    setTimeout(() => {
      console.log("Book opened animation triggered");
      setBookOpened(true); // Reveal the pages after the book opens
      setIsBookOpening(false); // Reset the book opening state
    }, 1000); // Match this duration to the animation timing
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
      showPelingDance
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
        className={
          nameCardSubtitle ? styles.nameCardSubtitlecard : styles.pemaNameCard
        }
        onClick={handleCardClick}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* <img src={Namecard} alt="Pema Lingpa" className={styles.OverLayImage} /> */}

        <div
          className={
            nameCardSubtitle ? styles.nameCardtitle : styles.pemaNameCardTitle
          }
        >
          <div className={styles.namedCardText}>{nameCardText}</div>
        </div>
        {nameCardSubtitle && (
          <div className={styles.nameCardSubtitle}>{nameCardSubtitle}</div>
        )}
      </motion.div>

      {showDetails && (
        <>
          <Introduction />

          <motion.div
            className={styles.detailCardHeader}
            onClick={handleHeaderIconClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 5 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
      )}

      {showCards && (
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
            <div className={styles.CardsContainerText}>HISTORIC BACKGROUND</div>
          </motion.div>
          <motion.div
            className={styles.LineageCard}
            onClick={handleLineageCardClick}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.CardsContainerText}>LINEAGE</div>
          </motion.div>
          <motion.div
            className={styles.RevelationsCard}
            onClick={handleRevelationsCardClick}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.CardsContainerText}>
              REVALATIONS BY PEMA LINGPA
            </div>
          </motion.div>
          <motion.div
            className={styles.LegacyCard}
            onClick={handleLegacyCardClick}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.CardsContainerText}>LEGACY</div>
          </motion.div>
        </motion.div>
      )}

      {showHistoricDetails && (
        <>
          <Card
            title="HISTORIC BACKGROUND"
            content=" The tradition of hiding treasures, Terma originated with
           Padmasambhava in the 8th century. Holy objects or scrolls with
           spiritual instructions were hidden in caves and cliffs and
           sometimes the meanings of these teachings themselves were planted
           in the minds of chosen disciples. The location and circumstances
           of their discovery are recorded as prophecies in ancient texts
           attributed to Padmasambhava. The person who was destined to reveal
           a particular treasure was called Tertön, the treasure-revealer.
           Pema Lingpa is recognized as the fourth of five Tertön Kings or
           Sovereign Tertöns, who rank among one hundred major and one
           thousand minor treasure revealers."
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
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
        </>
      )}

      {showLineageCard && (
        <div>
          <Card
            width="630px"
            title="LINEAGE"
            content="Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo."
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
          />

          <div className={styles.FamilCard}>
            <div
              className={styles.FamilyHeader}
              onClick={handleFamilyHeaderClick}
            >
              <p>PEMA LINGPA</p>
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
                      <div className={styles.SangdaCard}>
                        <p>Sangda</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Containers for each card */}
                {activeCard === "DrakpaGyalpos" && (
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
                  >
                    <div>
                      <div className={styles.VerticalLine}></div>
                      <div className={styles.SonsCard}>
                        <p>Sons</p>
                      </div>
                      <div className={styles.SonsHorizontalLine}></div>
                      <div className={styles.SonsVerticalLine}></div>
                      <div className={styles.DrakpaGyalposContainer}>
                        <div className={styles.DrakpaGyalposVerticalLine}></div>
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
                )}

                {activeCard === "DawaGyaltshen" && (
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
                        <div className={styles.DawaGyaltshenVerticalLine}></div>
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
                )}

                {activeCard === "KuengaWangpo" && (
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
                      <div className={styles.KochungChoejeVerticalLine}></div>
                      <div className={styles.KochungHorizontalLine}></div>
                      <div className={styles.KochungVerticalLine}></div>
                      <div className={styles.BidungVerticalLine}></div>
                      <div className={styles.KheriVerticalLine}></div>
                      <div className={styles.KheriVerticalLine2}></div>

                      <div className={styles.DungkarVerticalLine}></div>
                      <div className={styles.DungkarHorizontalLine}></div>

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
                )}

                {activeCard === "Sangda" && (
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
                  >
                    <div className={styles.SangdaCardContainer}>
                      <div className={styles.VerticalLine}></div>
                      <div className={styles.SonsCard}>
                        <p>Sons</p>
                      </div>
                      <div className={styles.SangdaSonsHorizontalLine}></div>
                      <div className={styles.SangdaSonsVerticalLine}></div>

                      <div className={styles.SangdaVerticalLine}></div>
                      <div className={styles.SangdaSonsCard}>
                        <p>Choeje</p>
                      </div>
                      <div className={styles.SangdaDownVerticalLine}></div>
                      <div className={styles.SangdaHorizontalLine}></div>
                      <div className={styles.SangdaFrstSonsVerticalLine}></div>
                      <div className={styles.SangdaScndSonsVerticalLine}></div>
                      <div className={styles.SangdaThrdSonsVerticalLine}></div>
                      <div className={styles.SangdaFrthSonsVerticalLine}></div>

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
                )}
              </>
            )}
          </div>
        </div>
      )}

      {showRevelationsCard && (
        <>
          <Card
            width="630px"
            title="REVALATIONS BY PREMA LINGPA"
            content="Pema Lingpa discovered treasures mainly around Bumthang’s valleys and regions north of its current borders with Tibet. He revealed exclusively physical terma, both texts and relics. In his lifetime, Pema Lingpa was able to reveal only 32 out of 108 termas destined for him. The collection of texts discovered by him, ‘The Precious Collection of Profound Treasure Teachings of the Great Master Pema Lingpa’ consists of 21 volumes."
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
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
                  NARING DRAG
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
                  BURNING LAKE
                </div>
              </div>
              <img src={ComicBook} alt="ComicBook" />
              <div className={styles.BurningLakeCardBookText}>BURNING LAKE</div>
            </div>
          </div>
        </>
      )}

      {showNaringDragBook && (
        <>
          <div
            className={
              showNaringDragBookImage
                ? styles.BookOpen
                : styles.NaringDragCardBookContainer
            }
          >
            {/* <img
              src={showNaringDragBookImage ? BookOpen : NaringDrag}
              alt="NaringDrag"
              onClick={handleNaringDragBookImageClick}
            />
            <img
              src={showNaringDragBookImage ? BookOpen : NaringDrag}
              alt="NaringDrag"
              onClick={handleNaringDragBookImageClick}
            /> */}
            <img
              src={showNaringDragBookImage ? BookOpen : NaringDrag}
              alt="NaringDrag"
              onClick={handleNaringDragBookImageClick}
            />
          </div>

          <div
            className={styles.NaringDragCardBookBurningLakeCardContainer}
            onClick={handleBurningLakeCardClick}
          >
            <div className={styles.RevelationsSideCardsfrst}>
              Revelations at
            </div>
            <div className={styles.RevelationsSideCardsScnd}>BURNING LAKE</div>
          </div>
        </>
      )}

      {showBurningLakeBook && (
        <>
          <div
            className={
              showNaringDragBookImage
                ? styles.BookOpen
                : styles.NaringDragCardBookContainer
            }
          >
            <img
              src={showNaringDragBookImage ? BookOpen : ComicBook}
              alt="NaringDrag"
              onClick={handleNaringDragBookImageClick}
            />
          </div>
          <div
            className={styles.NaringDragCard}
            onClick={handleNaringDragCardClick}
          >
            <div className={styles.RevelationsSideCardsfrst}>
              Revelations at
            </div>
            <div className={styles.RevelationsSideCardsScnd}>NARING DRAG</div>
          </div>
        </>
      )}

      {showNaringDragCard && (
        <>
          <Card
            title="Revelation at Naring Drag"
            content="Pema Lingpa is awakened by the voice of a monk, who urges him to read a scroll thrust into his hands. The scroll instructs Pema Lingpa to gather five friends and go to Naring Drak on a full moon night to uncover his destiny. It also contained a key to decode the terma. He dives into the lake below the cliff finding a large cave with a throne and stacks of texts. The cave’s guardian hands him a scroll and asks him to leave. When Pema Lingpa surfaces above water, he is propelled up the cliff by the wind. Returning home he shares the text with his parents and two masters from Tharpaling Monastery, none could read the text. He then uses the key in the scroll to read the title of the text, ‘Crystallization of the Tantra of Luminous Space’. This text is considered the first of 32 termas revealed by Pema Lingpa."
            showIntro={showIntro}
          />
          <div className={styles.NaringDragCardBook}>
            <img
              src={NaringDrag}
              alt="NaringDrag"
              onClick={NaringDragBookClick}
            />
            <div className={styles.NaringDragCardBookTextScnd}>NARING DRAG</div>
          </div>
        </>
      )}

      {showBurningLakeCard && (
        <>
          <Card
            title="Revelation at Burning Lake"
            content="When the local Choekhor governor hears of the popularity of Pema Lingpa, he is not convinced of his authenticity. Assembling a large group of people in Naring Drag, he asks Pema Lingpa to prove his merit. He declares that he would support Pema Lingpa if he would bring out a treasure, failing which he would be punished. Pema Lingpa proclaimed “If I am genuine, let me bring back the treasure with this lamp still burning. If I am a fraud, let me die in the waters below.” He then took a burning butter lamp and dove into the lake resurfacing with a box of skulls, a sculpture of the Buddha and the butter lamp, still alight. All those who witness the miracle became Pema Lingpa’s followers and patrons, and the lake gets its name Mebar tsho or Burning Lake."
            showIntro={showIntro}
          />
          <div
            className={styles.NaringDragCardBook}
            onClick={BurningLakeBookClick}
          >
            <img src={ComicBook} alt="NaringDrag" />
            <div className={styles.BurningLakeCardText}>BURNING LAKE</div>
          </div>
        </>
      )}

      {showLegacyCard && (
        <>
          <Card
            title="LEGACY"
            content="Pema Lingpa established an enormous corpus of literature which serves as the primary basis of religious life for Buddhist followers. The teachings and the cycle of treasures of Pema Lingpa contain several practices, rituals, and instructions that lead sentient beings to liberation. Pema Lingpa’s legacies are preserved in the form of sacred dances which were revealed to him as dreams and visions. The ritual dances, cham composed by him serve as a centrepiece for many festivals and ceremonies across Bhutan."
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
          />
          <div className={styles.PelingCard} onClick={PelingCardClick}>
            <img src={KenchosumLhakhang} alt="KenchosumLhakhang" />
            <div className={styles.PelingSideCardsfrst}>Peling</div>
            <div className={styles.PelingSideCardsScnd}>
              MONASTERIES & TEMPLES
            </div>
          </div>
          <div className={styles.PelingDanceCard} onClick={PelingDanceClick}>
            <div className={styles.PelingSideCardsfrst}>Peling</div>
            <div className={styles.PelingSideCardsScnd}>DANCE</div>
          </div>
          <motion.div
            className={styles.LegacydetailCardHeader}
            onClick={() => setShowLegacyCard(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
      )}

      {showMonstariesAndTemples && (
        <>
          <Card
            title="Peling monasteries & temples"
            content="Pema Lingpa built many temples such as Tamzhing Lhundrup Choling in Bumthang; Pemaling, Dechenling, and Kunzangdrak in Chel; Kunzangling in Kurtö; Dekyiling in Bamrin; Orgyenling in Tsangchu; Kyerechung Tashi Tengye in Layak; and several others. He restored damages and reconsecrated Gyatso Lhalun. Like his previous incarnations, Pema Lingpa left magical markings of his passing in many places like Kunzangdrak monastery and Gyagar Khamphuk. These marks have a status akin to a terma, as they are reminders of his ever-living presence."
            showIntro={showIntro}
          />
          <div
            className={styles.MonsTemplesCardBook}
            onClick={PelingCardImageClick}
          >
            <img src={MonsTemples} alt="NaringDrag" />
          </div>
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
                <div className={styles.PelingSideCardsfrst}>Peling</div>
                <div className={styles.PelingSideCardsScnd}>DANCE</div>
              </div>
            </div>
          </div>
        </>
      )}

      {showPelingDance && (
        <>
          <Card
            title="Peling Dances"
            content="Pema Lingpa’s legacies are preserved in the form of sacred dances called peling tercham which were revealed to him as dreams and visions. The ritual dances composed by him serve as a centerpiece for many festivals and ceremonies. The most popular of the dances are the dakini dance, the three ging dances signifying the subjugation of evil and the ging and tsholing dance. It is said that dakini would visit him in his dreams to teach him the steps of different sacred dances and give him further instructions."
            showIntro={showIntro}
          />
          <div className={styles.PelingVedio}>
            <img src={PelingVedio} alt="peling video" />
          </div>
        </>
      )}

      {(showDetails ||
        showHistoricDetails ||
        showLineageCard ||
        showRevelationsCard ||
        showBurningLakeCard ||
        showNaringDragCard ||
        showNaringDragBook ||
        showBurningLakeBook ||
        showMonstariesAndTemples ||
        showMonstariesAndTemplesImgs ||
        showPelingDance ||
        showLegacyCard) &&
        showIcons && (
          <motion.div
            className={styles.detailCardFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 5 }}
            onClick={handleFooterIconClick}
          >
            <FontAwesomeIcon
              icon={faHome}
              className={styles.icon}
              style={{ color: getIconColor(), background: getIconBgColor() }}
            />
          </motion.div>
        )}

      {(showMonstariesAndTemplesImgs ||
        showBurningLakeBook ||
        showNaringDragBook) &&
        showIcons && (
          <motion.div
            className={styles.PreviousIconContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 5 }}
            onClick={handlePreviousIconClick}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={styles.PreviousIcon}
              style={{ color: getIconColor(), background: getIconBgColor() }}
            />
          </motion.div>
        )}
    </motion.div>
  );
};

export default PemaLingpa;
