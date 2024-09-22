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

  const handleCardClick = () => {
    if (
      showDetails ||
      showCards ||
      showHistoricDetails ||
      showLineageCard ||
      showRevelationsCard ||
      showLegacyCard
    ) {
      setShowDetails(false);
      setShowCards(false);
      setShowHistoricDetails(false);
      setShowLineageCard(false); // Close lineage card as well
      setShowRevelationsCard(false); // Close revelations card
      setShowLegacyCard(false); // Close legacy card
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

  const handleFooterIconClick = () => {
    if (showHistoricDetails) {
      setShowHistoricDetails(false); // Hide historic details
      setShowCards(true); // Show cards container
    } else if (showLineageCard) {
      setShowLineageCard(false); // Hide lineage card
      setShowCards(true); // Show cards container
    } else if (showRevelationsCard) {
      setShowRevelationsCard(false); // Hide revelations card
      setShowCards(true); // Show cards container
    } else if (showLegacyCard) {
      setShowLegacyCard(false); // Hide legacy card
      setShowCards(true); // Show cards container
    } else if (showDetails) {
      // If in details view, close it and do nothing else
      setShowDetails(false);
      setShowCards(false); // Ensure cards are not shown
    } else {
      // If cards are open, just close them
      setShowCards(false);
    }
  };

  const handleFamilyHeaderClick = () => {
    setShowFirstLevel(!showFirstLevel); // Toggle visibility for the first level
  };

  const handleTreeCardClick = (cardName) => {
    setActiveCard(activeCard === cardName ? null : cardName); // Toggle visibility for specific card container
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
        className={styles.pemaNameCard}
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
          <div>{nameCardText}</div>
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
            transition={{ duration: 1 }}
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
          {" "}
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
          />
          <motion.div
            className={styles.detailCardHeader}
            onClick={handleHeaderIconClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
      )}
      {showLineageCard && (
        <div>
          <Card
            title="LINEAGE"
            content="Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo."
            showIntro={showIntro}
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
                )}

                {activeCard === "DawaGyaltshen" && (
                  <div>
                    <div className={styles.VerticalLine}></div>
                    <div className={styles.SonsCard}>
                      <p>Sons</p>
                    </div>
                    <div className={styles.DawaGyaltshenSonsVerticalLine}></div>
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
                )}

                {activeCard === "KuengaWangpo" && (
                  <div className={styles.DawaGyaltshenCardContainer}>
                    <div className={styles.VerticalLine}></div>
                    <div className={styles.SonsCard}>
                      <p>Sons</p>
                    </div>

                    <div className={styles.KuengaWangpoSonsVerticalLine}></div>
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
                )}

                {activeCard === "Sangda" && (
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
                    <div className={styles.SangdaFrthSonsHorizontalLine}></div>

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
                )}
              </>
            )}
          </div>
        </div>
      )}

      {showRevelationsCard && (
        <>
          <Card
            title="REVELATIONS"
            content="Pema Lingpa is revered for his numerous revelations, including sacred texts, rituals, and practices that continue to be vital in the Nyingma tradition. His treasures, known as 'termas,' were revealed to guide practitioners in their spiritual journeys."
            showIntro={showIntro}
          />
          <motion.div
            className={styles.detailCardHeader}
            onClick={() => setShowRevelationsCard(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
      )}

      {showLegacyCard && (
        <>
          <Card
            title="LEGACY"
            content="Pema Lingpa's legacy endures through his many disciples and the lineages they established. His teachings continue to inspire and shape the practices within the Nyingma tradition, ensuring the continuation of his spiritual heritage."
            showIntro={showIntro}
          />
          <motion.div
            className={styles.detailCardHeader}
            onClick={() => setShowLegacyCard(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
      )}

      {(showDetails ||
        showCards ||
        showHistoricDetails ||
        showLineageCard ||
        showRevelationsCard ||
        showLegacyCard) &&
        showIcons && (
          <motion.div
            className={styles.detailCardFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
            onClick={handleFooterIconClick}
          >
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
          </motion.div>
        )}
    </motion.div>
  );
};

export default PemaLingpa;
