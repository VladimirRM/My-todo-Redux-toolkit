import React from 'react'
import { useDispatch } from 'react-redux'


const TodoItem = () => {

    const dispatch = useDispatch()
  return (
    <div>
      {todoSlice.text}
      <button onClick={()=>removeHandlerTodo}></button>
    </div>
  )
}

export default TodoItem
