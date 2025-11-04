import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-800 p-6 text-gray-100">
      <div className="max-w-md mx-auto bg-white text-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500">📝 To-Do List</h1>
        <TodoInput input={input} setInput={setInput} addTask={addTask} />
        <div className="flex gap-2 mb-4">
          <button onClick={() => setFilter('all')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Toutes</button>
          <button onClick={() => setFilter('active')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">À faire</button>
          <button onClick={() => setFilter('completed')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Terminées</button>
        </div>
        <TodoList tasks={filteredTasks} removeTask={removeTask} toggleTask={toggleTask} />
      </div>
    </div>

  );
}

export default App;
