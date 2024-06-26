import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsMenu = ({ button, className, text = "Normal", onClick}) => {
  return (
    <div className={`buttons-menu ${className}`} onClick={onClick}>
      <div className={`${button}`}>
        <div className="text-wrapper">{text}</div>
      </div>
    </div>
  );
};

ButtonsMenu.propTypes = {
  button: PropTypes.oneOf(["normal"]),
  text: PropTypes.string,
};
