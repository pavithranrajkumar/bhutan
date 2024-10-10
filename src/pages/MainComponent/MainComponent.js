import React from "react";
import grpImg from "../../assests/SideIcons/Group.png";
import styles from "./MainComponent.module.css";
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <div>
      <hr className={styles.horizontalLine1} />
      <div className={styles.radioBtnTwo}>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.supineRadioBtnTwo}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.supineTwo}>1594 - 1651</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.guruRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.guruTwo}>1450 - 1521</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.tibetanRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.tibetanTwo}>1200 - 1800</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.pemaRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.pemaTwo}>900 - 100</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.zhabrugRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.zhabrugTwo}>
            <span>800 </span> - <span> 900</span>
          </div>
        </div>
      </div>
      <div className={styles.Header}>HISTORY OF BHUTAN</div>
      <hr className={styles.horizontalLine2} />
      <div className={styles.radioBtn}>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.supineRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.supine}>800 - 900</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.guruRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.guru}>900 - 1000</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.tibetanRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.tibetan}>1200 - 1800</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.pemaRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.pema}>1450 - 1521</div>
        </div>
        <img
          src={grpImg}
          alt="radiobtn"
          className={styles.zhabrugRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <div className={styles.YearTwo}>
          <div className={styles.zhabrug}>1594 - 1651</div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
