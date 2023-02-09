import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

const Form = ({todo}) => {
    const [value,setValue]=useState('')
     const dispatch =useDispatch()

     const addTodo = ()=>{
        const addHandlerTodo = {
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
      <button>Add</button>
    </div>
  )
}

export default Form
