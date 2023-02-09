// import React,{useState} from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo } from './todoSlice'

const Form = () => {
  const dispatch = useDispatch()
    const [todoValue,setTodoValue]= useState('')

    const addTodoHandler =()=>{
        const todo = {
            id:Math.random(),
            text:todoValue,

        }
        dispatch(addTodo(todo))
        setTodoValue('')
    }

  return (
    <div>
      <input type="text"
      onChange={(e)=>setTodoValue(e.target.value)}
      value={todoValue} />
      <button  onClick={()=>addTodoHandler()}>Add Todo</button>
    </div>
  )
}

// export default Form
