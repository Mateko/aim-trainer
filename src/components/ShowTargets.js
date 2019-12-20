import React from "react";
import { getTargets } from "../helpers/getTargets";
import Target from "./Target";

const ShowTargets = ({
  width,
  height,
  gameDifficult,
  gameDuration,
  countScore
}) => {
  const [randomPositions, targetRespawnTime] = getTargets(
    width,
    height,
    gameDifficult,
    gameDuration
  );

  return randomPositions.map((position, index) => (
    <Target
      key={position}
      position={position}
      waitTime={targetRespawnTime * index * 0.8}
      countScore={countScore}
    />
  ));
};

export default ShowTargets;
