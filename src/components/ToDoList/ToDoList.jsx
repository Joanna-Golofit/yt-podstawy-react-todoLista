// import "../../App.css";
import React, { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

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
      <div>
        <h2>{title}</h2>
        <div>
          <p>Zad 1 bez klasy i onklika - nie dzialaja style</p>
        </div>
        <div
          onClick={this.toggleDone}
          className={this.state.done ? "doneTodo" : ""}
        >
          <p>
            Zad 2 z klasa i onklikiem, ale w innym konponencie.. - nie dzialaja
            style
          </p>
        </div>
        {tasks.map((task) => (
          <ToDoItem
            id={task.text}
            key={task.text}
            text={task.text}
            done={task.done}
          />
          // <ToDoItem id={task.text} key={task.text} task={task} />
        ))}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft}
        />
      </div>
    );
  }
}
export default ToDoList
