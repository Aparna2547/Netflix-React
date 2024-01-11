import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-start">
          <ul>
            <li>
              <button>
                <GrFacebookOption className="text-white fs-3 mx-1" />
              </button>
              <button>
                <FaTwitter className="text-white fs-3 mx-2" />
              </button>
              <button>
                <IoLogoInstagram className="text-white fs-3 mx-2" />
              </button>
              <button>
                <FaYoutube className="text-white fs-3 mx-2" />
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex mt-5">
          <div>
            <ul className="ms-0 d-flex flex-column align-items-start mx-5">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li className="mb-4">Legal Notices</li>
              <button className="btn-service">Service Code</button>
            </ul>
          </div>
          <div className="mx-4">
            <ul className="ms-0 d-flex flex-column align-items-start mx-3">
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Prefernces</li>
            </ul>
          </div>

    <div className="mx-4">
          <ul className="ms-0 d-flex flex-column align-items-start mx-3">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate information</li>
          </ul>
          </div>
          <div className="mx-4">
          <ul className="ms-0 d-flex flex-column align-items-start mx-3">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
