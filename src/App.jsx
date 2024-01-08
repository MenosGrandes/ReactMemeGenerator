import React from "react";

import MemeGenerator from "./components/MemeGenerator";
import SideBar from "./components/SideBar";
import { getBase64Image } from "./js/imageManipulators";

const photos = [{ src: "/images/one.png" }, { src: "/images/two.png" }];

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      modalIsOpen: false,
      currentImagebase64: null,
    };
  }

  openImage = (index) => {
    const image = photos[index];
    const base_image = new Image();
    base_image.src = image.src;
    const base64 = getBase64Image(base_image);
    this.setState((prevState) => ({
      currentImage: index,
      modalIsOpen: !prevState.modalIsOpen,
      currentImagebase64: base64,
    }));
  };

  toggle = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  render() {
    return (
      <div>
        <SideBar photos={photos} openImage={this.openImage}></SideBar>
        <MemeGenerator
          image={photos[this.state.currentImage]}
          state={this.state}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
