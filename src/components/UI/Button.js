import React from "react";
import styled from "styled-components";

const BtnStyled = styled.button`
  display: flex;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
`;

const Button = props => {
  return (
    <BtnStyled onClick={props.clicked} {...props}>
      {props.children}
    </BtnStyled>
  );
};

export default Button;
