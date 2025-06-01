export default function TwoButton({ leftButtonStyle, rightButtonStyle }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '300px',
                margin: 'auto',
            }}
        >
            <button style={leftButtonStyle}>Left</button>
            <button style={rightButtonStyle}>Right</button>
        </div>
    )
}
