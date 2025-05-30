import { useEffect, useRef, useState } from 'react'

export default function useMouse(options) {
    const resetOnExit = options ? options.resetOnExit : false
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
    const ref = useRef(null)

    useEffect(() => {
        const readMouseCoordinates = (e) => {
            ref.current
                ? setCoordinates({ x: e.offsetX, y: e.offsetY })
                : setCoordinates({ x: e.clientX, y: e.clientY })
        }

        const resetMouseCoordinates = () => {
            setCoordinates({ x: 0, y: 0 })
        }
        const target = ref.current ? ref.current : document
        target.addEventListener('mousemove', readMouseCoordinates)
        if (resetOnExit)
            target.addEventListener('mouseleave', resetMouseCoordinates)

        return () => {
            target.removeEventListener('mousemove', readMouseCoordinates)
            if (resetOnExit) {
                target.removeEventListener('mouseleave', resetMouseCoordinates)
            }
        }
    }, [resetOnExit])

    return { ref, x: coordinates.x, y: coordinates.y }
}
