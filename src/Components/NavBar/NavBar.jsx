import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";


const NavBar = () => {
  const [scrolling,setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log('hww')
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar d-flex position-fixed ${`navbar ${scrolling ? 'nav-black' : 'nav-tran'}`}`}>
      <div className="d-flex  justify-content-between">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </div>
        <div className="nav-list">
          <ul className="d-flex mx-3">
            <li className="list text-white mx-2 mt-2">Home</li>
            <li className="list text-white mx-2  mt-2">TV Shows</li>
            <li className="list text-white mx-2  mt-2">Movies</li>
            <li className="list text-white mx-2  mt-2">New Popular</li>
            <li className="list text-white mx-2  mt-2"> My List</li>
            <li className="list text-white mx-2  mt-2">Browse by languages </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center me-5">
          <button><CiSearch className="text-white fs-3"/></button>
         <button><IoNotificationsOutline className="text-white fs-3 mx-2"/></button>
  
        <div>
          <button>
        <img
        className="avathar  mx-2"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Another Image"
      />
      </button>
      </div>
      </div>
      
    </div>
  );
};

export default NavBar;
