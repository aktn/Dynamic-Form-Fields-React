import React from "react";
import FormElements from "./UI/FormElements";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  border-left: 1px solid #fff;
  min-height: 100vh;
  background-color: #454a49;
`;

const Item = styled.div`
  padding: 30px;
  margin: 30px 35px;
`;

const Label = styled.label`
  color: #eb9950;
  font-size: 20px;
`;

const Index = styled.span`
  padding-right: 10px;
  font-size: 20px;
  color: gray;
`;

// Just to demonstrate the change on view
const changeSelectionType = () => {};

const DisplayForm = props => {
  const items = props.items.map((item, i) => {
    return (
      <Item key={i}>
        <Index>{item.id}.</Index>
        <Label>{item.question}</Label>
        <FormElements
          element={item}
          changeSelection={changeSelectionType}
        ></FormElements>
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
};

export default DisplayForm;
