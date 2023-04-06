import classes from "./Sell.module.css";
import React, { useState } from "react";

function Sell() {
  const [selected, setSelected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const grains = ["Rice", "Corn", "Wheat", "Barley"];
  const nuts = [
    "Almond",
    "Walnut",
    "Pistachio",
    "HazelNut",
    "Cashew",
    "Pine Nut",
    "Peanut",
  ];
  const greenCofee = ["Speciality Coffee", "Coffee"];
  const oliveOil = ["Olive Oil"];

  let type = null;
  let options = null;

  if (selected === "Grains") {
    type = grains;
  } else if (selected === "Nuts") {
    type = nuts;
  } else if (selected === "Green Coffee") {
    type = greenCofee;
  } else if (selected === "Olive Oil") {
    type = oliveOil;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div className={classes.sell}>
      <p className={classes.heading}>Add your product details</p>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="">WHICH CATEGORY YOUR PRODUCTS BELONG TO</label>
          <select onChange={changeSelectOptionHandler}>
            <option>Grains</option>
            <option>Nuts</option>
            <option>Green Coffee</option>
            <option>Olive Oil</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="">WHAT ARE YOU SELLING</label>
          <select id="cars">{options}</select>
        </div>
        <div className={classes.control}>
          <label htmlFor="">ADD A SHORT DESCRIPTION</label>
          <textarea type="search" />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Sell;
