import { useEffect, useRef, useState } from 'react'
import './style.css'

export default function Sunset() {
    const [top, setTop] = useState(0)
    const intervalId = useRef(null)
    const skyRef = useRef(null)
    const sunRef = useRef(null)
    const [classColorChange, setClassColorChange] = useState('')

    useEffect(() => {
        if (top < skyRef.current.offsetHeight) {
            intervalId.current = setInterval(() => {
                setTop(top + 3)
            }, 200)
        } else {
            intervalId.current = null
        }

        return () => {
            if (intervalId.current) clearInterval(intervalId.current)
        }
    }, [top])

    useEffect(() => {
        const sunHeight = sunRef.current.offsetHeight
        const skyHeight = skyRef.current.offsetHeight
        const sunTopPositionHalfVisible = skyHeight - sunHeight / 2
        const sunTopPositionQuarterVisible = skyHeight - sunHeight / 4
        if (top >= sunTopPositionQuarterVisible) {
            setClassColorChange('redish')
        } else if (top >= sunTopPositionHalfVisible) {
            setClassColorChange('golden')
        }
    }, [top])

    return (
        <div className="canvas">
            <div className="sun" style={{ top: `${top}px` }} ref={sunRef}></div>
            <div className={`sky ${classColorChange}`} ref={skyRef}></div>
            <div className="sea"></div>
            <div className="sand"></div>
        </div>
    )
}
