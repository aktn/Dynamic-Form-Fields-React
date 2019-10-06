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

const Wrapper = styled.div`
  flex: 1;
  background-color: #ffeae4;
  padding: 10px;
  justify-content: space-evenly;
  display: flex;
`;

const FormCreator = props => {
  return (
    <Wrapper>
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
              placeholder="Type here.."
              styles={textFieldStyles}
              onEnter={context.onEnter}
              updateField={context.updateField}
              placeholder="Enter field name"
            ></Text>
          </>
        )}
      </Consumer>
    </Wrapper>
  );
};

export default FormCreator;
