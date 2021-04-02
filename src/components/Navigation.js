import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import logo2 from "./logo2.png";

function Navigation(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <div className="navigation">
      <nav
        className={`navbar navbar-expand bg-nav ${scroll ? "sticky-bar" : ""}`}
      >
        <Link class="navbar-brand" to="/">
          <img src={logo2} className="App-logo2 log-home wb" alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li
              class={`nav-item ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li
              class={`nav-item ${
                props.location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li
              class={`nav-item ${
                props.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/contact">
                Reach Out
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
