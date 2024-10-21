import React from "react";
import Lottie from "react-lottie";
import supineAnimData from "./01-Supine/data";
import rinpocheAnimData from "./02-Rinpoche/data";
import rinpoche2AnimData from "./02-Rinpoche2/data";
import tibetanAnimData from "./03-Tibetan/data";
import pemaAnimData from "./04-Pema/data";
import zhabdrungAnimData from "./05-Zhabdrung/data";

const animationRenderMap = {
  supine: supineAnimData,
  rinpoche: rinpocheAnimData,
  rinpoche2: rinpoche2AnimData,
  tibetan: tibetanAnimData,
  pema: pemaAnimData,
  zhabdrung: zhabdrungAnimData,
  rinpocheTop: rinpocheAnimData,
  pemaTop: pemaAnimData,
  zhabdrungTop: zhabdrungAnimData,
  tibetanTop: tibetanAnimData,
  supineTop: supineAnimData,
};

const styleRenderMap = {
  supine: {
    left: "3.3%",
    top: "81.8%",
    width: "600px",
    height: "450px",
    position: "fixed",
    zIndex: "1",
    background: "transparent",
  },
  rinpoche: {
    left: "21%",
    top: "72%",
    width: "600px",
    height: "220px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  rinpoche2: {
    left: "22%",
    top: "70%",
    width: "570px",
    height: "250px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  tibetan: {
    left: "45.8%",
    top: "83%",
    width: "450px",
    height: "280px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  pema: {
    left: "58.4%",
    top: "72.8%",
    width: "700px",
    height: "300px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  zhabdrung: {
    left: "86.5%",
    top: "84.2%",
    width: "200px",
    height: "360px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  rinpocheTop: {
    left: "21.2%",
    bottom: "33%",
    width: "570px",
    height: "250px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  pemaTop: {
    left: "58.4%",
    top: "45%",
    width: "700px",
    height: "300px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  zhabdrungTop: {
    left: "87%",
    top: "68%",
    width: "200px",
    height: "360px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  tibetanTop: {
    left: "42%",
    top: "70%",
    width: "450px",
    height: "280px",
    zIndex: "1",
    position: "fixed",
    background: "transparent",
  },
  supineTop: {
    left: "3%",
    top: "60%",
    width: "600px",
    height: "450px",
    position: "fixed",
    zIndex: "1",
    background: "transparent",
  },
};

export default class CharacterAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const { characterName } = this.props;
    const defaultOptions = {
      loop: true,
      animationData: animationRenderMap[characterName],
    };

    // Get the base styles for the current character
    const baseStyles = styleRenderMap[characterName] || {};

    // Container for Lottie animation
    const containerStyles = {
      ...baseStyles,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    // Apply scaling only to "tibetan"
    const animationStyles =
      characterName === "tibetan"
        ? { transform: "scale(1.5)", transformOrigin: "right" }
        : {};

    return (
      <div style={containerStyles}>
        <Lottie
          options={defaultOptions}
          isPaused={this.state.isPaused}
          isStopped={this.state.isStopped}
          style={animationStyles} // Scale Lottie animation only
        />
      </div>
    );
  }
}
