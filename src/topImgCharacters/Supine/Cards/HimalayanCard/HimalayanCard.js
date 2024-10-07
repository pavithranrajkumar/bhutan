import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card/Card";
import { SUPINE_INFORMATION } from "../../../../constants/Characters/Supine";
import { BHUTAN } from "../../../../constants/languages/Language";
import styles from "./HimalayanCard.module.css";

const HimalayanCard = ({
  showIntro,
  language,
  puzzleCompleted,
  resetPuzzleCard,
}) => {
  const fonstSize = language === BHUTAN ? "7px" : "13px";
  const titleFontSize = language === BHUTAN ? "12px" : "30px";
  const [showPuzzlePiecesCard, setShowPuzzlePiecesCard] = useState(true);

  const resetPuzzleState = () => {
    setShowPuzzlePiecesCard(true); // Reset PuzzlePiecesCard when the puzzle is reset
  };

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
            width="220px"
            titleFontSize={titleFontSize}
            contentFontSize={fonstSize}
            borderBottom="0.5px solid white"
            title={SUPINE_INFORMATION[language].himalayan.title}
            content={SUPINE_INFORMATION[language].himalayan.content}
            language={language}
            showIntro={showIntro}
          />
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
                      {SUPINE_INFORMATION[language].puzzles.rightKnee.subHeader}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 0",
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
                      {SUPINE_INFORMATION[language].puzzles.leftHand.subHeader}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 0",
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
                      margin: "-3px 5px 0 0",
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
                      {SUPINE_INFORMATION[language].puzzles.rightHand.subHeader}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 5px",
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
                      {SUPINE_INFORMATION[language].puzzles.leftElbow.subHeader}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 0",
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
                      margin: "-3px 5px 0 5px",
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
                      {SUPINE_INFORMATION[language].puzzles.leftShoulder.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 5px",
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
                      margin: "-3px 5px 0 5px",
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
                      margin: "-3px 5px 0 0",
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
                      margin: "-3px 5px 0 0",
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
                      margin: "-3px 5px 0 5px",
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
                      margin: "-3px 5px 0 5px",
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
                      {SUPINE_INFORMATION[language].puzzles.rightFoot.subHeader}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 5px",
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
                <div className={styles.KneeRCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.rightKnee.header}
                      <span style={{ marginLeft: "5px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightKnee
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{ marginTop: "-4px" }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightKnee.title}
                  </div>
                </div>

                <div className={styles.LeftHCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftHand.header}
                      <span style={{ marginLeft: "3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.leftHand
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{ marginTop: "-3px" }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftHand.title}
                  </div>
                </div>

                <div className={styles.FootLCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftFoot.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      marginTop: "-3px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftFoot.title}{" "}
                  </div>
                </div>

                <div className={styles.HandRCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.rightHand.header}
                      <span style={{ marginLeft: "2px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightHand
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightHand.title}
                  </div>
                </div>

                <div className={styles.ElbowLCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftElbow.header}
                      <span style={{ marginLeft: "3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.leftElbow
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftElbow.title}
                  </div>
                </div>

                <div className={styles.HipRCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.rightHip.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightHip.title}{" "}
                  </div>
                </div>

                <div className={styles.ShoulderLCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftShoulder.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftShoulder.title}{" "}
                  </div>
                </div>

                <div className={styles.ElbowRightCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.rightElbow.header}
                      <span style={{ marginLeft: "3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightElbow
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightElbow.title}
                  </div>
                </div>

                <div className={styles.ShoulderRightCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {
                        SUPINE_INFORMATION[language].puzzles.rightShoulder
                          .header
                      }
                      <span style={{ marginLeft: "3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightShoulder
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      marginTop: "-3px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightShoulder.title}
                  </div>
                </div>

                <div className={styles.HeartCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.heart.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      marginTop: "-3px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.heart.title}{" "}
                  </div>
                </div>

                <div className={styles.KneeLCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftKnee.header}
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0px 0 0px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftKnee.title}{" "}
                  </div>
                </div>

                <div className={styles.HipLeftCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.leftHip.header}
                      <span style={{ marginLeft: "3px" }}>
                        {SUPINE_INFORMATION[language].puzzles.leftHip.subHeader}
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 5px 0 5px",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.leftHip.title}
                  </div>
                </div>

                <div className={styles.FootRightCard}>
                  <div className={styles.FirstText}>
                    <div>
                      {SUPINE_INFORMATION[language].puzzles.rightFoot.header}
                      <span style={{ marginLeft: "3px" }}>
                        {
                          SUPINE_INFORMATION[language].puzzles.rightFoot
                            .subHeader
                        }
                      </span>
                    </div>
                  </div>
                  <div
                    className={styles.SecondText}
                    style={{
                      margin: "-3px 0 0 0",
                    }}
                  >
                    {SUPINE_INFORMATION[language].puzzles.rightFoot.title}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HimalayanCard;
