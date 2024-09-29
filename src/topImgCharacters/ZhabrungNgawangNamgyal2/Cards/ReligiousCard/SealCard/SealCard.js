import React, { useState } from "react";
import Card from "../../../../../components/Card/Card";
import styles from "./SealCard.module.css";
import { ZHABRUNG_INFORMATION } from "../../../../../constants/Characters/ZhabrungNgawangNamgyal";
import seal from "../../../../../assests/Zhabrung/Cards/Historic/Seal.png";

const SealCard = ({ showIntro }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="260px"
            titleFontSize="20px"
            contentFontSize="10.5px"
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
            <div style={{ margin: "3px" }}>
              <p>
                I turn the wheel of the dual systems (of secular and spiritual).
              </p>
              <p>I am a good refuge for all.</p>
              <p>I hold the teachings of the glorious Drukpa.</p>
              <p>I destroy those who feign to be Drukpa.</p>
              <p>I have become Sarasvatī in composition.</p>
              <p>I am the pure source of moral aphorisms.</p>
              <p>I am the master of views free from extremes.</p>
              <p>I refute those with wrong views.</p>
              <p>I am the master of power and strength in debates.</p>
              <p>Who is the rival that does not tremble before me?</p>
              <p>I am the hero who destroys hosts of demons.</p>
              <p>Who is the powerful one that can repulse my power?</p>
              <p>I am the lord of speech in expounding religion.</p>
              <p>I am learned in all sciences.</p>
              <p>I am the incarnation prophesied by the patriarchs.</p>
              <p>I am the eliminator of deviant incarnations.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SealCard;
