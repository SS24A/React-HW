import { useEffect, useState } from 'react'

function randomIncrement() {
    return Math.floor(Math.random() * 9) + 1
}

function randomHexColor() {
    // Generate three random integers between 0 and 255
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    // Convert the RGB values to hexadecimal format
    const hexR = r.toString(16).padStart(2, '0') // padStart ensures at least two digits
    const hexG = g.toString(16).padStart(2, '0')
    const hexB = b.toString(16).padStart(2, '0')

    // Concatenate the hex values
    const hexColor = '#' + hexR + hexG + hexB

    return hexColor
}

export default function Colorful() {
    const [color, setColor] = useState('#000')
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count % 3 === 0 && count !== 0) setColor(randomHexColor()) // initial color black - condition (count !==0)
    }, [count])

    return (
        <p
            style={{ color: color, cursor: 'pointer' }}
            onClick={() => {
                setCount(count + randomIncrement())
            }}
        >
            Sometimes I change colors
        </p>
    )
}
