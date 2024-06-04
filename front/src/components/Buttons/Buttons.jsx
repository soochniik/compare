import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ button, className, text = "Normal" }) => {
  return (
    <div className={`buttons ${className}`}>
      <div className="normal">
        <div className="text-wrapper">{text}</div>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  button: PropTypes.oneOf(["normal"]),
  text: PropTypes.string,
};
