import React from "react";
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
  width: "15%",
  height: "35px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48",
  fontSize: "12px"
};

const CreateSelectOptions = styled.div`
  padding: 2% 27%;
`;

const Test = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 100%;
`;

const types = ["text", "dropDown", "checkBox", "textarea"];

const EditForm = props => {
  const handleSelection = (event, id) => {
    const type = event.target.value;
    if (type === "checkBox") {
      props.changeSelection(event, id);
    } else if (type === "dropDown") {
      props.changeSelection(event, id);
    } else {
      console.log("Oops... there was sth wrong");
    }
  };

  const items = props.items.map((item, i) => {
    const checkDataExists = (event, id, index) => {
      props.createOptions(event, id, index);
    };

    return (
      <Item key={i}>
        <Test>
          <DropDown
            elements={types}
            styles={dropDownStyles}
            selection={item.type}
            changed={event => handleSelection(event, item.id)}
          ></DropDown>
          <Text
            styles={textFieldStyles}
            field={item.question}
            placeholder={item.question}
            selection={item.type}
            handleChange={event => props.changeLabelField(event, item.id)}
            onEnterField={props.onEnter}
            showMessage={true}
          ></Text>
        </Test>

        {item.options &&
          item.options.map((option, index) => (
            <CreateSelectOptions key={index}>
              <Text
                placeholder="Type here.."
                styles={miniTextFieldStyles}
                placeholder="Add options"
                handleChange={() => {}}
                showMessage={true}
                onEnterField={event => checkDataExists(event, item.id, index)}
              ></Text>
            </CreateSelectOptions>
          ))}
      </Item>
    );
  });

  return <Wrapper>{items}</Wrapper>;
};

export default EditForm;
