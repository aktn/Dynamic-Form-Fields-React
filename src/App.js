import React, { Component, createContext } from "react";
import FormCreator from "./components/FormCreator";
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
    field: "",
    type: "text"
  };

  componentDidMount() {
    this.setState({
      questions: [{ id: "1", question: "", type: "dropDown" }]
    });
  }

  handleFieldChange = value => {
    this.setState({ field: value });
  };

  addQuestions = data => {
    const type = this.state.type;
    const item = { question: data, type: type };
    this.setState(prevState => ({
      questions: [...prevState.questions, item],
      field: ""
    }));
  };

  handleSelectChange = e => {
    const value = e.target.value;
    this.setState({ type: value });
  };

  updateSelection = (e, id) => {
    const { questions } = this.state;
    const itemIndex = questions.findIndex(item => item.id === id);
    const value = e.target.value;

    console.log(e.target.value, id);

    const updatedSelection = {
      ...questions[itemIndex],
      type: value
    };

    this.setState({
      questions: [
        ...questions.slice(0, itemIndex),
        updatedSelection,
        ...questions.slice(itemIndex + 1)
      ]
    });
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
            changeSelection={this.updateSelection}
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
