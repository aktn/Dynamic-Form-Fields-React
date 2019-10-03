import React from "react";

const DropDown = props => {
  return (
    <select value={props.selection} onChange={props.changed}>
      {props.elements.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
      >
    </select>
  );
};

export default DropDown;
