import React from "react";
import styled from "styled-components";

const TextareaStyled = styled.textarea`
  display: block;
  background-color: transparent;
  font-size: 18px;
  font-family: "Cutive Mono", serif;
  padding: 4px 6px;
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
`;

const Textarea = props => {
  return (
    <>
      <TextareaStyled></TextareaStyled>
    </>
  );
};

export default Textarea;
