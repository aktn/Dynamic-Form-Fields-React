import React from "react";
import Text from "./UI/Text";
import DropDown from "./UI/DropDown";

const types = ["text", "select", "textarea"];

const FormCreator = props => {
  return (
    <div>
      <Text field={props.field} changed={props.changed}></Text>
      <DropDown
        elements={types}
        changed={event => props.changeSelection(event)}
      ></DropDown>
    </div>
  );
};

export default FormCreator;
