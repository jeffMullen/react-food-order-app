import React from "react";

import Card from "../UI/Card/Card";
import classes from "./MealItemForm.module.css";

import DUMMY_MEALS from "../../utils/dummy-meals.js";

const MealItemForm = () => {
  console.log(DUMMY_MEALS);
  return (
    <Card className={classes.form}>
      {DUMMY_MEALS.map((meal) => {
        return <button>+Add</button>;
      })}
    </Card>
  );
};

export default MealItemForm;
