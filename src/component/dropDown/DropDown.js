import classes from "./DropDown.module.css";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className={classes.dropDown}>
      <ul classNamE={classes.menu}>
        <li className={classes.menuItem}>
          <Link to="/buy">Buy</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/sell">Sell</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
