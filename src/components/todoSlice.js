import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
}

const todoSlice = createSlice({
    name:' todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
    }
})


