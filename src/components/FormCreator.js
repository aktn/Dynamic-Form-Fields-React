import React from "react";
import Text from "./UI/Text";
import DropDown from "./UI/DropDown";
import { Consumer } from "./../App";
import styled from "styled-components";

const types = ["text", "dropDown", "textarea"];
const dropDownStyles = {
  width: "20%",
  height: "45px",
  background: "transparent",
  color: "gray",
  borderColor: "#544d48"
};

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

const Wrapper = styled.div`
  flex: 1;
  background-color: #ffeae4;
  padding: 10px;
  flex-direction: column;
`;

const CreateSelectOptions = styled.div`
  padding: 2% 29%;
`;

const Test = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border-radius: 50%;
  font-size: 18px;
  text-align: center;
  border-color: #232323;
  background-color: transparent;
  cursor: pointer;
`;

const FormCreator = props => {
  const createSelectOptions =
    props.selection === "dropDown" ? (
      <CreateSelectOptions>
        <Text
          placeholder="Type here.."
          styles={miniTextFieldStyles}
          placeholder="Add options"
        ></Text>
        <Button>+</Button>
      </CreateSelectOptions>
    ) : (
      ""
    );

  return (
    <Wrapper>
      <Test>
        <Consumer>
          {context => (
            <>
              <DropDown
                elements={types}
                styles={dropDownStyles}
                selection={props.selection}
                changed={event => props.changeSelection(event)}
              ></DropDown>
              <Text
                field={context.state}
                styles={textFieldStyles}
                onEnter={context.onEnter}
                updateField={context.updateField}
                placeholder="Enter field name"
              ></Text>
            </>
          )}
        </Consumer>
      </Test>
      {createSelectOptions}
    </Wrapper>
  );
};

export default FormCreator;
