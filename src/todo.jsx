import React from 'react'

import './App.css'

const Todo = ({taskName, completed, dispatch, id}) => {
    const handleClick = () => {
         dispatch({ type: 'TOGGLE_TODO_COMPLETED', payload: { completed: completed, id: id } })
    }
    return (
        <div>
            <h4 onClick={handleClick} className={completed ? 'completed': ''}>{taskName}</h4>
        </div>
    )
}

export default Todo