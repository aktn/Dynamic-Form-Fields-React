import React, { Component } from "react";
import FormCreator from "./components/FormCreator";
import DisplayForm from "./components/DisplayForm";

const temp = [
  {
    question: "Question 1",
    type: "dropDown"
  },
  {
    question: "Question 2",
    type: "text"
  },
  {
    question: "Question 3",
    type: "checkBox"
  },
  {
    question: "Question 4",
    type: "checkBox"
  }
];

class App extends Component {
  state = {
    questions: temp,
    field: "",
    type: "text"
  };

  handleFieldChange = value => {
    this.setState({ field: value });
    this.addQuestions(value);
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
      <div className="App">
        <FormCreator
          value={field}
          changed={this.handleFieldChange}
          selection={type}
          changeSelection={this.handleSelectChange}
        ></FormCreator>
        <DisplayForm
          value={type}
          items={this.state.questions}
          changed={this.handleTypeChange}
        ></DisplayForm>
      </div>
    );
  }
}

export default App;
