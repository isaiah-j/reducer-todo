import React, { useReducer } from 'react'
import Todo from './todo'
import TodoForm from './todoform'

let initialState = [
    { id: 1, taskName: 'Some todo', completed: false },
    { id: 2, taskName: 'Some todo', completed: false },
    { id: 3, taskName: 'Some todo', completed: false },
    { id: 4, taskName: 'Some todo', completed: false },
    { id: 5, taskName: 'Some todo', completed: false },
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { id: new Date, completed: false, taskName: action.payload }
            return [...state, newTodo]
        case 'TOGGLE_TODO_COMPLETED':
            const { id, completed } = action.payload
            let newState = state.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed: !completed }
                }
                return todo
            })
            return newState
        case 'DELETE_COMPLETED_TODOS':
            const filterTodos = state.filter((todo) => {
                return !todo.completed
            })
            return filterTodos
        default:
            return state
    }

}

const TodoList = () => {
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {
                state.map(({ taskName, completed, id }) => {
                    return <Todo taskName={taskName} completed={completed} dispatch={dispatch} id={id}></Todo>
                })
            }
            <TodoForm dispatch={dispatch}></TodoForm>
        </div>
    )
}

export default TodoList