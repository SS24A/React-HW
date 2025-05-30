import { useRef, useEffect } from 'react'

export default function useEventListener(event, handler) {
    const ref = useRef(null)
    useEffect(() => {
        const target = ref.current
        target.addEventListener(event, handler)
        return () => {
            target.removeEventListener(event, handler)
        }
    }, [event, handler])
    return ref
}
