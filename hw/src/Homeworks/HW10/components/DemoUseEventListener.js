import { useState, useCallback } from 'react'
import useEventListener from '../hooks/useEventListener'

export default function DemoUseEventListener() {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => setCount((c) => c + 1), [])
    const ref = useEventListener('click', increment)
    return <button ref={ref}>Button clicks: {count}</button>
}
