import { useState, useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function Todo() {
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

        <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">📝 Mes Tâches</h2>

            {/* Formulaire d’ajout en haut */}
            <TodoInput input={input} setInput={setInput} addTask={addTask} />

            {/* Liste des tâches */}
            <TodoList tasks={filteredTasks} removeTask={removeTask} toggleTask={toggleTask} />

            {/* Filtres + compteur en bas */}
            <div className="mt-6">
                <div className="flex gap-2 mb-2">
                    <button onClick={() => setFilter('all')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Toutes</button>
                    <button onClick={() => setFilter('active')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">À faire</button>
                    <button onClick={() => setFilter('completed')} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Terminées</button>
                </div>
                <p className="text-sm text-gray-500">
                    {filteredTasks.length} tâche{filteredTasks.length !== 1 ? 's' : ''} affichée{filteredTasks.length !== 1 ? 's' : ''}
                </p>
            </div>
        </div>
    );

}

export default Todo;
