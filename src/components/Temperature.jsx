import React, { Component } from "react";

export default class Temperature extends Component {
  state = {
    temperature: null
  };

  handleChange = evt => {
    this.setState({ temperature: evt.target.value });
  };

  render() {
    return (
      <div className="temperature-container">
        <h1>Temperature</h1>
        <input
          type="number"
          step="1"
          placeholder="Temperature in °C"
          onChange={this.handleChange}
          defaultValue="null"
        />
        {this.state.temperature < 10 ? (
          <p style={{ color: "blue" }}>
            It's cold{" "}
            <img
              src="https://github.githubassets.com/images/icons/emoji/unicode/2744.png"
              alt="snowflake emoji"
            />
          </p>
        ) : this.state.temperature < 30 ? (
          <p style={{ color: "black" }}>
            It's nice{" "}
            <img
              src="https://github.githubassets.com/images/icons/emoji/unicode/1f33c.png"
              alt="flower emoji"
            />
          </p>
        ) : (
          <p style={{ color: "red" }}>
            It's warm{" "}
            <img
              src="https://github.githubassets.com/images/icons/emoji/unicode/2600.png"
              alt="sun emoji"
            />
          </p>
        )}
      </div>
    );
  }
}
