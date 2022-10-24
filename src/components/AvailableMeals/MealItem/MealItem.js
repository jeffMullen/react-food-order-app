import React from "react";
import MealItemForm from "../MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { meal } = props;
  console.log(meal);
  return (
    <div className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <p className={classes.price}>{`$${meal.price}`}</p>
      </div>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
