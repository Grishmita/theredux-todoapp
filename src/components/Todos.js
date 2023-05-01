import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { removeTodo, addTodo } from '../features/todoSlice'

function Todos () {
    const [addTask, setAddTask] = useState('') 
    const todos = useSelector((state) =>state.todos.todos)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo(addTask))
        setAddTask('')
    }


    return(
        <>
        <div>
            <form className="bg-yellow-300 flex justify-around py-5 px-6 rounded-md gap-3.5 max-md:p-4 max-sm:px-3 py-0.5">
                <input
                    type='text'
                    placeholder='add task'
                    value={addTask}
                    onChange={(event) =>setAddTask(event.target.value)}
                    required
                    className="w-full rounded-sm p-3 text-xl max-sm:px-2 py-1 text-base"
                />
                <button className="bg-green-300 rounded-md	text-white py-2 px-6 text-xl max-md:py-1 max-md:px-3 max-sm:text-base"
                onClick={handleSubmit} disabled={!addTask}>ADD</button>
            </form>
            <ul className="bg-[#FF6D60] py-5 px-7 text-white rounded-sm mt-8 max-md:px-3">
                {
                    todos.map( (todo) =>{
                    return(
                    <li className="grid grid-cols-12 rounded-sm text-xl items-center m-2.5 gap-2 max-lg:gap-0 max-sm:mx-0"
                    key={todo.id}>
                    <p className="col-span-10 border-4 border-yellow-300 text-red-500 bg-white p-2 rounded-md max-md:text-base p-1">{todo.text}</p>
                    <button
                    className=" bg-green-300 rounded-sm text-white capitalize py-1 px-3 text-md col-start-12 max-md:text-base py-1 px-1" 
                    onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                    )
                    })
                }
            </ul>

        </div>
        </>
    )
}

export default Todos