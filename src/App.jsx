import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Buy groceries',
      description: 'Milk, eggs, bread, and cheese',
      reminder: true,
    },
    {
      id: 2,
      text: 'Finish work report',
      description: 'Complete the sales report for Q1',
      reminder: false,
    },
    {
      id: 3,
      text: 'Go for a run',
      description: 'Run for 30 minutes in the park',
      reminder: true,
    },
    {
      id: 4,
      text: 'Call mom',
      description: "Ask how she's doing and catch up on family news",
      reminder: false,
    },
  ]);
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  // Delete task from the UI
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  // Toggle the reminder
  const reminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowForm(!showForm)}
        showAddText={showForm}
      />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} />
      ) : (
        <h4>No Task to Show</h4>
      )}
    </div>
  );
}

export default App;
