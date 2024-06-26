import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Input = ({ input, className, text, onInputChange, type, value }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    text = event.target.value;
    setInputText(text);
    onInputChange(text);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder={text}
      className={`input ${input} ${className}`}
    />
  );
};

Input.propTypes = {
  input: PropTypes.oneOf(["active-2", "active"]),
  text: PropTypes.string,
};