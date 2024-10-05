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
import NextIcon from "../../../../components/Card/Icons/NextIcon/NextIcon";
import { BHUTAN } from "../../../../constants/languages/Language";

const LineageCard = ({ showIntro, language, showIcons }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const fonstSize = language === BHUTAN ? "7.5px" : "11px";
  const treeFonstSize = language === BHUTAN ? "5.3px" : "13px";

  const [currentStep, setCurrentStep] = useState(0);

  const familySteps = [
    { primary: "DrakpaGyalpoContainer", secondary: "TamshingContainer" },
    { primary: "DawaGyaltshenContainer", secondary: "PrakharContainer" },
    { primary: "KuengaWangpoContainer", secondary: "KuengaFamilyContainer" },
    { primary: "SangdaContainer", secondary: "SangaFamilyContainer" },
  ];

  const handleNextClick = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % familySteps.length);
  };

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="280px"
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
              <div
                className={styles.DrakpaGyalpoContainer}
                style={{
                  opacity: currentStep === 0 ? 1 : 0.5,
                }}
              >
                <hr className={styles.SonsVerticalLine1} />
                <div className={styles.DrakpaGyalpo}>
                  <img src={DrakpaGyalpo} alt="" />
                </div>
                <div className={styles.DrakpaGyalpoCard}>DRAKPA GYALPO</div>
              </div>

              <div
                className={styles.DawaGyaltshenContainer}
                style={{
                  opacity: currentStep === 1 ? 1 : 0.5,
                }}
              >
                <hr className={styles.SonsVerticalLine2} />
                <div className={styles.DawaGyaltshen}>
                  <img src={DawaGyaltshen} alt="" />
                </div>
                <div className={styles.DawaGyaltshenCard}>DAWA GYALTSHEN</div>
              </div>

              <div
                className={styles.KuengaWangpoContainer}
                style={{
                  opacity: currentStep === 2 ? 1 : 0.5,
                }}
              >
                <hr className={styles.SonsVerticalLine3} />
                <div className={styles.KuengaWangpo}>
                  <img src={KuengaWangpo} alt="" />
                </div>
                <div className={styles.KuengaWangpoCard}>KUENGA WANGPO</div>
              </div>

              <div
                className={styles.SangdaContainer}
                style={{
                  opacity: currentStep === 3 ? 1 : 0.5,
                }}
              >
                <hr className={styles.SonsVerticalLine4} />
                <div className={styles.Sangda}>
                  <img src={Sangda} alt="" />
                </div>
                <div className={styles.SangdaCard}>
                  <div style={{ marginTop: "3px" }}>SANGDA</div>
                </div>
              </div>
            </div>

            {/* Show only the active secondary container */}
            <div
              className={styles.TamshingContainer}
              style={{
                display: currentStep === 0 ? "block" : "none",
              }}
            >
              <div className={styles.SonsTree}>
                <div className={styles.Choeje}>CHOEJE</div>
              </div>
              <div className={styles.Tamshing}>
                <img src={Tamshing} alt="" />
              </div>
              <hr className={styles.TamshingVerticalLine} />
              <hr className={styles.TamshingVerticalLine1} />
              <div className={styles.TamshingCard}>
                <div style={{ marginTop: "3px" }}>TAMSHING</div>
              </div>
            </div>

            <div
              className={styles.PrakharContainer}
              style={{
                display: currentStep === 1 ? "block" : "none",
              }}
            >
              <div className={styles.SonsTree}>
                <div className={styles.PrakharChoeje}>CHOEJE</div>
              </div>
              <div className={styles.Prakhar}>
                <img src={Prakhar} alt="" />
              </div>
              <hr className={styles.PrakharVerticalLine} />
              <hr className={styles.PrakharVerticalLine1} />
              <div className={styles.PrakharCard}>
                <div style={{ marginTop: "3px" }}>PRAKHAR</div>
              </div>
            </div>

            <div
              className={styles.KuengaFamilyContainer}
              style={{
                display: currentStep === 2 ? "block" : "none",
              }}
            >
              <div className={styles.KochungContainer}>
                <div className={styles.SonsTree}>
                  <div className={styles.KochungChoeje}>CHOEJE</div>
                </div>
                <div className={styles.Kochung}>
                  <img src={Kochung} alt="" />
                </div>
                <hr className={styles.KochungHorizontalLine} />
                <hr className={styles.KochungHorizontalLine2} />
                <hr className={styles.KochungVerticalLine} />
                <hr className={styles.KochungVerticalLine1} />

                <div className={styles.KochungCard}>
                  <div style={{ marginTop: "2px" }}>KOCHUNG</div>
                </div>
              </div>

              <div className={styles.BidungContainer}>
                <div className={styles.Bidung}>
                  <img src={Bidung} alt="" />
                </div>

                <div className={styles.BidungCard}>
                  <div style={{ marginTop: "2px" }}>BIDUNG</div>
                </div>
              </div>

              <hr className={styles.KheriHorizontalLine} />
              <hr className={styles.KheriVerticalLine} />
              <hr className={styles.KheriVerticalLine1} />
              <hr className={styles.KheriVerticalLine2} />

              <div className={styles.KheriContainer}>
                <div className={styles.Kheri}>
                  <img src={Kheri} alt="" />
                </div>
                <div className={styles.KheriCard}>
                  <div style={{ marginTop: "2px" }}>KHERI</div>
                </div>
              </div>

              <div className={styles.DungkarContainer}>
                <div className={styles.Dungkar}>
                  <img src={Dungkar} alt="" />
                </div>
                <hr className={styles.DungkarVerticalLine} />
                <div className={styles.DungkarCard}>
                  <div style={{ marginTop: "2px" }}>DUNGKAR</div>
                </div>
              </div>
            </div>

            <div
              className={styles.SangaFamilyContainer}
              style={{
                display: currentStep === 3 ? "block" : "none",
              }}
            >
              <div className={styles.TsakalingContainer}>
                <div className={styles.SonsTree}>
                  <div className={styles.TsakalingChoeje}>CHOEJE</div>
                </div>
                <div className={styles.Tsakaling}>
                  <img src={Tsakaling} alt="" />
                </div>
                <hr className={styles.TsakalingVerticalLine} />
                <hr className={styles.TsakalingVerticalLine1} />
                <hr className={styles.TsakalingHorizontalLine} />
                <hr className={styles.TsakalingVerticalLine2} />
                <hr className={styles.TsakalingVerticalLine3} />
                <hr className={styles.TsakalingVerticalLine4} />

                <div className={styles.TsakalingCard}>
                  <div style={{ marginTop: "3px" }}>TSAKALING</div>
                </div>
              </div>

              <div className={styles.DrophuContainer}>
                <div className={styles.Drophu}>
                  <img src={Drophu} alt="" />
                </div>

                <div className={styles.DrophuCard}>
                  <div style={{ marginTop: "3px" }}>DROPHU</div>
                </div>
              </div>

              <div className={styles.DrametseContainer}>
                <div className={styles.Drametse}>
                  <img src={Drametse} alt="" />
                </div>

                <div className={styles.DrametseCard}>
                  <div style={{ marginTop: "3px" }}>DRAMETSE</div>
                </div>
              </div>

              <div className={styles.YagangContainer}>
                <div className={styles.Yagang}>
                  <img src={Yagang} alt="" />
                </div>

                <div className={styles.YagangCard}>
                  <div style={{ marginTop: "3px" }}>YAGANG</div>
                </div>
              </div>
            </div>
          </div>

          <NextIcon
            showIcons={showIcons}
            left="76%"
            top="48%"
            height="70px"
            width="80px"
            margin="25px"
            background="#3A1701"
            color="#FFD9BC"
            onClick={handleNextClick}
          />
        </>
      )}
    </div>
  );
};

export default LineageCard;
