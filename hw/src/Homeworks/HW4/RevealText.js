import { useState } from 'react'

export default function RevealText({ text }) {
    const [revealedText, setRevealedText] = useState('')
    return (
        <div style={{ margin: 50 }}>
            <button
                disabled={revealedText === text}
                onClick={() => {
                    setRevealedText(
                        revealedText.concat(text[revealedText.length])
                    )
                }}
            >
                Reveal
            </button>
            <p>{revealedText}</p>
            {revealedText === text && (
                <p style={{ color: 'green' }}>Word Revealed</p>
            )}
        </div>
    )
}
