import React from 'react'

export default function Password() {
    const [isHidden, setIsHidden] = React.useState(true)
    return (
        <div>
            <input type={isHidden ? 'password' : 'text'} />
            <button
                onClick={() => {
                    setIsHidden(!isHidden)
                }}
            >
                {isHidden ? 'Show' : 'Hide'} password
            </button>
        </div>
    )
}
