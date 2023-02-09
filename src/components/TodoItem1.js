import React from 'react'

import { useDispatch } from 'react-redux'
import { removeTodo } from './todoSlice'



const TodoItem = ({todo}) => {

  const dispatch = useDispatch()

  const removeHandlerTodo=(id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <div>
        {todo.text}

      <button onClick={()=>removeHandlerTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
