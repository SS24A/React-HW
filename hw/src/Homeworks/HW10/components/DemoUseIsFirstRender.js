import { useReducer } from 'react'
import useIsFirstRender from '../hooks/useIsFirstRender'

export default function DemoUseIsFirstRender() {
    const isFirstRender = useIsFirstRender()
    const [count, rerender] = useReducer((x) => x + 1, 1)

    return (
        <section>
            <h1>useIsFirstRender</h1>
            <h2>First Render? {isFirstRender ? 'Yes' : 'No'}</h2>
            <button onClick={rerender}>re-render</button>
            <p>Render Count: {count}</p>
        </section>
    )
}
