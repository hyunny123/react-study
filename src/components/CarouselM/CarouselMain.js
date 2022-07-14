import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

var items = [
  {
    imgAddress: "./images/css.png",
  },
  {
    imgAddress: "./images/html.png",
  },
  {
    imgAddress: "./images/js.png",
  },
];

const CarouselMain = () => {
  //   const [heightList, setHeightList] = useState({ height: 0 });
  //   const componentDidMount = () => {
  //     window.addEventListener("resize", this.updateDimensions);
  //     this.updateDimensions();
  //   };

  //   const getMainDivHeight = () => {
  //     const mainImageWidth = 1920;
  //     const mainImageHeight = 900;
  //     return Math.floor((window.innerWidth * mainImageHeight) / mainImageWidth);
  //   };

  //   const updateDimensions = () => {
  //     this.setHeightList({ height: this.getMainDivHeight() });
  //   };
  return (
    <div>
      <Carousel
        indicators={true}
        // getMainDivHeight={getMainDivHeight}
        // componentDidMount={componentDidMount}
        // updateDimensions={updateDimensions}
      >
        {items.map((item, i) => (
          <div style={{ width: "100%", height: "auto" }}>
            <img
              src={item.imgAddress}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
