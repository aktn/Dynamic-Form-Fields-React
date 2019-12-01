import React, { Component } from "react";
import DisplayForm from "./components/DisplayForm";
import styled from "styled-components";
import EditForm from "./components/EditForm";
import { ChromePicker } from "react-color";
import Button from "./components/UI/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-family: "Cutive Mono", serif;
`;

const FormConfig = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
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

class App extends Component {
  state = {
    questions: [],
    id: 1,
    configBar: false,
    displayColorPicker: false,
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

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
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
          <FormConfig>
            <Button clicked={this.handleClick}>Change Bg Color</Button>
            {this.state.displayColorPicker ? (
              <div style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <ChromePicker onChange={this.changeBgColor} />
              </div>
            ) : null}
          </FormConfig>
        ) : (
          ""
        )}
        <Wrapper>
          <EditForm
            value={type}
            items={questions}
            changeSelection={this.updateSelectionType}
            changeLabelField={this.updateLabel}
            onEnter={this.addQuestions}
            createOptions={this.createOptionsForField}
            toggleConfigBar={this.handleConfigBar}
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
