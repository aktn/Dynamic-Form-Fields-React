import React, { Component, createContext } from "react";
import DisplayForm from "./components/DisplayForm";
import temp from "./data.json";
import styled from "styled-components";
import EditForm from "./components/EditForm";

export const { Provider, Consumer } = createContext();

const Container = styled.div`
  display: flex;
  width: 100vw;
  font-family: "Cutive Mono", serif;
`;

class App extends Component {
  state = {
    questions: temp,
    id: 1
  };

  componentDidMount() {
    this.setState({
      questions: [{ id: 1, question: "", type: "text", options: [] }]
    });
  }

  addQuestions = data => {
    const { id } = this.state;
    const item = { id: id + 1, question: "", type: "text" };
    this.setState(prevState => ({
      questions: [...prevState.questions, item]
    }));
  };

  // handleFieldChange = value => {
  //   this.setState({ field: value });
  // };
  // handleSelectChange = e => {
  //   const value = e.target.value;
  //   this.setState({ type: value });
  // };

  updateSelectionType = (e, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);
    const value = e.target.value;
    const updatedObject = {
      ...questions[itemIndex],
      type: value
    };
    this.updateState(updatedObject, itemIndex);
  };

  updateLabelField = (value, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);
    const updatedObject = {
      ...questions[itemIndex],
      question: value
    };
    this.updateState(updatedObject, itemIndex);
  };

  updateState = (updatedObject, itemIndex) => {
    const { questions } = this.state;
    this.setState({
      questions: [
        ...questions.slice(0, itemIndex),
        updatedObject,
        ...questions.slice(itemIndex + 1)
      ]
    });
  };

  createOptionsForField = data => {
    console.log(data);
  };

  changeOptionField = (value, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);

    const updatedObject = {
      ...questions[itemIndex],
      options: [value]
    };
    this.updateState(updatedObject, itemIndex);
  };

  render() {
    const { field, type } = this.state;
    console.log(this.state.questions);
    return (
      <Container>
        <Provider
          value={{
            state: field,
            updateField: this.handleFieldChange,
            onEnter: this.addQuestions
          }}
        >
          {/* <FormCreator
            selection={type}
            changeSelection={this.handleSelectChange}
          ></FormCreator> */}
          <EditForm
            value={type}
            items={this.state.questions}
            changeSelection={this.updateSelectionType}
            changeLabelField={this.updateLabelField}
            onEnter={this.addQuestions}
            createOptions={this.createOptionsForField}
            changeOptionField={this.changeOptionField}
          ></EditForm>

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
