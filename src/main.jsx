import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Api from "./Api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Api />
  </BrowserRouter>
);
