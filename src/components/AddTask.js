import React, { Component } from 'react'
import Task from '../models/Task';

export default class AddTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  onAddTask() {
    const task = new Task(this.state.name);
    this.props.createTask(task);
    this.setState({ name: '' })
  }

  onInputChanged(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div className="mt-3">
        <div className="input-group mb-3">
          <input
            value={this.state.name}
            onChange={(e) => this.onInputChanged(e)}
            type="text"
            className="form-control"
            placeholder="Task" />

          <button onClick={() => this.onAddTask()}
            className="btn btn-outline-secondary"
            type="button" >+</button>
        </div>
      </div>
    )
  }
}
