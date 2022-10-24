import React from "react";

import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

import DUMMY_MEALS from "../../utils/dummy-meals.js";

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li>
              <MealItem key={meal.id} meal={meal}></MealItem>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
