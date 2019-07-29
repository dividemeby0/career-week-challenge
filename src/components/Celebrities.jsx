import React, { Component } from "react";
import axios from "axios";

export default class Celebrities extends Component {
  state = {
    celebrities: null,
    selected: false
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?page=1&api_key=bf5dbf851575aa8316b856f7f0ba7754`
      )
      .then(celebrities => {
        this.setState({ celebrities: celebrities.data.results });
      })
      .catch(error => console.log(error));
  }

  selectCeleb = evt => {
    console.log(evt.target);
    !this.state.selected
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  };

  render() {
    return (
      <div className="celebrities-container">
        <h1>Celebrities</h1>
        <div className="all-celebs">
          {this.state.celebrities &&
            this.state.celebrities.map((celebrity, i) => (
              <div key={i}>
                <div className="one-celeb-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${
                      celebrity.profile_path
                    }`}
                    alt="celebrity"
                    onClick={this.selectCeleb}
                  />
                  <p>{celebrity.name}</p>
                </div>
                {this.state.selected ? (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${
                        celebrity.profile_path
                      }`}
                      alt="celebrity"
                    />
                    <h2>{celebrity.name}</h2>
                    <h3>Known for</h3>
                    {celebrity.known_for.map((movie, i) => (
                      <div key={i}>
                        <img
                          src={`https://image.tmdb.org/t/p/w185/${
                            movie.poster_path
                          }`}
                          alt="movie poster"
                        />
                        <p>{movie.original_title}</p>
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
