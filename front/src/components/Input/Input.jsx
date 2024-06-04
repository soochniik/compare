import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Input = ({ input, className, text = "Active2" }) => {
  return (
    <div className={`input ${input} ${className}`}>
      <div className="active-wrapper">
        <div className="div">
          {input === "active" && <>Active</>}

          {input === "active-2" && <>{text}</>}
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.oneOf(["active-2", "active"]),
  text: PropTypes.string,
};
