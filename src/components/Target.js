import React from "react";
import "./styles.scss";
import Delay from "./Delay";

class Target extends React.Component {
  state = {
    width: this.props.position[0],
    height: this.props.position[1],
    destroyed: false
  };

  destroyTarget = () => {
    this.setState({
      width: 0,
      height: 0,
      destroyed: true
    });
  };

  render() {
    const { waitTime, countScore } = this.props;
    const width = this.state.width + "px";
    const height = this.state.height + "px";

    return (
      <Delay waitBeforeShow={waitTime}>
        <div className="game__container">
          <div
            className={`game__target ${
              this.state.destroyed ? null : `game__traget--display`
            }`}
            style={{ left: width, top: height }}
            onClick={() => {
              countScore();
              this.destroyTarget();
            }}
          ></div>
        </div>
      </Delay>
    );
  }
}

export default Target;
