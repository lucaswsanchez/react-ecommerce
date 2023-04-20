import React from "react";
import "./Sliders.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Carrusel1 from "../../assets/images/Carrusel1.png";
import Carrusel2 from "../../assets/images/Carrusel2.png";
import Carrusel3 from "../../assets/images/Carrusel3.png";
import Carrusel4 from "../../assets/images/Carrusel4.png";

const slides = [Carrusel1, Carrusel2, Carrusel3, Carrusel4];

function Sliders() {
  const [curr, setCurr] = useState(0);

  const slidesImgs = slides.map((s) => (
    <img
      src={s}
      key={s}
      style={{
        minWidth: "100%",
        width: "100%",
        height: "100%",
        padding: "0px",
        objectFit: "contain",
        backgroundColor: "#060413",
      }}
    />
  ));

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slidesImgs.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slidesImgs.length - 1 ? 0 : curr + 1));

  return (
    <div className="slider-container">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${curr * 100}%) ` }}
      >
        {slidesImgs}
      </div>
      <div className="slider-buttons">
        <button className="slider-btn pad-right" onClick={prev}>
          <BsChevronLeft size={32} />
        </button>
        <button className="slider-btn pad-left" onClick={next}>
          <BsChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default Sliders;
