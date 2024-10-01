import React from "react";
import grpImg from "../../assests/SideIcons/Group.png";
import styles from "./MainComponent.module.css";
import { motion } from "framer-motion";

const MainComponent = () => {
  const radioButtonAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1], // Scale up and down
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Slower fade in and out effect
  const textAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0], // Fade in and fade out
      transition: {
        duration: 2, // Increase duration for slower fade
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div>
      <hr className={styles.horizontalLine1} />
      <div className={styles.radioBtnTwo}>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.supineRadioBtnTwo}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.supineTwo}>1594 - 1651</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.guruRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.guruTwo}>1450 - 1521</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.tibetanRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.tibetanTwo}>1200 - 1800</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.pemaRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.pemaTwo}>900 - 100</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.zhabrugRadioBtnTwo}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.zhabrugTwo}>
              <span>800 </span> - <span> 900</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.Header}>HISTORY OF BHUTAN</div>
      <hr className={styles.horizontalLine2} />
      <div className={styles.radioBtn}>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.supineRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.supine}>800 - 900</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.guruRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.guru}>900 - 1000</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.tibetanRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.tibetan}>1200 - 1800</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.pemaRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.pema}>1450 - 1521</div>
          </div>
        </motion.div>
        <motion.img
          src={grpImg}
          alt="radiobtn"
          className={styles.zhabrugRadioBtn}
          // variants={radioButtonAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div initial="initial" animate="animate">
          <div className={styles.Year}>
            <div className={styles.zhabrug}>1594 - 1651</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainComponent;
