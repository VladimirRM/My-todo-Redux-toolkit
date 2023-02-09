import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from './todoSlice'

const TodoItem = ({todo,text}) => {
    const dispatch = useDispatch()

    const deleteTodoHandler =(id)=>{
        dispatch(removeTodo(id))
    }
  return (
    <div>
        {todo.text}
        <button onClick={()=>deleteTodoHandler(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem