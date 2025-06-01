import { useState } from 'react'

export default function TodoList({ todos }) {
    const [todosArray, setTodosArray] = useState(todos)
    return (
        <div>
            <div>
                Completed ({todosArray.filter((t) => t.completed).length})
            </div>
            <div>
                {todosArray.map((t) => (
                    <div key={t.title}>
                        <h3
                            style={{
                                textDecoration: t.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            Title: {t.title}
                        </h3>
                        <p>Description: {t.description}</p>
                        <button
                            onClick={() => {
                                setTodosArray(
                                    todosArray.map((item) => {
                                        if (item.title === t.title) {
                                            item.completed = !item.completed
                                        }
                                        return item
                                    })
                                )
                            }}
                        >
                            {t.completed
                                ? 'Set to uncompleted'
                                : 'Set to completed'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
