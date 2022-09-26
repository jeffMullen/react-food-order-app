import React from "react";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import classes from "./Header.module.css";
import mealImg from "../../assets/images/meals.jpg";

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Table of food" />
      </div>
    </header>
  );
};

export default Header;
