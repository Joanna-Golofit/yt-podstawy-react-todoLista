import "./App.css";
import React, { Component } from "react";

export class ToDoItem extends Component {
  state = {
    done: this.props.done,
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { text } = this.props;
    return (
      <div onClick={this.toggleDone} className={this.state.done ? "doneTodo" : ""}>
        <p>{text}</p>
      </div>
    );
  }
}

// export default ToDoItem

class ToDoList extends Component {
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
    // this.setState({ tasks: tasks.push(draft), draft: "" });
    // const list = tasks;
    // list.push(draft);
    // this.setState({tasks: list, draft: ""})
    // this.setState({ ...this.state, tasks: tasks.push(draft) });
    // this.setState(state => ({ ...state, tasks: tasks.push(draft) }))
    // this.setState((state) => ({ ...state, tasks: list, draft: "" }));
    this.setState((state) => ({
      tasks: [...tasks, { text: draft }],
      draft: ""
    }));
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
          <ToDoItem id={task.text} key={task.text} text={task.text} done={task.done} />
          // <ToDoItem id={task.text} key={task.text} task={task} />
        ))}
        <input onChange={this.updateDraft} type="text" value={draft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    );
  }
}
// export default ToDoList

function App() {
  const myTasks = [
    { done: true, text: "Zad 3" },
    { done: false, text: "Zad 4" },
  ];
  return (
    <div>
      <ToDoList title="Moja lista" tasks={myTasks} />
    </div>
  );
}

export default App;
