import React from "react";
import { Link } from "react-router-dom";

const StartGame = ({ gameDifficult, gameDuration }) => {
  if ((gameDifficult !== null) & (gameDuration !== null)) {
    return (
      <div>
        <div className="settings__border settings_border--complete"></div>
        <div className="settings__container">
          <Link
            className="settings__button"
            to={{
              pathname: "/game",
              state: { gameDuration, gameDifficult }
            }}
          >
            Start game
          </Link>
        </div>
      </div>
    );
  }

  if (gameDifficult !== null || gameDuration !== null) {
    return <div className="settings__border settings__border--half"></div>;
  }

  return null;
};

export default StartGame;
