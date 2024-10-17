import React, { useState } from "react";
import Card from "../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../constants/Characters/PremaLingpa";
import styles from "./LineageCard.module.css";
import DrakpaGyalpo from "../../../../assests/PemaLingpa/FamilyTree/DrakpaGyalpo.png";
import DawaGyaltshen from "../../../../assests/PemaLingpa/FamilyTree/DawaGyaltshen.png";
import KuengaWangpo from "../../../../assests/PemaLingpa/FamilyTree/KuengaWangpo.png";
import Sangda from "../../../../assests/PemaLingpa/FamilyTree/Sangda.png";
import Tamshing from "../../../../assests/PemaLingpa/FamilyTree/Tamshing.png";
import Prakhar from "../../../../assests/PemaLingpa/FamilyTree/Prakhar.png";
import Kochung from "../../../../assests/PemaLingpa/FamilyTree/Kochung.png";
import Bidung from "../../../../assests/PemaLingpa/FamilyTree/Bidung.png";
import Kheri from "../../../../assests/PemaLingpa/FamilyTree/Kheri.png";
import Dungkar from "../../../../assests/PemaLingpa/FamilyTree/Dungkar.png";
import Tsakaling from "../../../../assests/PemaLingpa/FamilyTree/Tsakaling.png";
import Drophu from "../../../../assests/PemaLingpa/FamilyTree/Drophu.png";
import Drametse from "../../../../assests/PemaLingpa/FamilyTree/Drametse.png";
import Yagang from "../../../../assests/PemaLingpa/FamilyTree/Yagang.png";
import { BHUTAN } from "../../../../constants/languages/Language";
import { motion } from "framer-motion";

const LineageCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const contentFontSize = language === BHUTAN ? "7.5px" : "11px";
  const treeFontSize = language === BHUTAN ? "14px" : "13px";

  const [currentStep, setCurrentStep] = useState(null);

  const handleContainerClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            height="300px"
            titleFontSize={titleFontSize}
            contentFontSize={contentFontSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].lineage.title}
            content={PEMA_LINGPA_INFORMATION[language].lineage.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.FamilyTree}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.Header}
              style={{ fontSize: treeFontSize }} // Consistent font size
            >
              {PEMA_LINGPA_INFORMATION[language].title}
            </motion.div>

            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={styles.SonsVerticalLine}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={styles.Sons}
              style={{ fontSize: treeFontSize }} // Consistent font size
            >
              SONS
            </motion.div>

            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className={styles.SonsHorizontalLine}
            />

            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className={styles.SonsHorizontalLine2}
            />

            {/* Family Heads */}
            <motion.div className={styles.FamilyHeads}>
              {[
                { img: DrakpaGyalpo, name: "DRAKPA GYALPO", index: 0 },
                { img: DawaGyaltshen, name: "DAWA GYALTSHEN", index: 1 },
                { img: KuengaWangpo, name: "KUENGA WANGPO", index: 2 },
                { img: Sangda, name: "SANGDA", index: 3 },
              ].map(({ img, name, index }) => (
                <motion.div
                  key={index}
                  className={styles[`${name.replace(" ", "")}Container`]}
                  onClick={() => handleContainerClick(index)}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      currentStep === index || currentStep === null ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: 2.5 + index * 0.2 }}
                >
                  <div className={styles[name.replace(" ", "")]}>
                    <img src={img} alt={name} />
                  </div>
                  <div
                    className={styles[`${name.replace(" ", "")}Card`]}
                    style={{ fontSize: treeFontSize }}
                  >
                    {name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Conditional Rendering of Secondary Containers with Fade Animation */}
            {currentStep === 0 && (
              <motion.div
                className={styles.TamshingContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <hr className={styles.TamshingVerticalLine} />
                <hr className={styles.TamshingVerticalLine1} />
                <div className={styles.SonsTree}>
                  <div
                    className={styles.Choeje}
                    style={{ fontSize: treeFontSize }}
                  >
                    CHOEJE
                  </div>
                </div>
                <div className={styles.Tamshing}>
                  <img src={Tamshing} alt="Tamshing" />
                </div>
                <div
                  className={styles.TamshingCard}
                  style={{ fontSize: treeFontSize }}
                >
                  TAMSHING
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                className={styles.PrakharContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <hr className={styles.PrakharVerticalLine} />
                <hr className={styles.PrakharVerticalLine1} />
                <div className={styles.SonsTree}>
                  <div
                    className={styles.PrakharChoeje}
                    style={{ fontSize: treeFontSize }}
                  >
                    CHOEJE
                  </div>
                </div>
                <div className={styles.Prakhar}>
                  <img src={Prakhar} alt="Prakhar" />
                </div>
                <div
                  className={styles.PrakharCard}
                  style={{ fontSize: treeFontSize }}
                >
                  PRAKHAR
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                className={styles.KuengaFamilyContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <hr className={styles.KochungHorizontalLine} />
                <hr className={styles.KochungHorizontalLine2} />
                <hr className={styles.KochungVerticalLine} />
                <hr className={styles.KochungVerticalLine1} />
                <hr className={styles.KheriHorizontalLine} />
                <hr className={styles.KheriVerticalLine} />
                <hr className={styles.KheriVerticalLine1} />
                <hr className={styles.KheriVerticalLine2} />
                <hr className={styles.DungkarVerticalLine} />

                <div className={styles.KochungContainer}>
                  <div className={styles.SonsTree}>
                    <div
                      className={styles.KochungChoeje}
                      style={{ fontSize: treeFontSize }}
                    >
                      CHOEJE
                    </div>
                  </div>
                  <div className={styles.Kochung}>
                    <img src={Kochung} alt="Kochung" />
                  </div>
                  <div
                    className={styles.KochungCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    KOCHUNG
                  </div>
                </div>

                <div className={styles.BidungContainer}>
                  <div className={styles.Bidung}>
                    <img src={Bidung} alt="Bidung" />
                  </div>
                  <div
                    className={styles.BidungCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    BIDUNG
                  </div>
                </div>

                <div className={styles.KheriContainer}>
                  <div className={styles.Kheri}>
                    <img src={Kheri} alt="Kheri" />
                  </div>
                  <div
                    className={styles.KheriCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    KHERI
                  </div>
                </div>

                <div className={styles.DungkarContainer}>
                  <div className={styles.Dungkar}>
                    <img src={Dungkar} alt="Dungkar" />
                  </div>
                  <div
                    className={styles.DungkarCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    DUNGKAR
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                className={styles.SangaFamilyContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <hr className={styles.TsakalingVerticalLine} />
                <hr className={styles.TsakalingVerticalLine1} />
                <hr className={styles.TsakalingHorizontalLine} />
                <hr className={styles.TsakalingVerticalLine2} />
                <hr className={styles.TsakalingVerticalLine3} />
                <hr className={styles.TsakalingVerticalLine4} />

                <div className={styles.TsakalingContainer}>
                  <div className={styles.SonsTree}>
                    <div
                      className={styles.TsakalingChoeje}
                      style={{ fontSize: treeFontSize }}
                    >
                      CHOEJE
                    </div>
                  </div>
                  <div className={styles.Tsakaling}>
                    <img src={Tsakaling} alt="Tsakaling" />
                  </div>
                  <div
                    className={styles.TsakalingCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    TSAKALING
                  </div>
                </div>

                <div className={styles.DrophuContainer}>
                  <div className={styles.Drophu}>
                    <img src={Drophu} alt="Drophu" />
                  </div>
                  <div
                    className={styles.DrophuCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    DROPHU
                  </div>
                </div>

                <div className={styles.DrametseContainer}>
                  <div className={styles.Drametse}>
                    <img src={Drametse} alt="Drametse" />
                  </div>
                  <div
                    className={styles.DrametseCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    DRAMETSE
                  </div>
                </div>

                <div className={styles.YagangContainer}>
                  <div className={styles.Yagang}>
                    <img src={Yagang} alt="Yagang" />
                  </div>
                  <div
                    className={styles.YagangCard}
                    style={{ fontSize: treeFontSize }}
                  >
                    YAGANG
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LineageCard;
