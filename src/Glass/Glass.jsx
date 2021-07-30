import React, { Component } from "react";
import "./styleGlass.css";
import dataGlass from "./dataGlasses.json";
export default class ChooseGlass extends Component {
  state = {
    url: "",
    name: "",
    desc: "",
  };
  handleGlass = (url, name, desc) => {
    this.setState({
      url,
      name,
      desc,
    });
  };

  renderGlass = (dataGlass) => {
    return dataGlass.map((glass, index) => {
      const { id, price, name, url, desc } = glass;
      return (
        <div
          className="col-2 "
          key={id}
          onClick={() => this.handleGlass(url, name, desc)}
        >
          <img src={url} width="100px" style={{ margin: "10px" }} />
        </div>
      );
    });
  };
  render() {
    const data = dataGlass;
    const { url, name, desc } = this.state;
    return (
      <div className="container glassContainer pr-1 pl-1">
        <header>TRY GlASS APP ONLINE</header>
        <div className="row py-5 justify-content-center mr-0 ml-0">
          <div className="col-4">
            <div className="card cardGlass" style={{ width: "18rem" }}>
              <img src={url} className="card-img-top img-fluid imgGlass" />
              <div className="card-body card__body p-0">
                <h5 className="card-title">{name}</h5>
                <p className="card-text ">{desc}</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card cardGlass" style={{ width: "18rem" }}></div>
          </div>
        </div>
        <div className="row itemsGlass justify-content-center mr-0 ml-0">
          {this.renderGlass(data)}
        </div>
      </div>
    );
  }
}
