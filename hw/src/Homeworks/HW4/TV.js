import { useState } from 'react'

export default function TV({ channels }) {
    const [channelNumber, setChannelNumber] = useState(0)
    const font = ['N', 'F'].includes(channels[channelNumber][0])
        ? '20px'
        : '16px'

    return (
        <div style={{ margin: 50 }}>
            <button
                onClick={() => {
                    setChannelNumber((channelNumber + 1) % channels.length)
                }}
            >
                Next Channel
            </button>
            <p style={{ fontSize: font }}>{channels[channelNumber]}</p>
        </div>
    )
}
