import { useState } from 'react'

export default function LuckyCounter() {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{ margin: 50 }}>
            <p>{counter % 3 === 0 && counter > 0 ? 'Lucky' : counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}
