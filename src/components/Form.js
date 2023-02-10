import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './TodoItem'

const Form = () => {

    const dispatch = useDispatch()

     const addTodoHandler = ()=>{
        const todo = {
            id:Math.random(),
            text:value,
        }
     }
  return (
    <div>
      
    </div>
  )
}

export default Form
