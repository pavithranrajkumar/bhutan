import React from "react";
import { useLottie } from "lottie-react";
import Character5 from "./Character5";

const characterNameMap = {
  character5: Character5,
};
const AnimatedCharacter = ({ characterName }) => {
  const options = {
    animationData: characterNameMap[characterName],
    loop: true,
  };

  const { View } = useLottie(options);

  return <div style={{ width: 300, height: 300 }}>{View}</div>;
};

export default AnimatedCharacter;
