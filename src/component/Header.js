import React from "react";
import PropTypes from "prop-types";
import { DiffieHellman } from "crypto";
import { Link } from "react-router-dom";

function Header(props) {
  const { branding, abbas } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" style={{ color: "white" }}>
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <i className="fa fa-plus "></i> Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fa fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "default brand"
};

Header.propTypes = {
  branding: PropTypes.string
};

export default Header;
