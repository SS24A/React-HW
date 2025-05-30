import { useEffect, useState } from 'react'

export default function useTimer() {
    const [time, setTime] = useState({ min: 0, sec: 0 })
    const [isRunning, setIsRunning] = useState(false)

    const resetTimer = () => {
        setTime({ min: 0, sec: 0 })
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const startTimer = () => {
        setIsRunning(true)
    }

    useEffect(() => {
        let intervalId = null
        const updateTime = (min, sec) => {
            if (sec < 59) {
                sec = sec + 1
            } else {
                sec = 0
                min = min + 1
            }
            return { min, sec }
        }
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((time) => updateTime(time.min, time.sec))
            }, 1000)
        }
        return () => {
            if (isRunning) {
                clearInterval(intervalId)
            }
        }
    }, [isRunning])

    return { time, isRunning, startTimer, stopTimer, resetTimer }
}
