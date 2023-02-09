import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/Form'
import TodoItem from './components/TodoItem'

const App = () => {

    const todos = useSelector((state)=>state.todo.todos)
  return (
    <div>

       {todos.map(todo=>(
       <TodoItem
       key={todo.id}
       todo={todo}/>

       ))}
        <Form/>
    </div>
  )
}

export default App