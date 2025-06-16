import React, { useState } from 'react';
const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEditTask = () => {
    if (task.trim() === '') return;

    if (editIndex !== null) {
      // Editing existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Adding new task
      setTasks([...tasks, task]);
    }
    setTask('');
  };
  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    if (editIndex === index) {
      setTask('');
      setEditIndex(null);
    }
  };

  const handleEditClick = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌟 My Colorful To-Do List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrEditTask} style={styles.button}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks yet! 🎉</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.taskText}>{item}</span>
              <div>
                <button onClick={() => handleEditClick(index)} style={styles.editBtn}>✏️</button>
                <button onClick={() => handleDeleteTask(index)} style={styles.deleteBtn}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '50px auto',
    padding: '25px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '20px',
    fontSize: '24px',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 18px',
    fontSize: '16px',
    backgroundColor: '#6a11cb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  taskText: {
    fontSize: '16px',
    flex: 1,
    wordBreak: 'break-word',
  },
  editBtn: {
    marginRight: '8px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: 'red',
  },
  empty: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
};

export default TodoApp;
