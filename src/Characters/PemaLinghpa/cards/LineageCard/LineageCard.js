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
import NextIcon from "../../../../components/Card/Icons/NextIcon/NextIcon";

const LineageCard = ({ showIntro, language, showIcons, onNextClick }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "7.5px" : "11px";
  const treeFonstSize = language === BHUTAN ? "14px" : "13px";

  const [currentStep, setCurrentStep] = useState(null);

  const handleContainerClick = (index) => {
    setCurrentStep(index);
  };

  const handleShowCards = () => {
    setCurrentStep((prevStep) => {
      if (prevStep < 3) {
        return prevStep + 1; // Cycle through the steps
      } else {
        onNextClick(); // Notify parent to switch to revelations
        return prevStep; // Keep current step
      }
    });
  };
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            height="300px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid #6A1F11"
            backgroundColor="#FFD9BC"
            color="#6A1F11"
            title={PEMA_LINGPA_INFORMATION[language].lineage.title}
            content={PEMA_LINGPA_INFORMATION[language].lineage.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.FamilyTree}>
            <div className={styles.FamilyHeads}>
              <motion.div
                className={styles.Header}
                style={{ fontSize: treeFonstSize }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {PEMA_LINGPA_INFORMATION[language].title}
              </motion.div>

              <motion.div
                className={styles.Sons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                SONS
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <hr className={styles.SonsVerticalLine} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <hr className={styles.SonsHorizontalLine} />
                <hr className={styles.SonsHorizontalLine2} />
                <hr className={styles.SonsVerticalLine1} />
                <hr className={styles.SonsVerticalLine2} />
                <hr className={styles.SonsVerticalLine3} />
                <hr className={styles.SonsVerticalLine4} />{" "}
              </motion.div>

              {[
                {
                  src: DrakpaGyalpo,
                  name: "DRAKPA GYALPO",
                  className: styles.DrakpaGyalpoContainer,
                  cardClass: styles.DrakpaGyalpoCard,
                  imgClass: styles.DrakpaGyalpo,
                },
                {
                  src: DawaGyaltshen,
                  name: "DAWA GYALTSHEN",
                  className: styles.DawaGyaltshenContainer,
                  cardClass: styles.DawaGyaltshenCard,
                  imgClass: styles.DawaGyaltshen,
                },
                {
                  src: KuengaWangpo,
                  name: "KUENGA WANGPO",
                  className: styles.KuengaWangpoContainer,
                  cardClass: styles.KuengaWangpoCard,
                  imgClass: styles.KuengaWangpo,
                },
                {
                  src: Sangda,
                  name: "SANGDA",
                  className: styles.SangdaContainer,
                  cardClass: styles.SangdaCard,
                  imgClass: styles.Sangda,
                },
              ].map(({ src, name, className, cardClass, imgClass }, index) => (
                <motion.div
                  key={index}
                  className={className}
                  onClick={() => handleContainerClick(index)}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      currentStep === index || currentStep === null ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className={imgClass}>
                    <img src={src} alt={name} />
                  </div>
                  <div className={cardClass}>{name}</div>
                </motion.div>
              ))}
            </div>

            {/* Conditional Rendering of Secondary Containers */}
            {currentStep !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {currentStep === 0 && (
                  <motion.div
                    className={styles.TamshingContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <hr className={styles.TamshingVerticalLine} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className={styles.SonsTree}
                    >
                      <div className={styles.Choeje}>CHOEJE</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <hr className={styles.TamshingVerticalLine1} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className={styles.Tamshing}
                    >
                      <img src={Tamshing} alt="Tamshing" />{" "}
                      <div className={styles.TamshingCard}>TAMSHING</div>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    className={styles.PrakharContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <hr className={styles.PrakharVerticalLine} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className={styles.SonsTree}
                    >
                      <div className={styles.PrakharChoeje}>CHOEJE</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <hr className={styles.PrakharVerticalLine1} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className={styles.Prakhar}
                    >
                      <img src={Prakhar} alt="Prakhar" />
                      <div className={styles.PrakharCard}>PRAKHAR</div>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    className={styles.KuengaFamilyContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <motion.hr
                      className={styles.DungkarVerticalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }} // 0.5 seconds
                    />
                    <motion.div className={styles.SonsTree}>
                      <motion.div
                        className={styles.KochungChoeje}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }} // 1.0 seconds
                      >
                        CHOEJE
                      </motion.div>
                    </motion.div>
                    <motion.hr
                      className={styles.KochungHorizontalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }} // 1.5 seconds
                    />
                    <motion.hr
                      className={styles.KochungVerticalLine1}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }} // 2.0 seconds
                    />
                    <motion.div
                      className={styles.KochungContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }} // 2.5 seconds
                    >
                      <div className={styles.Kochung}>
                        <img src={Kochung} alt="Kochung" />
                      </div>
                      <div className={styles.KochungCard}>KOCHUNG</div>
                    </motion.div>

                    <motion.hr
                      className={styles.KochungHorizontalLine2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 3.0 }} // 3.0 seconds
                    />
                    <motion.hr
                      className={styles.KochungVerticalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 3.5 }} // 3.5 seconds
                    />
                    <motion.div
                      className={styles.BidungContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 4.0 }} // 4.0 seconds
                    >
                      <div className={styles.Bidung}>
                        <img src={Bidung} alt="Bidung" />
                      </div>
                      <div className={styles.BidungCard}>BIDUNG</div>
                    </motion.div>

                    <motion.hr
                      className={styles.KheriVerticalLine2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 4.5 }} // 4.5 seconds
                    />
                    <motion.hr
                      className={styles.KheriHorizontalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 5.0 }} // 5.0 seconds
                    />
                    <motion.hr
                      className={styles.KheriVerticalLine1}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 5.5 }} // 5.5 seconds
                    />
                    <motion.div
                      className={styles.KheriContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 6.0 }} // 6.0 seconds
                    >
                      <div className={styles.Kheri}>
                        <img src={Kheri} alt="Kheri" />
                      </div>
                      <div className={styles.KheriCard}>KHERI</div>
                    </motion.div>
                    <motion.hr
                      className={styles.KheriVerticalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 6.5 }} // 6.5 seconds
                    />

                    <motion.div
                      className={styles.DungkarContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 7.0 }} // 7.0 seconds
                    >
                      <div className={styles.Dungkar}>
                        <img src={Dungkar} alt="Dungkar" />
                      </div>
                      <div className={styles.DungkarCard}>DUNGKAR</div>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    className={styles.SangaFamilyContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <motion.hr
                      className={styles.TsakalingVerticalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }} // 0.5 seconds
                    />
                    <motion.hr
                      className={styles.TsakalingVerticalLine1}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }} // 0.7 seconds
                    />
                    <motion.hr
                      className={styles.TsakalingHorizontalLine}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }} // 0.9 seconds
                    />
                    <motion.hr
                      className={styles.TsakalingVerticalLine2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }} // 1.1 seconds
                    />
                    <motion.hr
                      className={styles.TsakalingVerticalLine3}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.3 }} // 1.3 seconds
                    />
                    <motion.hr
                      className={styles.TsakalingVerticalLine4}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }} // 1.5 seconds
                    />

                    <motion.div
                      className={styles.TsakalingContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.7 }} // 1.7 seconds
                    >
                      <div className={styles.SonsTree}>
                        <div className={styles.TsakalingChoeje}>CHOEJE</div>
                      </div>
                      <div className={styles.Tsakaling}>
                        <img src={Tsakaling} alt="Tsakaling" />
                      </div>
                      <div className={styles.TsakalingCard}>TSAKALING</div>
                    </motion.div>

                    <motion.div
                      className={styles.DrophuContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.9 }} // 1.9 seconds
                    >
                      <div className={styles.Drophu}>
                        <img src={Drophu} alt="Drophu" />
                      </div>
                      <div className={styles.DrophuCard}>DROPHU</div>
                    </motion.div>

                    <motion.div
                      className={styles.DrametseContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.1 }} // 2.1 seconds
                    >
                      <div className={styles.Drametse}>
                        <img src={Drametse} alt="Drametse" />
                      </div>
                      <div className={styles.DrametseCard}>DRAMETSE</div>
                    </motion.div>

                    <motion.div
                      className={styles.YagangContainer}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.3 }} // 2.3 seconds
                    >
                      <div className={styles.Yagang}>
                        <img src={Yagang} alt="Yagang" />
                      </div>
                      <div className={styles.YagangCard}>YAGANG</div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </>
      )}
      <NextIcon
        showIcons={showIcons}
        whiteImage={true}
        left="75.8%"
        top="82%"
        height="70px"
        width="80px"
        margin="25px"
        background="#3A1701"
        color="#FFD9BC"
        onClick={handleShowCards}
      />
    </div>
  );
};

export default LineageCard;
