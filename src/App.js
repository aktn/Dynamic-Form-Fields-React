import React, { Component, createContext } from "react";
import FormCreator from "./components/FormCreator";
import DisplayForm from "./components/DisplayForm";
import temp from "./data.json";
import styled from "styled-components";

export const { Provider, Consumer } = createContext();

const Container = styled.div`
  display: flex;
  width: 100vw;
  font-family: "Cutive Mono", serif;
`;

class App extends Component {
  state = {
    questions: temp,
    field: "",
    type: "text"
  };

  handleFieldChange = value => {
    this.setState({ field: value });
  };

  addQuestions = data => {
    const type = this.state.type;
    const item = { question: data, type: type };
    this.setState(prevState => ({
      questions: [...prevState.questions, item]
    }));
  };

  handleSelectChange = e => {
    const value = e.target.value;
    this.setState({ type: value });
  };

  render() {
    const { field, type } = this.state;

    return (
      <Container>
        <Provider
          value={{
            state: field,
            updateField: this.handleFieldChange,
            onEnter: this.addQuestions
          }}
        >
          <FormCreator
            selection={type}
            changeSelection={this.handleSelectChange}
          ></FormCreator>

          <DisplayForm
            value={type}
            items={this.state.questions}
            changed={this.handleTypeChange}
          ></DisplayForm>
        </Provider>
      </Container>
    );
  }
}

export default App;
