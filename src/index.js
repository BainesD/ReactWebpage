import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import { render } from "@testing-library/react";

// const page = (

//     <div>
//         <nav>
//             <img style={{width:60}} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
//         </nav>
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

function MainContent() {
  return (
    <div>
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {" "}
        <img
          style={{ width: 60 }}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Good Deal Development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDom.render(
  <>
    <Page />
  </>,
  document.getElementById("root")
);
