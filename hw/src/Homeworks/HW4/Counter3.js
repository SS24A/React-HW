import { useState } from 'react'

export default function Counter3({ amount }) {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{ margin: 50 }}>
            <p>{counter}</p>
            <button
                onClick={() =>
                    counter + amount <= 30 && setCounter(counter + amount)
                }
            >
                Increment
            </button>
            <button
                onClick={() =>
                    counter - amount >= 0 && setCounter(counter - amount)
                }
            >
                Decrement
            </button>
        </div>
    )
}
