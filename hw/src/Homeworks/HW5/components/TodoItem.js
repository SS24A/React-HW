import React from 'react'

export default function TodoItem({ todo }) {
    const initialState = todo.completed === 'true' ? true : false
    const [isCompleted, setIsCompleted] = React.useState(initialState)

    return (
        <div>
            <span
                style={{
                    textDecoration: isCompleted ? 'line-through' : '',
                    cursor: 'pointer',
                }}
                onClick={() => setIsCompleted(!isCompleted)}
            >
                {todo.text}
            </span>
        </div>
    )
}
