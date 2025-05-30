import { useState } from 'react'
import useRenderCount from '../hooks/useRenderCount'

export default function DemoUseRenderCount({ isStrictModeOn = false }) {
    const renderCount = useRenderCount()
    const [count, setCount] = useState(0)

    return (
        <section>
            <header>
                <h1>useRenderCount</h1>
                <h6>{`{strict mode ${isStrictModeOn ? 'on' : 'off'}}`}</h6>
            </header>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <p>Render Count: {renderCount}</p>
        </section>
    )
}
