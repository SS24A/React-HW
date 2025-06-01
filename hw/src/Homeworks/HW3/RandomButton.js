function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

export default function RandomButton() {
    const getRGBValue = () => {
        return getRandomIntInclusive(0, 255)
    }
    const getColor = () => {
        return `rgb(${getRGBValue()}, ${getRGBValue()}, ${getRGBValue()})`
    }

    const maxFont = 32
    const minFont = 14
    const maxRadius = 30
    const minRadius = 0

    const styleObject = {
        color: getColor(),
        backgroundColor: getColor(),
        border: `2px solid ${getColor()}`,
        fontSize: `${getRandomIntInclusive(minFont, maxFont)}px`,
        borderRadius: `${getRandomIntInclusive(minRadius, maxRadius)}px`,
    }

    return <button style={styleObject}>Random button</button>
}
