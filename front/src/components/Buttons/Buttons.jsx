import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ button, className, text = "Normal", onClick}) => {
  return (
    <div className={`buttons ${className}`} onClick={onClick}>
      <div className={`${button}`}>
        <div className="text-wrapper">{text}</div>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  button: PropTypes.oneOf(["normal"]),
  text: PropTypes.string,
};
