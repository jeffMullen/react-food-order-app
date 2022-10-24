import React from "react";

import Card from "../UI/Card/Card";
import MealItemForm from "./MealItemForm/MealItemForm";

import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {

    return (
        <Card className={classes.meals}>
            <ul>
                <MealItemForm />
            </ul>
        </Card>
    )
};

export default AvailableMeals;
