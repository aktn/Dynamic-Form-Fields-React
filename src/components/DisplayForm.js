import React from "react";
import FormElements from "./UI/FormElements";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  border-left: 1px solid #fff;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const Item = styled.div`
  padding: 30px;
  margin: 30px 35px;
`;

const Label = styled.label`
  color: #eb9950;
  font-size: 20px;
`;

const DisplayForm = props => {
  const items = props.items.map((item, i) => {
    return (
      <Item key={i}>
        <Label>{item.question}</Label>
        <FormElements element={item}></FormElements>
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
};

export default DisplayForm;
