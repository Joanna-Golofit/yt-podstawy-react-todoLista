import './App.css';
import React, { Component } from 'react'

class ToDoList extends Component {
  static defaultProps = {
    title: "Ten tytul jesli props nie byl podany",
    tasks: ["Zad 6", "Zad 7", "Zad 8"]
  };

  state = {
    tasks: this.props.tasks,
    draft: "",
  }

  updateDraft = (e) => {
    this.setState(state => ({ draft: e.target.value }));
    console.log("draft:", this.state.draft)
  }

  addToDo = () => {
    const { tasks, draft } = this.state;
    // this.setState({ tasks: tasks.push(draft), draft: "" });
    const list = tasks
    list.push(draft)
    // this.setState({tasks: list, draft: ""})
    // this.setState({ ...this.state, tasks: tasks.push(draft) });
    // this.setState(state => ({ ...state, tasks: tasks.push(draft) }))
    this.setState(state => ({ ...state, tasks: list, draft: "" }))
  }
  
  klik = () => console.log("this.state:", this.state , "this.props:", this.props)

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <p>Zad 1</p>
        </div>
        {this.props.tasks.map((task) => (
          <div key={task}>
            <p>{task}</p>
          </div>
        ))}
        <input onChange={this.updateDraft} type="text" value={this.state.draft}/>
        <button onClick={this.addToDo}>Add</button>
      </div>
    );
  }
}
// export default ToDoList

function App() {
  const myTasks = ["Zad 3", "Zad 4", "Zad 5"]
  return (
    <div>
      <ToDoList title="Moja lista" tasks={myTasks} />
      <ToDoList />
    </div>
  );
}

export default App;
