import TodoItem from './TodoItem';

function TodoList({ tasks, removeTask, toggleTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
