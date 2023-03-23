import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.name} <FaTimes color="red" />
      </h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
