import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

const Form = ({todo}) => {
    const [value,setValue]=useState('')
     const dispatch =useDispatch()

     const addHandlerTodo = ()=>{
        const todo = {
            id:Math.random(),
            text: value,
        }
        dispatch(addTodo(todo))
        setValue('')
     }

  return (
    <div>
      <input type="text"
      value={value}
      onChange={(e=>setValue(e.target.value))}
      />
      <button onClick={()=>addHandlerTodo}>Add</button>
    </div>
  )
}

export default Form
