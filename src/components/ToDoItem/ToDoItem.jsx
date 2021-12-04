import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #343744;
  color: ${(props) => (props.done ? "green" : "auto")};
  text-decoration: ${(props) => (props.done ? "line-through" : "auto")};
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 7px;
`;

class ToDoItem extends Component {
  state = {
    done: this.props.done,
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { text } = this.props;
    return (
      <Div
        onClick={this.toggleDone}
        // className={this.state.done ? "doneTodo" : ""}
        done={this.state.done}
      >
        {text}
      </Div>
    );
  }
}

export default ToDoItem
