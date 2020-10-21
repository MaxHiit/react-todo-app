import React, { Component } from "react";
import "./inputbar.scss";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleReset() {
    this.setState({
      inputText: ""
    });
  }

  render() {
    return (
      <form
        className="input-container"
        onSubmit={(e) => {
          this.props.handleSubmit(e, this.state.inputText);
          this.handleReset();
        }}
      >
        <label>
          <input
            type="text"
            name="text"
            placeholder="Enter a task"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default InputBar;
