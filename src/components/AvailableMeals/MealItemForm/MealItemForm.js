import React from "react";

import MealItem from "./MealItem/MealItem";
import classes from "./MealItemForm.module.css";

import DUMMY_MEALS from "../../../utils/dummy-meals.js";

const MealItemForm = () => {
  console.log(DUMMY_MEALS);
  return (
    <li className={classes.form}>
      {DUMMY_MEALS.map((meal) => {
        return <MealItem key={meal.id} meal={meal}></MealItem>;
      })}
    </li>
  );
};

export default MealItemForm;
