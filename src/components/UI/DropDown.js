import React from "react";
import styled from "styled-components";

const DropDown = props => {
  const Select = styled.select`
    width: ${props.styles.width};
    height: ${props.styles.height};
    background: ${props.styles.background};
    color: ${props.styles.color};
    padding-left: 5px;
    font-size: 14px;
    border: 1px solid #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url("http://cdn.onlinewebfonts.com/svg/img_295694.svg");
    padding: 0.5em;
    background-size: 10px;
  `;

  return (
    <Select value={props.selection} onChange={props.changed}>
      <option value="" hidden>
        Type
      </option>
      {props.elements.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default DropDown;
