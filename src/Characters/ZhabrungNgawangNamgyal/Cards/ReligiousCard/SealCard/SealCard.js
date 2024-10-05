import React, { useState } from "react";
import Card from "../../../../../components/Card/Card";
import styles from "./SealCard.module.css";
import { ZHABRUNG_INFORMATION } from "../../../../../constants/Characters/ZhabrungNgawangNamgyal";
import seal from "../../../../../assests/Zhabrung/Cards/Historic/Seal.png";
import { BHUTAN } from "../../../../../constants/languages/Language";

const SealCard = ({ showIntro, language }) => {
  const fonstSize = language === BHUTAN ? "5.5px" : "9px";
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const cardFonstSize = language === BHUTAN ? "7px" : "10.5px";
  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="260px"
            titleFontSize={titleFontSize}
            contentFontSize={cardFonstSize}
            borderBottom="0.5px solid #193145"
            backgroundColor="#C9D7EE"
            color="#193145"
            title={ZHABRUNG_INFORMATION[language].sealOfZhabdrung.title}
            content={ZHABRUNG_INFORMATION[language].sealOfZhabdrung.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.sealImage}>
            <img src={seal} alt="seal" />
          </div>
          <div className={styles.sealOfZhabdrungStatementCard}>
            <div style={{ margin: "3px", fontSize: fonstSize }}>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.first
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.second
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.third
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.fourth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.fifth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.sixth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.seventh
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.eighth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.ninth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.tenth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.eleventh
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.twelfth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.thirteenth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.fourteenth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.fifteenth
                }
              </p>
              <p style={{ fontSize: fonstSize }}>
                {
                  ZHABRUNG_INFORMATION[language].sealOfZhabdrungStatement
                    .content.sixteenth
                }
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SealCard;
