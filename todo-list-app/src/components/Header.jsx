import { useState } from 'react';

function Header({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1> To-Do List</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '8px', width: '300px' ,fontFamily: 'cursive'}}
        />
        <button type="submit" style={{ padding: '8px 16px',fontFamily: 'cursive' }}>Add</button>
      </form>
    </header>
  );
}

export default Header;
