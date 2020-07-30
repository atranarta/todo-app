import React, { useState } from 'react';
import './index.scss';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Make lunch',
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
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
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

  const updateTodoAtIndex = (e, i) => {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  const removeTodoAtIndex = i => {
    if (todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      if (i > 0) {
        document.forms[0].elements[i - 1].focus();
      }
    }, 0);
  }

  const toggleTodoCompleteAtIndex = i => {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isCompleted = !temporaryTodos[i].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <h1 className="header">Todo List</h1>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div key={i} className={`todo ${todo.isCompleted && 'completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;