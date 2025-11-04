import { PlusIcon } from '@heroicons/react/24/solid';

function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
        placeholder="Ajouter une tâche"
      />
      <button
        onClick={addTask}
        className="bg-yellow-400 text-white px-3 py-2 rounded hover:bg-yellow-500 flex items-center gap-1"
      >
        <PlusIcon className="h-5 w-5" />
        Ajouter
      </button>
    </div>
  );
}

export default TodoInput;
