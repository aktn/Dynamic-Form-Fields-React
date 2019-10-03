import React from "react";
import styled from "styled-components";

const Text = props => {
  const Input = styled.input`
    width: ${props.styles.width};
    height: ${props.styles.height};
    background: ${props.styles.background};
    color: ${props.styles.color};
    padding-left: 5px;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  `;

  const onEnter = event => {
    if (event.keyCode === 13) {
      props.changed(event.target.value);
    }
  };

  return (
    <Input
      placeholder={props.placeholder}
      type="text"
      value={props.field}
      onKeyDown={onEnter}
    />
  );
};

export default Text;
