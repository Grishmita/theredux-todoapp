import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1222, text:"Complete Javascript Course"}]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
            console.log(action.payload)
        },
    }

})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer