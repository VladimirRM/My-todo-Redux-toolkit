import React,{useState} from 'react'
import { addTodo } from './todoSlice'
import { useDispatch } from 'react-redux'


const Form = () => {
    const dispatch = useDispatch()
    const {value,setValue}= useState('')

    const addTodoHandler = ()=>{
        const todo = {
            id:Math.random(),
            text: value,
        } 
        dispatch(addTodo(todo))
        
    }
       

  return (
    <div>

        <input type="text"
        
        
        onChange={}/>
    </div>
  )
}

export default Form