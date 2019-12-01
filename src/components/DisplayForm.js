import React from "react";
import FormElements from "./UI/FormElements";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  border-left: 1px solid #fff;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
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

// Currently just to demonstrate the change on view
const changeSelectionType = () => {};

const DisplayForm = props => {
  const { changeBgColor } = props;
  const items = props.items.map((item, i) => {
    return (
      <Item key={i}>
        <Index>{item.id}.</Index>
        <Label>{item.question}</Label>
        <FormElements
          element={item}
          changeSelection={changeSelectionType}
          handleTextChange={props.handleTextChange}
        ></FormElements>
      </Item>
    );
  });

  return <Wrapper bgColor={changeBgColor}>{items}</Wrapper>;
};

export default DisplayForm;
