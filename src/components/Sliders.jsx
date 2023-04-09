import React from "react";
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
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          display: "flex",
          transitionProperty: "transform",
          transitionDuration: "500ms",
          transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          transform: `translateX(-${curr * 100}%) `,
        }}
      >
        {slides}
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={prev}
          style={{
            paddingRight: "1rem",
            border: "none",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, .01)",
            cursor: "pointer",
          }}
        >
          <BsChevronLeft size={32} />
        </button>
        <button
          onClick={next}
          style={{
            paddingLeft: "1rem",
            border: "none",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, .01)",
            cursor: "pointer",
          }}
        >
          <BsChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default Sliders;
