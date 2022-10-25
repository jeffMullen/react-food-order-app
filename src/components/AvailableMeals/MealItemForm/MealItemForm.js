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
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          onChange={amountChangeHandler}
        ></Input>
        <button>+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
