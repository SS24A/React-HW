import { useEffect, useState } from 'react'

export default function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x: window.scrollX.toFixed(2),
        y: window.scrollY.toFixed(2),
    })

    useEffect(() => {
        const handleScroll = () => {
            setScroll({
                x: window.scrollX.toFixed(2),
                y: window.scrollY.toFixed(2),
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function scrollToPosition({ x, y }) {
        window.scrollTo(x ?? scroll.x, y ?? scroll.y)
    }

    return [scroll, scrollToPosition]
}
