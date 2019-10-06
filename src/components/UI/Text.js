import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};
  background: ${props => props.styles.background};
  color: ${props => props.color};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
`;

const Text = props => {
  const onEnter = event => {
    if (event.keyCode === 13) {
      props.changed(event.target.value);
    }
  };

  const handleUpdateField = e => {
    props.updateField(e.target.value);
  };

  return (
    <Input
      placeholder={props.placeholder}
      type="text"
      value={props.field}
      onKeyDown={onEnter}
      onChange={handleUpdateField}
      {...props}
    />
  );
};

export default Text;
