import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    fetch("http://localhost:3000/todo")
      .then(async function(res){
        const json = res.json()
        setTodos(json.todos)
      })
  ])

  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={
      [
        {
          title:"hello from title 1",
          description:"hello from description 1"
        }
      ]
    }></Todos>
   </div>
  )
}

export default App
