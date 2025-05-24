import { useEffect, useState } from 'react'

import './style.css'

export default function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getComments() {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/comments'
                )
                const data = await response.json()
                setComments(data)
            } catch (e) {
                console.log(e.message)
            }
        }
        getComments()
        // setTimeout(getComments, 3000)
        // for testing purposes
    }, [])

    if (comments.length === 0)
        return (
            <div
                className="loader"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate (50%, 50%)',
                }}
            ></div>
        )

    return (
        <ul
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 20,
                listStyle: 'none',
                maxWidth: 1200,
                margin: '50px auto',
            }}
        >
            {comments.map((c) => {
                return (
                    <li
                        key={c.id}
                        style={{
                            width: 350,
                            border: '1px solid lightgrey',
                            backgroundColor: 'lightcyan',
                            borderRadius: 20,
                            padding: 15,
                        }}
                    >
                        <h3>{c.name}</h3>
                        <p>{c.body}</p>
                    </li>
                )
            })}
        </ul>
    )
}
