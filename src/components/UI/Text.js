import React from "react";

const Text = props => {
  const onEnter = event => {
    if (event.keyCode === 13) {
      props.changed(event.target.value);
    }
  };

  return <input type="text" value={props.field} onKeyDown={onEnter} />;
};

export default Text;
