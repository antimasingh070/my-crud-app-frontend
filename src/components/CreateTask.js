import React, { useState } from 'react';
import axios from 'axios';
import './CreateTask.css';

function CreateTask() {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3000/api/tasks', task);
      // Handle success
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="task-form">
      <h2>Create a New Task</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="Enter the title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder="Enter the description"
          />
        </div>
        <button className="create-button" onClick={handleCreate}>Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
