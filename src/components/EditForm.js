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

const miniTextFieldStyles = {
  width: "50%",
  height: "35px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48",
  display: "block"
};

const dropDownStyles = {
  width: "20%",
  height: "45px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48"
};

const CreateSelectOptions = styled.div`
  padding: 2% 29%;
`;

const Button = styled.button`
  border-radius: 50%;
  font-size: 18px;
  text-align: center;
  border-color: #232323;
  background-color: transparent;
  cursor: pointer;
`;

const types = ["text", "dropDown", "checkBox"];

const EditForm = props => {
  const items = props.items.map((item, i) => {
    return (
      <Item key={i}>
        <Text
          styles={textFieldStyles}
          field={item.question}
          placeholder={item.question}
          selection={item.type}
          updateField={event => props.changeLabelField(event, item.id)}
          onEnter={props.onEnter}
        ></Text>

        <DropDown
          elements={types}
          styles={dropDownStyles}
          selection={item.type}
          changed={event => props.changeSelection(event, item.id)}
        ></DropDown>

        {item.type === "checkBox" || item.type === "dropDown" ? (
          <CreateSelectOptions>
            <Text
              placeholder="Type here.."
              styles={miniTextFieldStyles}
              placeholder="Add options"
              updateField={event => props.changeOptionField(event, item.id)}
              onEnter={props.createOptions}
            ></Text>
            <Button>+</Button>
          </CreateSelectOptions>
        ) : (
          ""
        )}
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
};

export default EditForm;
