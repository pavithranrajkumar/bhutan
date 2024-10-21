import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import { BHUTAN } from "../../../../constants/languages/Language";
import styles from "./HimalayanCard.module.css";
import Puzzle from "../../../../pages/Puzzle/Puzzle";
import { motion } from "framer-motion";

const HimalayanCard = ({
  showIntro,
  language,
  puzzleCompleted,
  resetPuzzleCard,
}) => {
  const [showPuzzlePiecesCard, setShowPuzzlePiecesCard] = useState(true);
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const resetPuzzleState = () => {
    setShowPuzzlePiecesCard(true); // Reset PuzzlePiecesCard when the puzzle is reset
  };

  const cards = [
    {
      key: "KneeRCard",
      header: SUPINE_INFORMATION[language].puzzles.rightKnee.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.rightKnee.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.rightKnee.title,
    },
    {
      key: "LeftHCard",
      header: SUPINE_INFORMATION[language].puzzles.leftHand.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.leftHand.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.leftHand.title,
    },
    {
      key: "FootLCard",
      header: SUPINE_INFORMATION[language].puzzles.leftFoot.header,
      title: SUPINE_INFORMATION[language].puzzles.leftFoot.title,
    },
    {
      key: "HandRCard",
      header: SUPINE_INFORMATION[language].puzzles.rightHand.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.rightHand.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.rightHand.title,
    },
    {
      key: "ElbowLCard",
      header: SUPINE_INFORMATION[language].puzzles.leftElbow.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.leftElbow.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.leftElbow.title,
    },
    {
      key: "HipRCard",
      header: SUPINE_INFORMATION[language].puzzles.rightHip.header,
      title: SUPINE_INFORMATION[language].puzzles.rightHip.title,
    },
    {
      key: "ShoulderLCard",
      header: SUPINE_INFORMATION[language].puzzles.leftShoulder.header,
      title: SUPINE_INFORMATION[language].puzzles.leftShoulder.title,
    },
    {
      key: "ElbowRightCard",
      header: SUPINE_INFORMATION[language].puzzles.rightElbow.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.rightElbow.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.rightElbow.title,
    },
    {
      key: "ShoulderRightCard",
      header: SUPINE_INFORMATION[language].puzzles.rightShoulder.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.rightShoulder.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.rightShoulder.title,
    },
    {
      key: "HeartCard",
      header: SUPINE_INFORMATION[language].puzzles.heart.header,
      title: SUPINE_INFORMATION[language].puzzles.heart.title,
    },
    {
      key: "KneeLCard",
      header: SUPINE_INFORMATION[language].puzzles.leftKnee.header,
      title: SUPINE_INFORMATION[language].puzzles.leftKnee.title,
    },
    {
      key: "HipLeftCard",
      header: SUPINE_INFORMATION[language].puzzles.leftHip.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.leftHip.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.leftHip.title,
    },
    {
      key: "FootRightCard",
      header: SUPINE_INFORMATION[language].puzzles.rightFoot.header,
      subHeader: SUPINE_INFORMATION[language].puzzles.rightFoot.subHeader,
      title: SUPINE_INFORMATION[language].puzzles.rightFoot.title,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCardIndex((prevIndex) => {
        if (prevIndex < cards.length - 1) return prevIndex + 1;
        return prevIndex;
      });
    }, 1000); // Change card every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [cards.length]);

  useEffect(() => {
    if (puzzleCompleted) {
      setShowPuzzlePiecesCard(false); // Hide PuzzlePiecesCard when puzzle is completed
    }
  }, [puzzleCompleted]);

  useEffect(() => {
    resetPuzzleCard && resetPuzzleCard(resetPuzzleState); // Allow Puzzle component to trigger reset
  }, [resetPuzzleCard]);

  return (
    <div>
      {showIntro && (
        <>
          <Card
            width="210px"
            height="220px"
            borderBottom="0.5px solid white"
            title={SUPINE_INFORMATION[language].himalayan.title}
            content={SUPINE_INFORMATION[language].himalayan.content}
            language={language}
            showIntro={showIntro}
          />

          <motion.div
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Animation state
            transition={{ duration: 5, delay: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
          >
            {!puzzleCompleted && showPuzzlePiecesCard ? (
              <>
                <div className={styles.PuzzlePiecesCard}>
                  <div className={styles.KneeR}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {SUPINE_INFORMATION[language].puzzles.rightKnee.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightKnee
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightKnee.title}
                    </div>
                  </div>

                  <div className={styles.LeftH}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.leftHand.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {" "}
                        {
                          SUPINE_INFORMATION[language].puzzles.leftHand
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftHand.title}
                    </div>
                  </div>

                  <div className={styles.FootL}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.leftFoot.header}
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftFoot.title}{" "}
                    </div>
                  </div>

                  <div className={styles.HandR}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {SUPINE_INFORMATION[language].puzzles.rightHand.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightHand
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightHand.title}
                    </div>
                  </div>

                  <div className={styles.ElbowL}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.leftElbow.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {" "}
                        {
                          SUPINE_INFORMATION[language].puzzles.leftElbow
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftElbow.title}
                    </div>
                  </div>

                  <div className={styles.HipR}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.rightHip.header}
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightHip.title}{" "}
                    </div>
                  </div>

                  <div className={styles.ShoulderL}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {" "}
                        {
                          SUPINE_INFORMATION[language].puzzles.leftShoulder
                            .header
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftShoulder.title}{" "}
                    </div>
                  </div>

                  <div className={styles.ElbowRight}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {SUPINE_INFORMATION[language].puzzles.rightElbow.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightElbow
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightElbow.title}
                    </div>
                  </div>

                  <div className={styles.ShoulderRight}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {" "}
                        {
                          SUPINE_INFORMATION[language].puzzles.rightShoulder
                            .header
                        }
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {" "}
                        {
                          SUPINE_INFORMATION[language].puzzles.rightShoulder
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightShoulder.title}
                    </div>
                  </div>

                  <div className={styles.Heart}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 0",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.heart.header}
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 0",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.heart.title}{" "}
                    </div>
                  </div>

                  <div className={styles.KneeL}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {" "}
                        {SUPINE_INFORMATION[language].puzzles.leftKnee.header}
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftKnee.title}{" "}
                    </div>
                  </div>

                  <div className={styles.HipLeft}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {SUPINE_INFORMATION[language].puzzles.leftHip.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {SUPINE_INFORMATION[language].puzzles.leftHip.subHeader}
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.leftHip.title}
                    </div>
                  </div>

                  <div className={styles.FootRight}>
                    <div
                      className={styles.FirstText}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "3px 5px 0 5px",
                      }}
                    >
                      <div>
                        {SUPINE_INFORMATION[language].puzzles.rightFoot.header}
                      </div>
                      <div style={{ marginTop: "-3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightFoot
                            .subHeader
                        }
                      </div>
                    </div>
                    <div
                      className={styles.SecondText}
                      style={{
                        margin: "-2px 5px 0 5px",
                      }}
                    >
                      {SUPINE_INFORMATION[language].puzzles.rightFoot.title}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.PuzzleCards}>
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.key}
                      className={styles[card.key]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index <= visibleCardIndex ? 1 : 0 }}
                      transition={{ duration: 0.5 }} // Fade-in duration
                      style={{
                        display: index <= visibleCardIndex ? "block" : "none",
                      }} // Show the card if visible
                    >
                      <div className={styles.FirstText}>
                        <div>
                          {card.header}
                          {card.subHeader && (
                            <span style={{ marginLeft: "5px" }}>
                              {card.subHeader}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        className={styles.SecondText}
                      >
                        {card.title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default HimalayanCard;
