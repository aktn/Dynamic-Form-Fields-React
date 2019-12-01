import React, { Component } from "react";
import DisplayForm from "./components/DisplayForm";
import styled from "styled-components";
import EditForm from "./components/EditForm";
import FormConfig from "./components/FormConfig";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-family: "Cutive Mono", serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

class App extends Component {
  state = {
    questions: [],
    id: 1,
    configBar: false,
    bgColor: "#454a49"
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

  handleConfigBar = () => {
    this.setState(prevState => {
      return { configBar: !prevState.configBar };
    });
  };

  changeBgColor = value => {
    this.setState({
      bgColor: value.hex
    });
  };

  render() {
    const { type, questions, configBar, bgColor } = this.state;

    return (
      <Container>
        {configBar ? (
          <FormConfig emitColor={this.changeBgColor}></FormConfig>
        ) : (
          ""
        )}
        <Wrapper>
          <i
            className="fa fa-gear"
            style={{
              fontSize: "30px",
              color: "#6e6959",
              position: "absolute",
              top: "25px",
              left: "25px",
              zIndex: "10",
              cursor: "pointer"
            }}
            onClick={this.handleConfigBar}
          ></i>
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
            changeBgColor={bgColor}
            handleTextChange={e => console.log(e)}
          ></DisplayForm>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
