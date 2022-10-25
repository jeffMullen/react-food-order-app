import React from "react";

import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

import DUMMY_MEALS from "../../utils/dummy-meals.js";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <li key={meal.id}>
        <MealItem meal={meal}></MealItem>
      </li>
    );
  });

  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
