import React, { useState } from "react";
import Input from "../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={classes.form}>
      <form>
        <Input
          label="Amount"
          type="number"
          min="0"
          defaultValue={amount}
          onChange={amountChangeHandler}
        ></Input>
        <button>+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
