import React from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div className="navbar d-flex position-fixed">
      <div className="d-flex  justify-content-between">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </div>
        <div className="nav-list">
          <ul className="d-flex">
            <li className="list text-white">Home</li>
            <li className="list text-white">TV Shows</li>
            <li className="list text-white">Movies</li>
            <li className="list text-white">New Popular</li>
            <li className="list text-white"> My List</li>
            <li className="list text-white">Browse by languages </li>
          </ul>
        </div>
      </div>

      <img
        className="avathar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Another Image"
      />
    </div>
  );
};

export default NavBar;
