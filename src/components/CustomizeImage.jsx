import React, { Component } from "react";

export default class CustomizeImage extends Component {
  state = {
    size: 100,
    url:
      "https://www.whiskas.co.uk/assets/img/breed/breeds-image/british_shorthair.jpg"
  };

  imageChange = evt => {
    this.setState({ url: evt.target.value });
  };

  sizeChange = evt => {
    this.setState({ size: evt.target.value });
  };

  render() {
    var imageStyle = {
      height: `${this.state.size}px`
    };

    return (
      <div className="custom-container">
        <h1>Customize Image</h1>
        <input
          type="text"
          name="url"
          defaultValue={this.state.url}
          onChange={this.imageChange}
        />
        <input
          type="range"
          name="size"
          id=""
          min="0"
          max="200"
          defaultValue={this.state.size}
          onChange={this.sizeChange}
        />
        <img src={this.state.url} alt="square-pic" style={imageStyle} />
        <p>
          {this.state.size} x {this.state.size} px
        </p>
      </div>
    );
  }
}
