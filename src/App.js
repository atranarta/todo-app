import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="app">
      <h1 className="header">Todo List</h1>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value="Todo one" />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;