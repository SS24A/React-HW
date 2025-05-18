import React from 'react'
import '../HW5.css'

function Key({ char, word, setWord, isCapsLockOn }) {
    return (
        <button
            className="key"
            onClick={() => {
                if (!(char === ' ' && word[word.length - 1] === ' '))
                    setWord(
                        word.concat(isCapsLockOn ? char.toUpperCase() : char)
                    )
            }}
        >
            {char === ' ' ? 'Space' : char}
        </button>
    )
}

export default function Keyboard({ chars }) {
    const [word, setWord] = React.useState('')
    const [isCapsLockOn, setIsCapsLockOn] = React.useState(false)
    return (
        <div>
            <div
                style={{
                    backgroundColor: 'lightgray',
                    padding: '10px',
                    height: '10px',
                    width: '400px',
                }}
            >
                {word}
            </div>
            {chars.map((char) => {
                return (
                    <Key
                        key={char}
                        char={char}
                        word={word}
                        setWord={setWord}
                        isCapsLockOn={isCapsLockOn}
                    />
                )
            })}
            <Key
                key={' '}
                char={' '}
                word={word}
                setWord={setWord}
                isCapsLockOn={isCapsLockOn}
            />
            <button
                onClick={() => {
                    setWord('')
                }}
                className="clear"
            >
                clear
            </button>
            <button
                onClick={() => {
                    setIsCapsLockOn(!isCapsLockOn)
                }}
                className={`caps-lock ${isCapsLockOn ? 'on' : ''} `}
            >
                Caps Lock
            </button>
        </div>
    )
}
