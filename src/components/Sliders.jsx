import React from "react";
import "../components/Sliders.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

function Sliders({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="slider-container">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${curr * 100}%) ` }}
      >
        {slides}
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
