import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={props.onChange}></input>
    </div>
  );
};

export default Input;
