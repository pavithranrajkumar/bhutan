import React, { useState } from "react";
import styles from "./Supine.module.css";
import { motion } from "framer-motion";
import supine from "../../assests/Supine/SupineDemoness.png";
import YearText from "../../components/YearText/YearText";
import NameCard from "../../components/NameCard/NameCard";
import { GURU_INFORMATION } from "../../constants/Characters/Guru";
import { SUPINE_INFORMATION } from "../../constants/Characters/Supine";

const Supine = () => {
  const [showYearText, setShowYearText] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [language, setLanguage] = useState("english");
  const [showIcons, setShowIcons] = useState(false);

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
        // onClick={handleCardOrImageClick}
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
          //   onClick={handleCardOrImageClick}
        >
          {!showIntroduction && !selectedCard ? (
            <>
              <NameCard
                cardName={SUPINE_INFORMATION[language].title}
                background="#384E63"
                color="white"
                width="250px"
                height="75px"
                fontSize="23.5px"
              />
            </>
          ) : (
            <>
              <NameCard
                cardName={GURU_INFORMATION[language].title}
                width="200px"
                height="80px"
                fontSize="15px"
                year="1594-1651"
                paraColor="white"
                paraSize="13px"
                // background={nameCardBackground}
                // color={nameCardColor}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Supine;
