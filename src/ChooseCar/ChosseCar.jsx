import React, { Component } from "react";
import dataCar from "./arrayFeatures.json";
import dataWheels from "./wheels.json";
// import ThreeSixty from "js-cloudimage-360-view/dist";
// import ThreeSixty from "react-360-view";

export default class ChosseCar extends Component {
  state = {
    id: 1,
    srcImg: "images-black/images-black-1/",
    color: "Black",
    price: "19,550",
    engineType: "In-Line 4-Cylinder",
    displacement: "1996 cc",
    horsepower: "158 @ 6500 rpm",
    torque: "138 lb-ft @ 4200 rpm",
    redline: "6700 rpm",
    wheels: [
      {
        idWheel: 1,
        srcImg: "images-black/images-black-1/",
      },
      {
        idWheel: 2,
        srcImg: "images-black/images-black-2/",
      },
      {
        idWheel: 3,
        srcImg: "images-black/images-black-3/",
      },
    ],
  };
  // kiếm ra bánh xe
  findWheel = (arrWheels, value) => {
    let wheel = arrWheels.filter((wheel) => {
      return wheel.idWheel === value;
    });
    // console.log(wheel[0]);
    return wheel[0].srcImg;
  };
  // Hàm thay đổi bánh xe
  handleWheel = (srcImg) => {
    this.setState({
      srcImg,
    });
  };
  //hàm thay đổi màu xe
  handleColorCar = (
    id,
    srcImg,
    color,
    price,
    engineType,
    displacement,
    horsepower,
    torque,
    redline,
    wheels
  ) => {
    this.setState({
      id,
      srcImg,
      color,
      price,
      engineType,
      displacement,
      horsepower,
      torque,
      redline,
      wheels,
    });
  };

  //Render ra màu xe
  renderColor = (dataCar) => {
    return dataCar.map((colorCar, index) => {
      const {
        id,
        title,
        type,
        img,
        srcImg,
        color,
        price,
        engineType,
        displacement,
        horsepower,
        torque,
        redline,
        wheels,
      } = colorCar;
      return (
        <li
          className="list-group-item"
          key={index}
          onClick={() => {
            this.handleColorCar(
              id,
              srcImg,
              color,
              price,
              engineType,
              displacement,
              horsepower,
              torque,
              redline,
              wheels
            );
          }}
        >
          <div className="row">
            <div className="co-2">
              <img src={img} width="50px" />
            </div>
            <div className="col-10">
              <span>{title}</span>
              <p>{type}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  // render ra danh sách bánh xe
  renderWheels = (dataWheels, arrWheels) => {
    return dataWheels.map((wheel, index) => {
      const { idWheel, img, title, price } = wheel;
      return (
        <li
          className="list-group-item"
          key={index}
          onClick={() => {
            this.handleWheel(this.findWheel(arrWheels, idWheel));
          }}
        >
          <div className="row">
            <div className="co-2">
              <img src={img} width="70px" />
            </div>
            <div className="col-10">
              <span>{title}</span>
              <p>{price}$</p>
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    const DataCar = dataCar;
    const DataWheels = dataWheels;
    const {
      id,
      srcImg,
      color,
      price,
      engineType,
      displacement,
      horsepower,
      torque,
      redline,
      wheels,
    } = this.state;
    // console.log(wheels);
    // console.log(id)
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "417px" }}>
          <div className="col-8">
            <img
              src={"./images/" + srcImg + "civic-1.jpg"}
              width="100%"
              height="80%"
            />
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">Exterior Color</div>
              <ul className="list-group list-group-flush">
                {this.renderColor(DataCar)}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="card w-100">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">
                <h5 className="card-title">See More LX Features</h5>
                <div className="row">
                  <div className="col-6 pr-0">
                    <div
                      className="card"
                      style={({ width: "100%" }, { borderRadius: "0px" })}
                    >
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Color</li>
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Engine Type</li>
                        <li className="list-group-item">Displacement</li>
                        <li className="list-group-item">Horsepower</li>
                        <li className="list-group-item">Torque</li>
                        <li className="list-group-item">Redline</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div
                      className="card"
                      style={({ width: "100%" }, { borderRadius: "0px" })}
                    >
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{color}</li>
                        <li className="list-group-item">{price} $</li>
                        <li className="list-group-item">{engineType}</li>
                        <li className="list-group-item">{displacement}</li>
                        <li className="list-group-item">{horsepower}</li>
                        <li className="list-group-item">{torque}</li>
                        <li className="list-group-item">{redline}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">Wheels</div>
              <ul className="list-group list-group-flush">
                {this.renderWheels(DataWheels, wheels)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
