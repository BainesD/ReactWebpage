import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer"
import NavBar from "./NavBar"
import MainContent from "./MainContent"

import { render } from "@testing-library/react";

function Page() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDom.render(<><Page /></>, document.getElementById("root"));