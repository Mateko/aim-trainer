import React from "react";
import { Redirect } from "react-router-dom";
import ShowTargets from "./ShowTargets";

class Game extends React.Component {
  state = { width: 0, height: 0, score: 0, goToScoreBoard: false };

  constructor(props) {
    super(props);

    this.countScore = this.countScore.bind(this);
    this.gameBoard = React.createRef();
  }

  componentDidMount() {
    if (this.gameBoard.current) {
      this.setState({
        width: this.gameBoard.current.offsetWidth,
        height: this.gameBoard.current.offsetHeight
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.score === nextState.score) {
      return true;
    } else {
      return false;
    }
  }

  countScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  checkTime = () => {
    const gameTime = this.props.location.state.gameDuration * 1000 + 3000;

    setTimeout(() => this.setState({ goToScoreBoard: true }), gameTime);
  };

  showTargets = (width, height, gameDuration, gameDifficult) => {
    if (width !== 0 && height !== 0) {
      return (
        <ShowTargets
          width={width}
          height={height}
          gameDuration={gameDuration}
          gameDifficult={gameDifficult}
          countScore={this.countScore}
        />
      );
    }
  };

  render() {
    const { width, height, score } = this.state;
    const { gameDuration, gameDifficult } = this.props.location.state;

    if (this.state.goToScoreBoard) {
      return (
        <Redirect
          to={{
            pathname: "/result",
            state: { gameDuration, gameDifficult, score }
          }}
        />
      );
    }

    this.checkTime();

    return (
      <main className="page" ref={this.gameBoard}>
        {this.showTargets(width, height, gameDuration, gameDifficult)}
      </main>
    );
  }
}
export default Game;
