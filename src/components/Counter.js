import React from "react";
import Delay from "./Delay";

const Counter = ({ gameDuration }) => {
  const lastFiveSeconds = [5, 4, 3, 2, 1];
  const lastFiveSecondsTimestamp = gameDuration * 1000 - 2000;

  return lastFiveSeconds.map((second, index) => {
    return (
      <Delay waitBeforeShow={lastFiveSecondsTimestamp + index * 1000}>
        <div className="game__counter game__counter--animation">{second}</div>
      </Delay>
    );
  });
};

export default Counter;
