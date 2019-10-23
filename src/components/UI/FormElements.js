import React from "react";
import Text from "./Text";
import DropDown from "./DropDown";
import CheckBox from "./Checkbox";

const FormElements = props => {
  let element = [];

  const styles = {
    width: "100%",
    height: "45px",
    background: "transparent",
    color: "gray"
  };

  const options = props.element.options ? props.element.options : [];

  switch (props.element.type) {
    case "text":
      element = (
        <Text
          field={props.field}
          placeholder="Type here.."
          styles={styles}
          changed={props.changed}
          updateField={event => console.log(event)}
        ></Text>
      );
      break;
    case "dropDown":
      element = (
        <DropDown
          elements={options}
          selection={props.selection}
          styles={styles}
          changed={event => props.changeSelection(event, element.id)}
        ></DropDown>
      );
      break;
    case "checkBox":
      element = <CheckBox options={props.element.options}></CheckBox>;
      break;
  }

  return <div>{element}</div>;
};

export default FormElements;
