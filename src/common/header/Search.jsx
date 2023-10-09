import React from "react";
import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = ({ cartItem = [] }) => {
  console.log(cartItem);
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <FontAwesomeIcon className="ic" icon={faSearch} />
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <FontAwesomeIcon className="icon-circle" icon={faUser} />
            <div className="cart">
              <Link to="/cart">
                <FontAwesomeIcon
                  className="icon-circle1"
                  icon={faShoppingBag}
                />
                <span>
                  {cartItem && Array.isArray(cartItem) ? cartItem.length : 0}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
