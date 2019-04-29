import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-5">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 mx-auto">Score Finder</span>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav align-items-center ml-auto">
          <li className="nav-item">
            <Link to="/standings" className="nav-link">
              Standings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
