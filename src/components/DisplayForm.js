import React from "react";
import FormElements from "./UI/FormElements";

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
      {items}
    </div>
  );
};

export default DisplayForm;
