import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      name: 'Buy groceries',
      description: 'Milk, eggs, bread, and cheese',
      reminder: true,
    },
    {
      id: 2,
      name: 'Finish work report',
      description: 'Complete the sales report for Q1',
      reminder: false,
    },
    {
      id: 3,
      name: 'Go for a run',
      description: 'Run for 30 minutes in the park',
      reminder: true,
    },
    {
      id: 4,
      name: 'Call mom',
      description: "Ask how she's doing and catch up on family news",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
