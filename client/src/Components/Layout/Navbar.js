import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-blue'>
      <div>
        <h1 className='ma0 pt2 white code'>
          <i className={icon} />
          {title}
        </h1>
      </div>
      <div className='spacer' />
      <div>
        <ul className='list'>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <a className='links code b pa3 white'>Home</a>
            </Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration: "none" }}>
              <a className='links code b pa3 white'>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "ContactKeeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
