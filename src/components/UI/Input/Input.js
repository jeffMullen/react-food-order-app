import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label>{props.label}</label>
      <input type={props.type} min={props.min}></input>
      {/* {props.children} */}
    </div>
  );
};

export default Input;
