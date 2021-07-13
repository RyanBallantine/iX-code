import React, { Component } from 'react';
import './TaskTable.css';

export default class TaskTable extends Component {
    onToggleTaskComplete(task) {
        task.completed = !task.completed;
        this.props.taskUpdated(task);
    }

    render() {
        return (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Completed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.tasks.map(task => {
                    return <tr key={task.id}>
                      <th>{task.name}</th>
                      <td>
                        <i className={
                          task.completed ? "bi bi-circle-fill text-success pointer" : "bi bi-circle pointer"
                        }
                          onClick={() => this.onToggleTaskComplete(task)}></i>
                      </td>
                      <td>
                        <i className="bi bi-trash pointer"
                        onClick={() => this.props.taskRemoved(task.id)}></i>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
    
          </div>
        )
      }
}
