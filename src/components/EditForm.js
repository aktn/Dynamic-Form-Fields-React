import React from "react";
import FormElements from "./UI/FormElements";
import styled from "styled-components";
import Text from "./UI/Text";
import DropDown from "./UI/DropDown";

const Wrapper = styled.div`
  flex: 1;
  border-left: 1px solid #fff;
  min-height: 100vh;
  background-color: #ffeae4;
`;

const Item = styled.div`
  padding: 30px;
  margin: 30px 35px;
`;

const textFieldStyles = {
  width: "65%",
  height: "35px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48"
};

const dropDownStyles = {
  width: "20%",
  height: "45px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48"
};
const types = ["text", "dropDown", "textarea"];

const EditForm = props => {
  console.log(props.items);
  const items = props.items.map((item, i) => {
    return (
      <Item key={i}>
        <Text
          styles={textFieldStyles}
          placeholder={item.question}
          selection={props.selection}
          changed={event => props.changeSelection(event)}
        ></Text>
        <DropDown
          elements={types}
          styles={dropDownStyles}
          selection={item.type}
          changed={event => props.changeSelection(event, item.id)}
        ></DropDown>
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
};

export default EditForm;
