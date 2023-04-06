import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../dropDown/DropDown";
import BackDrop from "./BackDrop.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  function clickHandler() {
    setOpen(!open);
  }
  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>
        <Link to="/">LOGO</Link>
      </p>
      <ul className={classes.navbarOptios}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li onClick={clickHandler}>
          <Link to="/">OUR SERVICES</Link>
          {open && <DropDown />}
          {open && <BackDrop onClickBackDrop={clickHandler} />}
        </li>
        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
