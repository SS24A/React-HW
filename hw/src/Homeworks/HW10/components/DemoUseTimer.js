import useTimer from '../hooks/useTimer'

export default function DemoUseTimer() {
    const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer()

    const formatMinutes = String(time.min).padStart(2, 0)
    const formatSeconds = String(time.sec).padStart(2, 0)
    const timeString = `${formatMinutes}:${formatSeconds}`

    return (
        <div style={{ margin: '50px auto', width: 300 }}>
            <div style={{ margin: '20px 50px', textAlign: 'center' }}>
                {timeString}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                {!isRunning && timeString === '00:00' && (
                    <button onClick={startTimer}>Start Timer</button>
                )}
                {!isRunning && timeString !== '00:00' && (
                    <button onClick={startTimer}>Resume</button>
                )}
                {isRunning && <button onClick={stopTimer}>Stop Timer</button>}
                {!isRunning && timeString !== '00:00' && (
                    <button onClick={resetTimer}>Reset Timer</button>
                )}
            </div>
        </div>
    )
}
