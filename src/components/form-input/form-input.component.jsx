import React from "react";
import { GroupContainer, FormInputContainer, FormInputLabel } from "./form-input.styles";

const FormInput = ({ onChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={onChange} {...otherProps} />

    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.lenght ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
