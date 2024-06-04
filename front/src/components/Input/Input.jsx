import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Input = ({ input, className, text }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputText}
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