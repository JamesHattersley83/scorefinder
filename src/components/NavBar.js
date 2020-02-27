import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-5">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 mx-auto">Score Finder</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav align-items-center ml-auto">
            <li className="nav-item">
              <Link to="/standings" className="nav-link">
                Standings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
