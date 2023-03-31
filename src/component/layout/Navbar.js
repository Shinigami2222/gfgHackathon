import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>
        <Link to="/">LOGO</Link>
      </p>
      <ul className={classes.navbarOptios}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/our-services">OUR SERVICES</Link>
        </li>
        <li>
          <Link to="about-us">ABOUT US</Link>
        </li>
        <li>
          <Link to="sign-in">Sign in</Link>
        </li>
        <li>
          <Link to="cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
