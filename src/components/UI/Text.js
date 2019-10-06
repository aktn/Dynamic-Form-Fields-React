import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};
  background: ${props => props.styles.background};
  padding: 25px 5px 10px 5px;
  color: ${props => props.color};
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${props =>
    props.styles.borderColor ? props.styles.borderColor : "#d1d7dc;"};
  outline: none;
  font-size: 18px;
  font-family: "Cutive Mono", serif;
`;

const Text = props => {
  const onEnter = event => {
    if (event.keyCode === 13) {
      props.onEnter(event.target.value);
      console.log(event.target.value);
    }
  };

  return (
    <Input
      placeholder={props.placeholder}
      type="text"
      value={props.field}
      onKeyDown={onEnter}
      onChange={e => props.updateField(e.target.value)}
      {...props}
    />
  );
};

export default Text;
