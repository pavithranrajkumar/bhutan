import React from "react";
import frstImg from "../../../../../../assests/Guru/Historic/KurjeImgs/PhotoFrame.png";
import scndImg from "../../../../../../assests/Guru/Historic/KurjeImgs/PhotoFrame(1).png";
import ThrdImg from "../../../../../../assests/Guru/Historic/KurjeImgs/PhotoFrame(2).png";
import FrthImg from "../../../../../../assests/Guru/Historic/KurjeImgs/PhotoFrameMain(1).png";
import styles from "./KurjeLhakhangImgs.module.css";

const KurjeLhakhangImgs = () => {
  return (
    <div className={styles.KurjeLhakhangImgs}>
      <img className={styles.FirstImg} src={frstImg} alt="templeImgs" />
      {/* <img className={styles.SecondImg} src={scndImg} alt="templeImgs" />
      <img className={styles.ThirdImg} src={ThrdImg} alt="templeImgs" />
      <img className={styles.FourthImg} src={FrthImg} alt="templeImgs" /> */}
    </div>
  );
};

export default KurjeLhakhangImgs;
