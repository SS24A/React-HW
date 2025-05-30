import useMouse from '../hooks/useMouse'

export function DemoUseMouse1() {
    const { ref, x, y } = useMouse({ resetOnExit: true })

    return (
        <div style={{ margin: '50px 20px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div
                    ref={ref}
                    style={{
                        width: 300,
                        height: 180,
                        backgroundColor: '#e3f2f7',
                        boxSizing: 'border-box',
                    }}
                />
            </div>
            <p style={{ textAlign: 'center' }}>
                Mouse coordinates <span>{`{ x: ${x}, y: ${y} }`}</span>
            </p>
        </div>
    )
}

export function DemoUseMouse2() {
    const { x, y } = useMouse({ resetOnExit: true })

    return (
        <div style={{ margin: '50px 20px' }}>
            <p style={{ textAlign: 'center' }}>
                Mouse coordinates <span>{`{ x: ${x}, y: ${y} }`}</span>
            </p>
        </div>
    )
}
