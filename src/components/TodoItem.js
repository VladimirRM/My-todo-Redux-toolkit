import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from './todoSlice'


const TodoItem = () => {

    const dispatch = useDispatch()

    const removeHandlerTodo =id=>{
        dispatch(removeTodo(todo))
    }
  return (
    <div>TodoItem</div>
  )
}

export default TodoItem