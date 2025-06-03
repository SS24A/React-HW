import { useState } from 'react'

export default function Counter2({ amount }) {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{ margin: 50 }}>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + amount)}>
                Increment
            </button>
            <button onClick={() => setCounter(counter - amount)}>
                Decrement
            </button>
        </div>
    )
}
