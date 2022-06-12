import React from "react";
import { Carousel } from "antd";
import { carouselItems } from "./data/carousel";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#F77B07",
};

export default function CarouselWrapper() {
  return (
    <Carousel autoplay>
      {carouselItems.map((item, index) => (
        <div key={index}>
          <h3 style={contentStyle}>{item}</h3>
        </div>
      ))}
    </Carousel>
  );
}
