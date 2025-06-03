import { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: todo.completed ? '#e0ffe0' : '#fff',
        fontFamily: 'cursive',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ flex: 1, padding: '5px' , fontFamily: 'cursive' }}
        />
      ) : (
        <span
          style={{
            flex: 1,
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}  style={{ fontFamily: 'cursive' }}>
       {isEditing ? 'Save' : 'Edit'}</button>
       
      <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' ,fontFamily: 'cursive'}}>
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
