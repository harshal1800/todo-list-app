import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
