import useWindowScroll from '../hooks/useWindowScroll'

export default function DemoUseWindowScroll() {
    const [scroll, scrollTo] = useWindowScroll()

    return (
        <div style={{ width: 2000, height: 1000, position: 'relative' }}>
            <div
                style={{
                    width: 700,
                    height: 100,
                    position: 'sticky',
                    top: 10,
                    left: 20,
                    margin: '5px 20px',
                }}
            >
                <div>
                    Scroll position x: {scroll.x}, y: {scroll.y}
                </div>
                <button
                    style={{ margin: 10 }}
                    onClick={() => scrollTo({ y: 0 })}
                >
                    Scroll to top
                </button>
                <button
                    style={{ margin: 10 }}
                    onClick={() => scrollTo({ x: 0 })}
                >
                    Scroll to left
                </button>
            </div>
        </div>
    )
}
