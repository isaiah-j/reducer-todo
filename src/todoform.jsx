import React, { useState } from 'react'
const TodoForm = ({ dispatch }) => {
    const [formValue, setFormValue] = useState('')
    const handleChange = (e) => {
        const { value } = e.target
        setFormValue(value)
    }

    const addTodo = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: formValue })
    }

    const deleteCompletedTodos = (e) => {
        console.log('From deleteCompletedTodos')
        dispatch({ type: 'DELETE_COMPLETED_TODOS' })
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={handleChange} />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={deleteCompletedTodos}>Clear Selected Todos</button>
        </form>
    )
}

export default TodoForm