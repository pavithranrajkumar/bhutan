import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
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
import PelingVedio from "../../assests/Video Block.jpg";

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

  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const [showNaringDragBookImage, setShowNaringDragBookImage] = useState(false);
  const [showBurningLakeBookImage, setShowBurningLakeBookImage] =
    useState(false);

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
      setShowDetails(false);
      setShowCards(false);
      setShowHistoricDetails(false);
      setShowLineageCard(false); // Close lineage card as well
      setShowRevelationsCard(false); // Close revelations card
      setShowLegacyCard(false); // Close legacy card
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
    } else {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowDetails(true);
        setShowIntro(true);
        setIsFadingOut(false);
        setShowIcons(true);
        setNameCardText("Pema Lingpa");
        setNameCardSubtitle("1450-1521");
      }, 800);
    }
  };

  const handleHistoricCardClick = () => {
    setIsFadingOut(true); // Start fading out the cards
    setTimeout(() => {
      setShowHistoricDetails(true); // Show historic details after fade
      setShowCards(false); // Hide the cards
      setShowDetails(false); // Hide other details if needed
      setShowIntro(true);
    }, 500); // Match the duration with fade out
  };

  const handleHeaderIconClick = () => {
    if (showHistoricDetails) {
      setIsFadingOut(true); // Start fading out
      setTimeout(() => {
        setShowHistoricDetails(false); // Hide historic details
        setShowLineageCard(true); // Show lineage card
        setIsFadingOut(false); // Reset fading state
      }, 500); // Match this duration with the fade out duration
    } else if (showDetails) {
      setShowDetails(false);
      setShowIntro(false);
      setShowCards(true); // Show cards when going back
    } else if (showCards) {
      setShowCards(false);
    } else if (showLineageCard) {
      setShowLineageCard(false); // Close lineage card when clicked again
    } else {
      setShowCards((prev) => !prev); // Toggle cards if no details are shown
    }
  };

  const handleLineageCardClick = () => {
    setIsFadingOut(true); // Start fading out the cards
    setTimeout(() => {
      setShowHistoricDetails(false); // Hide historic details if shown
      setShowCards(false); // Hide the cards container
      setShowLineageCard(true); // Show the lineage card
      setIsFadingOut(false); // Reset fading state
      setShowIntro(true);
    }, 500); // Match this duration with the fade-out duration
  };

  const handleRevelationsCardClick = () => {
    setIsFadingOut(true); // Start fading out
    setTimeout(() => {
      setShowHistoricDetails(false); // Hide other details
      setShowCards(false);
      setShowRevelationsCard(true); // Show revelations card
      setIsFadingOut(false); // Reset fading state
      setShowIntro(true);
    }, 500);
  };

  const handleNaringDragCardClick = () => {
    setShowBurningLakeBook(false);
    setShowRevelationsCard(false);
    setShowNaringDragCard(!showNaringDragCard); // Toggle NaringDrag card
    setShowBurningLakeCard(false); // Hide BurningLake card when NaringDrag is clicked
  };

  const handleBurningLakeCardClick = () => {
    setShowNaringDragBook(false);
    setShowRevelationsCard(false);
    setShowBurningLakeBook(!showBurningLakeCard);
    setShowNaringDragCard(false);
  };

  const handleLegacyCardClick = () => {
    setIsFadingOut(true); // Start fading out
    setTimeout(() => {
      setShowHistoricDetails(false); // Hide other details
      setShowCards(false);
      setShowLegacyCard(true); // Show legacy card
      setIsFadingOut(false); // Reset fading state
      setShowIntro(true);
    }, 500);
  };

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

  const handleFooterIconClick = () => {
    if (showHistoricDetails) {
      setShowHistoricDetails(false);
      setShowCards(true);
    } else if (showLineageCard) {
      setShowLineageCard(false);
      setShowCards(true);
    } else if (showRevelationsCard) {
      setShowRevelationsCard(false);
      setShowCards(true);
    } else if (showLegacyCard) {
      setShowLegacyCard(false);
      setShowCards(true);
    } else if (showDetails) {
      setShowDetails(false);
      setShowCards(false);
    } else if (showBurningLakeCard) {
      setShowBurningLakeCard(false);
      setShowCards(false);
      setShowRevelationsCard(true);
    } else if (showNaringDragCard) {
      setShowNaringDragCard(false);
      setShowCards(false);
      setShowRevelationsCard(true);
    } else {
      setShowCards(false);
    }
  };

  const handleFamilyHeaderClick = () => {
    setShowFirstLevel(!showFirstLevel);
  };

  const handleTreeCardClick = (cardName) => {
    setActiveCard(activeCard === cardName ? null : cardName);
  };

  const handleNaringDragBookImageClick = () => {
    setShowNaringDragBookImage((prevState) => !prevState); // Toggle image
  };

  const handleBUrningLakeImageClick = () => {
    setShowNaringDragBookImage((prevState) => !prevState); // Toggle image
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
          opacity: showDetails || showCards || showHistoricDetails ? 0 : 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <div>1450</div>
        <div>-1521</div>
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
        <motion.div
          className={styles.nameCard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            className={
              nameCardSubtitle ? styles.nameCardtitle : styles.pemaNameCardTitle
            }
          >
            {nameCardText}
          </div>
          {nameCardSubtitle && (
            <div className={styles.nameCardSubtitle}>{nameCardSubtitle}</div>
          )}
        </motion.div>
      </motion.div>

      {showDetails && (
        <>
          <Card
            title="INTRODUCTION"
            content="Pema Lingpa (c. 1450-1521) native to Bumthang was a prominent
          religious figure of the Nyingma tradition who had a huge influence
          in Bhutan. The fourth and the only Bhutanese of five most
          important tertöns of the Himalayan world, he was considered the
          reincarnation of the 14th century Tibetan scholar Longchen Rabjam.
          Termas unearthed by him revealed religious teachings and
          meditation instructions, which inform certain Buddhist practices
          in Bhutan even today. He is renowned for his display of spiritual
          wonders and his extraordinary religious visions are depicted in
          dances throughout the country. Pema Lingpa’s spiritual lineage is
          still maintained and transmitted through the many monasteries he
          established and his three incarnation lines. His family lineage
          established various noble religious families in Bhutan, including
          Dungkar chöeje, forbearers of the present ruling family."
            showIntro={showIntro}
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
            <span>Historic Background</span>
          </motion.div>
          <motion.div
            className={styles.LineageCard}
            onClick={handleLineageCardClick}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>Lineage</span>
          </motion.div>
          <motion.div
            className={styles.RevelationsCard}
            onClick={handleRevelationsCardClick}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>Revelations by Pema Lingpa</span>
          </motion.div>
          <motion.div
            className={styles.LegacyCard}
            onClick={handleLegacyCardClick}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>Legacy</span>
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
                      <div
                        className={styles.SangdaCard}
                        style={{ padding: "1vw" }}
                      >
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
                      <div className={styles.KuengaWangpoVerticalLine}></div>
                      <div className={styles.KochungChoejeCard}>
                        <p>Choeje</p>
                      </div>
                      <div className={styles.KochungChoejeVerticalLine}></div>
                      <div className={styles.KochungHorizontalLine}></div>
                      <div className={styles.KochungVerticalLine}></div>
                      <div className={styles.BidungVerticalLine}></div>
                      <div className={styles.KheriVerticalLine}></div>
                      <div className={styles.DungkarVerticalLine}></div>
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
                      <div className={styles.SangdaDownSonsVerticalLine}></div>

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
                      <div
                        className={styles.SangdaFrthSonsHorizontalLine}
                      ></div>

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
            title="Revelations by Pema Lingpa"
            content="Pema Lingpa discovered treasures mainly around Bumthang’s valleys and regions north of its current borders with Tibet. He revealed exclusively physical terma, both texts and relics. In his lifetime, Pema Lingpa was able to reveal only 32 out of 108 termas destined for him. The collection of texts discovered by him, ‘The Precious Collection of Profound Treasure Teachings of the Great Master Pema Lingpa’ consists of 21 volumes."
            showIntro={showIntro}
            backgroundColor="#FFD9BC"
            color="#380100"
          />
          <div className={styles.RevelationsSideCards}>
            <div className={styles.NaringDragCard}>
              <div
                className={styles.RevelationsSideCardsfrst}
                onClick={handleNaringDragCardClick}
              >
                Revelations at
              </div>
              <div className={styles.RevelationsSideCardsScnd}>NARING DRAG</div>
              <img src={NaringDrag} alt="NaringDrag" />
              <div className={styles.NaringDragCardBookText}>NARING DRAG</div>
            </div>
            <div
              className={styles.BurningLakeCard}
              onClick={handleBurningLakeCardClick}
            >
              <div className={styles.RevelationsSideCardsfrst}>
                Revelations at
              </div>
              <div className={styles.RevelationsSideCardsScnd}>
                BURNING LAKE
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
          <div className={styles.NaringDragCard}>
            <div
              className={styles.RevelationsSideCardsfrst}
              onClick={handleNaringDragCardClick}
            >
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
        showLegacyCard) &&
        showIcons && (
          <motion.div
            className={styles.detailCardFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 5 }}
            onClick={handleFooterIconClick}
          >
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
          </motion.div>
        )}
    </motion.div>
  );
};

export default PemaLingpa;
