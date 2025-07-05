// HeadersComponent.jsx
import React, { useState, useEffect } from 'react';

export function HeadersComponent() {
  const [headers, setHeaders] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch headers
        const responseHeaders = await fetch('https://todobackend.rohithreddy.dev/todo');
        const headersObject = {};
        responseHeaders.headers.forEach((value, name) => {
          headersObject[name] = value;
        });
        setHeaders(headersObject);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
