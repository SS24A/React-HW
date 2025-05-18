import React from 'react'

export default function Lightbulb2() {
    const [isOn, setIsOn] = React.useState(false)
    const srcOff =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8zYeUT89G2vUAWuzFsjt2z7NDUVqW1rMUA&s'
    const srcOn =
        'https://www.shutterstock.com/image-vector/incandescent-light-bulb-lightbulb-turned-600nw-522240046.jpg'

    return (
        <div>
            <img
                src={isOn ? srcOn : srcOff}
                alt="lightbulb"
                style={{ width: 200, height: 200 }}
                onClick={() => {
                    setIsOn(!isOn)
                }}
            />
        </div>
    )
}

//the second url in the task (HW5.txt) doesn't work, an alternative url is used
