import React, { Component } from "react";
import DisplayForm from "./components/DisplayForm";
import styled from "styled-components";
import EditForm from "./components/EditForm";

const Container = styled.div`
  display: flex;
  width: 100vw;
  font-family: "Cutive Mono", serif;
`;

class App extends Component {
  state = {
    questions: [],
    id: 1
  };

  componentDidMount() {
    const { id } = this.state;
    this.setState({
      questions: [{ id: id, question: "", type: "text", options: [] }]
    });
  }

  addQuestions = () => {
    const { id } = this.state;

    const item = { id: id + 1, question: "", type: "text", options: [] };
    this.setState(prevState => ({
      questions: [...prevState.questions, item],
      id: id + 1
    }));
  };

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

  createOptionsForField = (data, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);

    const updatedObject = {
      ...questions[itemIndex],
      options: [...questions[itemIndex].options, data]
    };
    this.updateState(updatedObject, itemIndex);
  };

  render() {
    const { type } = this.state;

    return (
      <Container>
        <EditForm
          value={type}
          items={this.state.questions}
          changeSelection={this.updateSelectionType}
          changeLabelField={this.updateLabelField}
          onEnter={this.addQuestions}
          createOptions={this.createOptionsForField}
        ></EditForm>
        <DisplayForm
          value={type}
          items={this.state.questions}
          changed={this.handleTypeChange}
        ></DisplayForm>
      </Container>
    );
  }
}

export default App;
