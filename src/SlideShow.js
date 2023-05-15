import React, { useState, useEffect } from "react";
import "./Styles/changer.css";
import image1 from "./Styles/assets/1.png"
import image2 from "./Styles/assets/2.png"
import image3 from "./Styles/assets/3.png"

export function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  function imageChanger() {
    switch (slideIndex) {
      case 0:
        return image1
      case 1:
        return image2
      case 2:
        return image3 
      default:
        break;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={imageChanger()} style={{ width: "200px" }} alt="imagechanger"/>
      <div className={slideIndex === 0 ? "mySlides fade show" : "mySlides fade"}>
    </div>
      <div style={{ textAlign: "center" }}>
        <span className={slideIndex === 0 ? "dot active" : "dot"}></span>
        <span className={slideIndex === 1 ? "dot active" : "dot"}></span>
        <span className={slideIndex === 2 ? "dot active" : "dot"}></span>
      </div>
    </div>
  );
}
