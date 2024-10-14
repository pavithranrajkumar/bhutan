import React, { useState } from "react";
import Card from "../../../../../components/Card/Card";
import { PEMA_LINGPA_INFORMATION } from "../../../../../constants/Characters/PremaLingpa";
import styles from "./PelingDanceVideoCard.module.css";
import video1 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/PelingMaskDance.mp4";
import video2 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/VTS_01_1.mp4";
import video3 from "../../../../../assests/PemaLingpa/Legacy/PelingVideos/VTS_01_2.mp4";
import { BHUTAN } from "../../../../../constants/languages/Language";

const PelingDanceVideoCard = ({ showIntro, language }) => {
  const titleFontSize = language === BHUTAN ? "12px" : "20px";
  const fonstSize = language === BHUTAN ? "8.5px" : "11.1px";

  const [isVideoEnlarged, setIsVideoEnlarged] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [video1, video2, video3];

  const handleVideoClick = (videoIndex) => {
    setCurrentVideo(videoIndex);
    setIsVideoEnlarged(true);
  };

  const handlePreviousClick = () => {
    setIsVideoEnlarged(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      {showIntro && (
        <>
          <div style={{ display: "flex" }}>
            {videos.map((videoSrc, index) => (
              <div
                key={index}
                className={styles[`pelingdanceImg${index + 1}`]}
                onClick={() => handleVideoClick(index)}
              >
                <video className={styles.videoFrame} autoPlay muted loop>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PelingDanceVideoCard;
