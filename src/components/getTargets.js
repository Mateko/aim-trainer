export const getTargets = (width, height, gameDifficult, gameDuration) => {
  const levels = {
    Easy: {
      10: 11,
      30: 33,
      60: 66
    },
    Medium: {
      10: 15,
      30: 46,
      60: 92
    },
    Hard: {
      10: 24,
      30: 73,
      60: 146
    }
  };

  const numberOfTargets = levels[gameDifficult][gameDuration];
  const initialArray = new Array(numberOfTargets).fill([0, 0]);
  let targetRespawnTime;

  const randomNumber = maxValue => {
    return Math.floor(Math.random() * maxValue) + 1;
  };

  console.log(width, height);

  const randomTargetPositions = initialArray.map(() => [
    randomNumber(width - 28),
    randomNumber(height - 28)
  ]);

  switch (gameDifficult) {
    case "Hard":
      targetRespawnTime = 500;
      break;
    case "Medium":
      targetRespawnTime = 800;
      break;
    case "Easy":
      targetRespawnTime = 1000;
      break;
    default:
      targetRespawnTime = 1000;
      break;
  }

  return [randomTargetPositions, targetRespawnTime];
};
