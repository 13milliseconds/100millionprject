import React, { Component } from "react";

import CircleChart from "../Charts/CircleChart";
import { fakeData, swingStates } from "../../Data/sharedData.js";
import AppHeader from "../AppHeader/AppHeader";
import { Select } from "../Shared/Select";

class SwingStatesCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: fakeData,
      activeIndex: 1
    };
  }
  handleChange = event => {
    console.log('here')
    this.setState({ value: event.target.value });
  };

  handleClick = event => {
    console.log("hr", event.target.name);

    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
  

    let options = swingStates.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

    console.log(this.state);
    const title = "What is the most important issue facing the U.S. today?";
    return (
      <div className="swing-states-bar">
        <AppHeader />
        <main className="swing-states-main">
          <h3 className="title-swing-bar">Swing States</h3>
          <form>
            <div className="select-box">
              <Select
                value={this.state.value}
                handleChange={this.handleChange}
                options={options}
                className={"select"}
              />
            </div>
          </form>
          <CircleChart
            title={title}
            fakeData={fakeData}
            swingStates={swingStates}
            type={this.state.activeIndex}
            value={this.state.value}
          />

          <div className="swing-circle-selectors">
            {this.state.fakeData[0].children.map((el, index) => (
              <div
                key={index}
                active={this.state.activeIndex === index ? 1 : 0}
                onClick={() =>
                  this.setState({ activeIndex: index, name: el.name })
                }
                name={el.name}
              >
                {el.name}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default SwingStatesCircle;
