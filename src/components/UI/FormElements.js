import React from "react";
import Text from "./Text";
import DropDown from "./DropDown";

const FormElements = props => {
  let element = [];
  const types = ["text", "select", "textarea"];
  const styles = {
    width: "50%",
    height: "35px",
    background: "transparent",
    color: "gray"
  };

  switch (props.element) {
    case "text":
      element = (
        <Text
          field={props.field}
          placeholder="Type here.."
          styles={styles}
          changed={props.changed}
        ></Text>
      );
      break;
    case "dropDown":
      element = (
        <DropDown
          elements={types}
          selection={props.selection}
          styles={styles}
          changed={event => props.changeSelection(event)}
        ></DropDown>
      );
      break;
  }

  return <div>{element}</div>;
};

export default FormElements;
