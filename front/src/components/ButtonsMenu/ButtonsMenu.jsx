import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsMenu = ({ button, className, text = "Normal" }) => {
  return (
    <div className={`buttons-menu ${className}`}>
      <div className="normal">
        <div className="text-wrapper">{text}</div>
      </div>
    </div>
  );
};

ButtonsMenu.propTypes = {
  button: PropTypes.oneOf(["normal"]),
  text: PropTypes.string,
};
