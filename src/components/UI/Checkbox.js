import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: transparent;
  display: block;
  margin: 10px 0;
  position: relative;
  font-size: 18px;
  font-family: "Cutive Mono", serif;
`;

const Title = styled.label`
  padding: 20px 0px;
  width: 100%;
  display: block;
  text-align: left;
  color: gray;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;

  &:before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: "";
    background-color: rgba(82, 82, 82, 0.6);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: -1;
  }
  &:after {
    width: 32px;
    height: 32px;
    content: "";
    border: 2px solid #d1d7dc;

    z-index: 2;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }
`;

const Input = styled.input`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 30px;
  visibility: hidden;
  transform: translateY(-50%);

  &:checked ~ label {
    color: #fff;

    &:before {
      opacity: 1;
      transform: translate(-50%, -50%) scale3d(76, 66, 1);
    }
    &:after {
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-position: 2px 3px;
      background-repeat: no-repeat;
      background-color: rgba(82, 82, 82, 0.1);
    }
  }
`;

const CheckBox = props => {
  const options = props.options.map((option, i) => (
    <Wrapper key={i}>
      <Input id={option.value} name={option.value} type="checkbox" />
      <Title htmlFor={option.value}>{option.display}</Title>
    </Wrapper>
  ));
  return <>{options}</>;
};

export default CheckBox;
