import React, { useState } from "react";
import Button from "./UI/Button";
import { ChromePicker } from "react-color";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
`;

const popover = {
  position: "absolute",
  zIndex: "2"
};

const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px"
};

const FormConfig = props => {
  const [bgColor, setBgColor] = useState("#454a49");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const changeBgColor = value => {
    props.emitColor(value);
  };

  return (
    <Wrapper>
      <Button clicked={handleClick}>Change Bg Color</Button>
      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker onChange={changeBgColor} />
        </div>
      ) : null}
    </Wrapper>
  );
};

export default FormConfig;
