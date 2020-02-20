import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: white;
`;
const ValueInput = ({ value, handleChange, ...props }) => {
  return (
    <Input
      className="input has-text-centered"
      type="number"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
export default ValueInput;
