import React from "react";
import Header from "./Header";
import StartGame from "./StartGame";

class Home extends React.Component {
  state = {
    gameDuration: null,
    gameDifficult: null
  };

  setDifficult(e) {
    this.setState({
      gameDifficult: e.target.value
    });
  }

  setTime(e) {
    this.setState({
      gameDuration: e.target.value
    });
  }

  render() {
    const { gameDuration, gameDifficult } = this.state;
    return (
      <main className="page">
        <Header />
        <section className="settings">
          <h4 className="settings__header">
            Time: {gameDuration ? gameDuration + " seconds" : null}
          </h4>
          <div className="settings__container">
            <button
              type="button"
              className="settings__time"
              value={10}
              onClick={this.setTime.bind(this)}
            >
              10s
            </button>
            <button
              className="settings__time"
              type="button"
              value={30}
              onClick={this.setTime.bind(this)}
            >
              30s
            </button>
            <button
              className="settings__time"
              type="button"
              value={60}
              onClick={this.setTime.bind(this)}
            >
              60s
            </button>
          </div>
          <h4 className="settings__header">
            Level of difficulty: {gameDifficult}
          </h4>
          <div className="settings__container">
            <button
              className="settings__difficult"
              type="button"
              value="Easy"
              onClick={this.setDifficult.bind(this)}
            >
              Easy
            </button>
            <button
              className="settings__difficult"
              type="button"
              value="Medium"
              onClick={this.setDifficult.bind(this)}
            >
              Medium
            </button>
            <button
              className="settings__difficult"
              type="button"
              value="Hard"
              onClick={this.setDifficult.bind(this)}
            >
              Hard
            </button>
          </div>
          <StartGame
            gameDifficult={gameDifficult}
            gameDuration={gameDuration}
          />
        </section>
      </main>
    );
  }
}

export default Home;
