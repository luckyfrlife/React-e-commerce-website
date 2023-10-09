import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderAll,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <FontAwesomeIcon className="id" icon={faBorderAll} />
            <h4>
              Categories <FontAwesomeIcon className="i" icon={faChevronDown} />
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? (
                <FontAwesomeIcon className="i close home-btn" icon={faTimes} />
              ) : (
                <FontAwesomeIcon className="i open" icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
