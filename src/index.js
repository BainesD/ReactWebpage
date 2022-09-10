import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import App from "./App"

import { render } from "@testing-library/react";


ReactDom.render(<App />, document.getElementById("root"));