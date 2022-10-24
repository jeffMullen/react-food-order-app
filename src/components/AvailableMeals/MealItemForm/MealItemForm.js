import React from "react";
import Input from "../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <div className={classes.form}>
      <form>
        <Input label="Amount" type="number" min="0">
        </Input>
        <button>+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
