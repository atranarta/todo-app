import React, { useState } from 'react';
import './index.scss';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Cook lunch',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
  };

  const createTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  return (
    <div className="app">
      <h1 className="header">Todo List</h1>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox" />
              <input 
                type="text" 
                value={todo.content} 
                onKeyDown={e => handleKeyDown(e, i)} 
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;