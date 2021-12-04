// import "../../App.css";
import React, { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import styled from "styled-components";

const Div = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  padding: 14px;
  margin-top: 14px;
  border-radius: 14px;
`
const H2 = styled.h2`
color: #ffa;
`

class ToDoList extends Component {
  static defaultProps = {
    tasks: [
    { done: true, text: "Zad 3" },
    { done: false, text: "Zad 4" },
    ],
  title: "My title"};

  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (e) => {
    this.setState((state) => ({ draft: e.target.value }));
    console.log("draft:", this.state.draft);
  };

  addToDo = () => {
    const { tasks, draft } = this.state;
    const list = tasks;
    list.push({ text: draft, done: false });
    this.setState({ tasks: list, draft: "" });
    // this.setState((state) => ({
    //   tasks: [...tasks, { text: draft }],
    //   draft: "",
    // }));
  };

  render() {
    const { title } = this.props;
    const { draft, tasks } = this.state;
    return (
      <Div>
        <H2>{title}</H2>        
        {tasks.map((task) => (
          <ToDoItem
            id={task.text}
            key={task.text}
            text={task.text}
            done={task.done}
          />
        ))}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft}
        />
      </Div>
    );
  }
}
export default ToDoList
