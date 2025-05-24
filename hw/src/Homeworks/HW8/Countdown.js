import { useEffect, useRef, useState } from 'react'

import './style.css'

export default function Countdown({ seconds }) {
    const [count, setCount] = useState(seconds)
    const intervalId = useRef(null)

    useEffect(() => {
        if (count > 0) {
            intervalId.current = setInterval(() => {
                setCount(count - 1)
            }, 1000)
        } else {
            intervalId.current = null
        }
        return () => {
            if (intervalId.current) clearInterval(intervalId.current)
        }
    }, [count])

    return (
        <div>
            <div>{count}</div>
            {count === 0 && <div className="shake">Done</div>}
        </div>
    )
}
