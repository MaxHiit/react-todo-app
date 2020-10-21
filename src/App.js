import React, { Component } from "react";
// import Components
import Header from "./Components/Header/Header";
import InputBar from "./Components/inputBar/InputBar";
import TodoItem from "./Components/todoList/TodoItem";
// import Style
import "./style/app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      completedCheck: false,
      inCompletedCheck: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event, taskName) {
    event.preventDefault();
    const taskNameTrim = taskName.trim();
    if (!taskNameTrim.length) return;

    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: Math.random(),
          taskName: taskNameTrim,
          validate: false
        }
      ]
    });
  }

  handleChange(id) {
    this.setState({
      tasks: this.state.tasks.map((task) => ({
        ...task,
        validate: task.id === id ? !task.validate : task.validate
      }))
    });
  }

  handleClick(name) {
    if (name === "completed") {
      this.setState({
        completedCheck: !this.state.completedCheck
      });
    }
    if (name === "incompleted") {
      this.setState({
        inCompletedCheck: !this.state.inCompletedCheck
      });
    }
  }

  handleDelete(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id)
    });
  }

  todoCreator(task) {
    const completed = this.state.completedCheck;
    const incompleted = this.state.inCompletedCheck;
    const todoItem = {
      id: task.id,
      taskName: task.taskName,
      validate: task.validate,
      handleChange: this.handleChange,
      handleDelete: this.handleDelete
    };
    if (!completed && !incompleted) {
      return <TodoItem key={task.id} {...todoItem} />;
    }
    if (incompleted && !task.validate && !completed) {
      return <TodoItem key={task.id} {...todoItem} />;
    }
    if (completed && task.validate && !incompleted) {
      return <TodoItem key={task.id} {...todoItem} />;
    }
    return null;
  }

  render() {
    const countValidate = this.state.tasks.filter((t) => t.validate === true).length;
    const countNotValidate = this.state.tasks.filter((t) => t.validate === false).length;

    return (
      <div className="app">
        <div className="app-container">
          <Header
            handleClick={this.handleClick}
            inCompletedCheck={this.state.inCompletedCheck}
            completedCheck={this.state.completedCheck}
            count={{ countValidate, countNotValidate }}
          />
          <InputBar handleSubmit={this.handleSubmit} />
          {this.state.tasks && (
            <div className="todo-list">
              {this.state.tasks.map((task) => this.todoCreator(task))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
