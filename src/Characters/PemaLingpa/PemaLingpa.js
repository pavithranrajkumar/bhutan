import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./PemaLingpa.module.css";
import pemaLingpa from "../../assests/PemaLingpa.png";
import Card from "../../components/Card/Card";

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
      // Show details card from historic card
      setShowHistoricDetails(false);
      setShowDetails(true);
    } else if (showLineageCard) {
      // Show historic card from lineage card
      setShowLineageCard(false);
      setShowHistoricDetails(true);
    } else if (showRevelationsCard) {
      // Show lineage card from revelations card
      setShowRevelationsCard(false);
      setShowLineageCard(true);
    } else if (showLegacyCard) {
      // Show revelations card from legacy card
      setShowLegacyCard(false);
      setShowRevelationsCard(true);
    } else if (showDetails) {
      // Close details and show nothing (initial stage)
      setShowDetails(false);
      setShowCards(false); // Ensure cards are not shown
    } else if (showCards) {
      // If cards are open, just close them
      setShowCards(false);
    }
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
        <>
          <Card
            title="LINEAGE"
            content="Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo."
            showIntro={showIntro}
          />
          <motion.div
            className={styles.detailCardHeader}
            onClick={() => setShowLineageCard(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: showIcons ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </motion.div>
        </>
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
