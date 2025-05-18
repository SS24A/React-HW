import React from 'react'

export default function Box() {
    const [dimension, setDimension] = React.useState('50')
    return (
        <div
            style={{
                backgroundColor: 'green',
                width: `${dimension}px`,
                height: `${dimension}px`,
                cursor: 'pointer',
            }}
            onClick={() => {
                dimension === '50'
                    ? setDimension('100')
                    : dimension === '100'
                        ? setDimension('150')
                        : setDimension('50')
            }}
        ></div>
    )
}
