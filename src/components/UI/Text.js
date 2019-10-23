import React from "react";
import styled from "styled-components";

const Label = styled.label`
  background-color: transparent;
  position: absolute;
  margin-top: 2%;
  margin-left: 10%;
  visibility: hidden;
  padding: 10px;
`;

const Input = styled.input`
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};
  background: ${props => props.styles.background};
  padding: 25px 5px 0px 5px;
  color: ${props => props.color};
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${props =>
    props.styles.borderColor ? props.styles.borderColor : "#d1d7dc;"};
  outline: none;
  font-size: 18px;
  font-family: "Cutive Mono", serif;
  &:focus ~ ${Label} {
    visibility: visible;
    font-size: 11px;
  }
`;

const Text = props => {
  const onEnter = event => {
    if (event.keyCode === 13) {
      props.onEnterField(event.target.value);
    }
  };

  return (
    <>
      <Input
        placeholder={props.placeholder}
        type="text"
        value={props.field}
        onKeyDown={onEnter}
        onChange={e => props.updateField(e.target.value)}
        {...props}
      />
      <Label>Enter to save</Label>
    </>
  );
};

export default Text;
