import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{ margin: 50 }}>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 2)}>Increment</button>
            <button onClick={() => setCounter(counter - 2)}>Decrement</button>
        </div>
    )
}
