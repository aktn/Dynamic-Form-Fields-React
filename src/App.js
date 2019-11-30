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

    //Load the initial data after being mounted
    this.setState({
      questions: [{ id: id, question: "", type: "text", options: [] }]
    });
  }

  /*
   * Return an empty field with a unique ID
   * @param {} - create a new question field
   */
  addQuestions = () => {
    const { id } = this.state;
    const item = { id: id + 1, question: "", type: "text", options: [] };
    this.setState(prevState => ({
      questions: [...prevState.questions, item],
      id: id + 1
    }));
  };

  // invoke when dropdown selection changes
  updateSelectionType = (e, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);
    const value = e.target.value;
    const updatedObject = {
      ...questions[itemIndex],
      type: value
    };

    this.setState(
      {
        questions: [
          ...questions.slice(0, itemIndex),
          updatedObject,
          ...questions.slice(itemIndex + 1)
        ]
      },
      function() {
        // Add a new field after it has been selected
        this.createOptionsForField("", id);
      }
    );
  };

  /*
   * @param {string, number} value, id - Updating a label
   */
  updateLabel = (value, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);
    const updatedObject = {
      ...questions[itemIndex],
      question: value
    };
    this.updateState(updatedObject, itemIndex);
  };

  /*
   * @param {Object, number} value, question's index - Updating object state to be reusable
   */
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

  /*
   * @param {string, number, number} option, id, index - Updating a label
   */
  createOptionsForField = (option, id, index) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);

    let options = questions[itemIndex].options;
    const optionList = options.map(option => option.index);

    // Update state if record already exists or else create a new one
    if (optionList.includes(index)) {
      const updatedObject = {
        ...questions[itemIndex],
        options: options.map(item =>
          item.index === index
            ? {
                ...item,
                option
              }
            : item
        )
      };
      this.updateState(updatedObject, itemIndex);
    } else {
      const data = { option, index };
      const updatedObject = {
        ...questions[itemIndex],
        options: [...questions[itemIndex].options, data]
      };
      this.updateState(updatedObject, itemIndex);
    }
  };

  render() {
    const { type, questions } = this.state;

    return (
      <Container>
        <EditForm
          value={type}
          items={questions}
          changeSelection={this.updateSelectionType}
          changeLabelField={this.updateLabel}
          onEnter={this.addQuestions}
          createOptions={this.createOptionsForField}
        ></EditForm>
        <DisplayForm
          value={type}
          items={questions}
          changed={this.handleTypeChange}
        ></DisplayForm>
      </Container>
    );
  }
}

export default App;
