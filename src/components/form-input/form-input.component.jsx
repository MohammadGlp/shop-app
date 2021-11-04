import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ onChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otherProps} />

    {label ? (
      <label
        className={`${
          otherProps.value.lenght ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
