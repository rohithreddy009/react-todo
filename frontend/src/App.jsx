import { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import { HeadersComponent } from './components/HeadersComponent';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://todobackend.rohithreddy.dev/todo");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []); 
  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Todos</h1>
      <CreateTodo />
      <h1 style={{ textDecoration: 'underline' }}>Your Todos</h1>
      <Todos todos={todos} />
      <HeadersComponent />
    </div>
  );
}

export default App;
