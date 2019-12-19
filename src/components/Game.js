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

  timeEnd = () => {
    const gameTime = this.props.location.state.gameDuration * 1000 + 3000;

    setTimeout(() => this.setState({ goToScoreBoard: true }), gameTime);
  };

  showTargets = () => {
    const { width, height } = this.state;
    const { gameDuration, gameDifficult } = this.props.location.state;

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
    if (this.state.goToScoreBoard) {
      return <Redirect to="/result" />;
    }
    this.timeEnd();
    return (
      <main className="page" ref={this.gameBoard}>
        {this.showTargets()}
      </main>
    );
  }
}
export default Game;
