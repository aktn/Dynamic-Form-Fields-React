import React from "react";
import Text from "./UI/Text";
import DropDown from "./UI/DropDown";
import { Consumer } from "./../App";

const types = ["text", "dropDown", "textarea"];
const styles = {
  width: "50%",
  height: "35px",
  background: "transparent",
  color: "gray"
};

const FormCreator = props => {
  return (
    <div>
      <Consumer>
        {context => (
          <>
            <Text
              field={context.state}
              placeholder="Type here.."
              styles={styles}
              changed={props.changed}
            ></Text>
            <DropDown
              elements={types}
              styles={styles}
              selection={props.selection}
              changed={event => props.changeSelection(event)}
            ></DropDown>
          </>
        )}
      </Consumer>
    </div>
  );
};

export default FormCreator;
