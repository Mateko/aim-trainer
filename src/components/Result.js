import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { getAccuracy, targetsOnCurrentLevel } from "../helpers/resultScore";

const Result = props => {
  const { gameDuration, gameDifficult, score } = props.location.state;
  const accuracy = getAccuracy(gameDuration, gameDifficult, score);
  const allTargets = targetsOnCurrentLevel(gameDuration, gameDifficult);

  return (
    <main className="page">
      <Header />
      <section className="result">
        <div className="result__container">
          <h1 className="result__header result__header--main">Time end!</h1>
        </div>
        <div className="result__container">
          <h2 className="result__header">
            Mode:<span className="result__settings">{gameDifficult}</span>
          </h2>
        </div>
        <div className="result__container">
          <h2 className="result__header">
            Time:<span className="result__settings">{gameDuration}s</span>
          </h2>
        </div>
        <div className="result__container">
          <h2 className="result__header">Score:</h2>
          <h3 className="result__header">
            <span className="result__score">
              {score} / {allTargets}
            </span>
          </h3>
        </div>
        <div className="result__container">
          <h2 className="result__header">
            Accuracy:
            <span className="result__score">{accuracy}%</span>
          </h2>
        </div>
        <div className="result__container">
          <Link className="result__button" to="/">
            Play Again!
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Result;
