import React, { Component } from "react";
import FormCreator from "./components/FormCreator";
import DisplayForm from "./components/DisplayForm";

class App extends Component {
  state = {
    questions: [],
    field: "",
    type: ""
  };

  handleFieldChange = value => {
    this.setState({ field: value });
    this.addQuestions(value);
  };

  handleTypeChange = value => {
    this.setState({ type: value });
  };

  addQuestions = data => {
    this.setState(prevState => ({
      questions: [...prevState.questions, data]
    }));
  };

  handleSelectChange = () => {
    console.log("y");
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
        <DisplayForm test={field} changed={this.handleTypeChange}></DisplayForm>
      </div>
    );
  }
}

export default App;
