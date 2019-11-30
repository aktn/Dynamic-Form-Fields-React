import React from "react";
import styled from "styled-components";

const DropDown = props => {
  const Select = styled.select`
    width: ${props.styles.width};
    height: ${props.styles.height};
    background: ${props.styles.background};
    color: ${props.styles.color};
    margin-top: 25px;
    padding: 10px 5px;
    font-size: ${props.styles.fontSize ? props.styles.fontSize : "16px"};
    border: 1px solid #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: 95% 50%;
    background-repeat: no-repeat;
    background-image: url("http://cdn.onlinewebfonts.com/svg/img_295694.svg");
    background-size: 10px;
    border-color: ${props.styles.borderColor
      ? props.styles.borderColor
      : "#d1d7dc;"};
    outline: none;
    font-family: "Cutive Mono", serif;
  `;

  return (
    <Select value={props.selection} onChange={props.changed}>
      {props.elements.map(element => (
        <option key={element.value} value={element.value}>
          {element.display}
        </option>
      ))}
    </Select>
  );
};

export default DropDown;
