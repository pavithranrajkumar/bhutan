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
import { motion } from "framer-motion"; // Import motion

const LineageCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "7.5px" : "11px";
  const treeFonstSize = language === BHUTAN ? "14px" : "13px";

  const [currentStep, setCurrentStep] = useState(null); // No step is active initially

  const handleContainerClick = (index) => {
    setCurrentStep(index); // Set the active step
  };

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
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
              <div
                className={styles.Header}
                style={{ fontSize: treeFonstSize }}
              >
                {PEMA_LINGPA_INFORMATION[language].title}
              </div>
              <div className={styles.Sons}>SONS</div>
              <hr className={styles.SonsVerticalLine} />
              <hr className={styles.SonsHorizontalLine} />
              <hr className={styles.SonsHorizontalLine2} />
              <hr className={styles.SonsVerticalLine1} />
              <hr className={styles.SonsVerticalLine2} />
              <hr className={styles.SonsVerticalLine3} />
              <hr className={styles.SonsVerticalLine4} />

              {/* Family Heads with full opacity initially */}
              <div
                className={styles.DrakpaGyalpoContainer}
                onClick={() => handleContainerClick(0)}
                style={{
                  opacity: currentStep === 0 || currentStep === null ? 1 : 0.5,
                }} // Full opacity for active or initially
              >
                <div className={styles.DrakpaGyalpo}>
                  <img src={DrakpaGyalpo} alt="Drakpa Gyalpo" />
                </div>
                <div className={styles.DrakpaGyalpoCard}>DRAKPA GYALPO</div>
              </div>

              <div
                className={styles.DawaGyaltshenContainer}
                onClick={() => handleContainerClick(1)}
                style={{
                  opacity: currentStep === 1 || currentStep === null ? 1 : 0.5,
                }} // Full opacity for active or initially
              >
                <div className={styles.DawaGyaltshen}>
                  <img src={DawaGyaltshen} alt="Dawa Gyaltshen" />
                </div>
                <div className={styles.DawaGyaltshenCard}>DAWA GYALTSHEN</div>
              </div>

              <div
                className={styles.KuengaWangpoContainer}
                onClick={() => handleContainerClick(2)}
                style={{
                  opacity: currentStep === 2 || currentStep === null ? 1 : 0.5,
                }} // Full opacity for active or initially
              >
                <div className={styles.KuengaWangpo}>
                  <img src={KuengaWangpo} alt="Kuenga Wangpo" />
                </div>
                <div className={styles.KuengaWangpoCard}>KUENGA WANGPO</div>
              </div>

              <div
                className={styles.SangdaContainer}
                onClick={() => handleContainerClick(3)}
                style={{
                  opacity: currentStep === 3 || currentStep === null ? 1 : 0.5,
                }} // Full opacity for active or initially
              >
                <div className={styles.Sangda}>
                  <img src={Sangda} alt="Sangda" />
                </div>
                <div className={styles.SangdaCard}>SANGDA</div>
              </div>
            </div>

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
                  <div className={styles.Choeje}>CHOEJE</div>
                </div>
                <div className={styles.Tamshing}>
                  <img src={Tamshing} alt="Tamshing" />
                </div>
                <div className={styles.TamshingCard}>TAMSHING</div>
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
                  <div className={styles.PrakharChoeje}>CHOEJE</div>
                </div>
                <div className={styles.Prakhar}>
                  <img src={Prakhar} alt="Prakhar" />
                </div>
                <div className={styles.PrakharCard}>PRAKHAR</div>
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
                    <div className={styles.KochungChoeje}>CHOEJE</div>
                  </div>
                  <div className={styles.Kochung}>
                    <img src={Kochung} alt="Kochung" />
                  </div>
                  <div className={styles.KochungCard}>KOCHUNG</div>
                </div>

                <div className={styles.BidungContainer}>
                  <div className={styles.Bidung}>
                    <img src={Bidung} alt="Bidung" />
                  </div>
                  <div className={styles.BidungCard}>BIDUNG</div>
                </div>

                <div className={styles.KheriContainer}>
                  <div className={styles.Kheri}>
                    <img src={Kheri} alt="Kheri" />
                  </div>
                  <div className={styles.KheriCard}>KHERI</div>
                </div>

                <div className={styles.DungkarContainer}>
                  <div className={styles.Dungkar}>
                    <img src={Dungkar} alt="Dungkar" />
                  </div>
                  <div className={styles.DungkarCard}>DUNGKAR</div>
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
                    <div className={styles.TsakalingChoeje}>CHOEJE</div>
                  </div>
                  <div className={styles.Tsakaling}>
                    <img src={Tsakaling} alt="Tsakaling" />
                  </div>
                  <div className={styles.TsakalingCard}>TSAKALING</div>
                </div>

                <div className={styles.DrophuContainer}>
                  <div className={styles.Drophu}>
                    <img src={Drophu} alt="Drophu" />
                  </div>
                  <div className={styles.DrophuCard}>DROPHU</div>
                </div>

                <div className={styles.DrametseContainer}>
                  <div className={styles.Drametse}>
                    <img src={Drametse} alt="Drametse" />
                  </div>
                  <div className={styles.DrametseCard}>DRAMETSE</div>
                </div>

                <div className={styles.YagangContainer}>
                  <div className={styles.Yagang}>
                    <img src={Yagang} alt="Yagang" />
                  </div>
                  <div className={styles.YagangCard}>YAGANG</div>
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
