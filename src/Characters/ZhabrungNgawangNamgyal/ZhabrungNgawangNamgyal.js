import React, { useState } from "react";
import styles from "./Zhabrung.module.css";
import { motion } from "framer-motion";
import NameCard from "../../components/NameCard/NameCard";
import { ZHABRUNG_INFORMATION } from "../../constants/Characters/ZhabrungNgawangNamgyal";
import Zhabrung from "../../assests/Zhabrung/Shabdrung.jpg";
import CardTwo from "../../components/CardTwo/CardTwo";

const ZhabrungNgawangNamgyal = () => {
  const [language, setLanguage] = useState("english");
  const [nameCardSubtitle, setNameCardSubtitle] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "bhutan" : "english"
    );
  };
  return (
    <motion.div
      className={styles.ZhabrungContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <motion.div
        className={styles.pemaText}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.ZhabrungContainer}>
          <div className={styles.YearText}>1594</div>
          <div className={styles.YearText}>-1651</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.ZhabrungImage}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img src={Zhabrung} alt="Pema Lingpa" />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.NameCardContainer}>
          {nameCardSubtitle ? (
            <>
              <NameCard
                cardName={ZHABRUNG_INFORMATION[language].title}
                background="#FFD9BC"
                color="#6A1F11"
              />
            </>
          ) : (
            <>
              <NameCard cardName={ZHABRUNG_INFORMATION[language].title} />
            </>
          )}
        </div>
      </motion.div>
      <div className={styles.IntroCard}>
        <CardTwo
          title={ZHABRUNG_INFORMATION[language].politicalInfluence.title}
          content={ZHABRUNG_INFORMATION[language].politicalInfluence.content}
          subContent={
            ZHABRUNG_INFORMATION[language].politicalInfluence.subContent
          }
          showIntro={showIntro}
          language={language}
          backgroundColor="#FFD9BC"
          color="#380100"
          borderBottom="2px solid #6A1F11"
        />
      </div>
    </motion.div>
  );
};

export default ZhabrungNgawangNamgyal;
