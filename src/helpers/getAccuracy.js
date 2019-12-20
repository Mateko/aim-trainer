import { levels } from "./getTargets";

export const getAccuracy = (gameDuration, gameDifficult, score) => {
  return Math.round((score / levels[gameDifficult][gameDuration]) * 100);
};
