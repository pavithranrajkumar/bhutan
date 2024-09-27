import React, { useState } from "react";
import styles from "./KurjeLhakhang.module.css";
import temple from "../../../../../../assests/Guru/Historic/Kurjetemple.png";
import Card from "../../../../../../components/Card/Card";
import { GURU_INFORMATION } from "../../../../../../constants/Characters/Guru";

const KurjeLhakhang = ({ showIntro, onKurjeTempleClick }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="250px"
            titleFontSize="25px"
            contentFontSize="11.5px"
            borderBottom="0.5px solid #2B455D"
            color="#2B455D"
            backgroundColor="#C9D7EE"
            title={GURU_INFORMATION[language].kurjeLhakhang.title}
            content={GURU_INFORMATION[language].kurjeLhakhang.content}
            language={language}
            showIntro={showIntro}
          />
          <div className={styles.KurjeTempleImg} onClick={onKurjeTempleClick}>
            <img src={temple} alt="temple" />
          </div>
        </>
      )}
    </div>
  );
};

export default KurjeLhakhang;
