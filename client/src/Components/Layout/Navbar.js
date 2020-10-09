import React, { Fragment, useContext } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from '../../Context/Auth/AuthContext';

const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment >
      <li className='code white'>Hello,{user && user.name}</li>
      <li className='white'>
        <a href='#' onClick={onLogout} style={{ textDecoration: "none" }} >
          <i className='fas fa-sign-out-alt white dim'><span className='code'>Logout</span></i>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register' style={{ textDecoration: "none" }}>
          <a href='#' className='code b pa3 white dim' style={{ textDecoration: "none" }} >Register</a>
        </Link>
      </li>
      <li>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <a href='#' className='code b pa3 white dim' style={{ textDecoration: "none" }} >Login</a>
        </Link>
      </li>
    </Fragment>
  )

  return (
    <div className='navbar bg-blue'>
      <div>
        <h1 className='ma0 pt2 white code' style={{ cursor: "default" }}>
          <i className={icon} />
          {title}
        </h1>
      </div>
      <div className='spacer' />
      <div>
        <ul className='list'>
          {isAuthenticated ? authLinks : guestLinks}
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
  title: "Contact-Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
