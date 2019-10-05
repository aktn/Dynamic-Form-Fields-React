import React from "react";
import FormElements from "./UI/FormElements";
import CheckBox from "./UI/Checkbox";

const DisplayForm = props => {
  const items = props.items.map((item, i) => {
    return (
      <div>
        <p>{item.question}</p>
        <FormElements element={item}></FormElements>
      </div>
    );
  });

  return (
    <div>
      Display Form
      {props.test}
      {items}
    </div>
  );
};

export default DisplayForm;
