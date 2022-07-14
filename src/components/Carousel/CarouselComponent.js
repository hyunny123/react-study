import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const CarouselComponent = (CSSProperties) => {
  const arrowStyles = (CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 100,
    height: 100,
    cursor: "pointer",
  });

  const indicatorStyles = (CSSProperties = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  });
  return (
    <Container>
      <div className="carousel-wrapper">
        <Carousel infiniteLoop="true">
          <FirstPic src="./images/css.png" />
          <FirstPic src="./images/html.png" />
          <FirstPic src="./images/js.png" />
          <FirstPic src="./images/react.png" />
          {/* <div>
          <img src="./images/html.png" />
        </div>
        <div>
          <img src="./images/css.png" />
        </div>
        <div>
          <img src="./images/js.png" />
        </div>
        <div>
          <img src="./images/react.png" />
        </div> */}
        </Carousel>
      </div>
    </Container>
  );
};

export default CarouselComponent;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const FirstPic = styled.img`
  width: 100%;
  padding: 30px;
  background-color: #000;
`;
