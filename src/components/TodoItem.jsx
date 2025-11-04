import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

function TodoItem({ task, removeTask, toggleTask }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow-sm">
      <span
        onClick={() => toggleTask(task.id)}
        className={`flex items-center gap-2 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        <CheckCircleIcon className={`h-5 w-5 ${task.completed ? 'text-yellow-400' : 'text-gray-400'}`} />
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>
        <XCircleIcon className="h-5 w-5 text-red-500 hover:text-red-700" />
      </button>
    </li>
  );
}

export default TodoItem;
