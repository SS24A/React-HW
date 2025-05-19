import { useState } from 'react'
import Input from './Input'

export default function Groceries() {
    const [groceries, setGroceries] = useState([])
    const [completed, setCompleted] = useState([])
    const [input, setInput] = useState('')
    const [deleteCount, setDeleteCount] = useState(0)

    const uncompletedItemCheck = groceries.find(
        (i) => i.toLowerCase() === input.toLowerCase()
    )

    const completedItemCheck = completed.find(
        (i) => i.name.toLowerCase() === input.toLowerCase()
    )

    const timeToNewGroceryPurchase = 2 * 24 * 60 * 60 * 1000

    const addNewItem = () => {
        if (input.trim() === '')
            return alert('Name not entered, please enter grocery name')

        if (groceries.length >= 14)
            return alert('cannot add more than 14 items in the list')

        if (uncompletedItemCheck) return alert('exists already')

        if (completedItemCheck) {
            const currentTime = new Date().toLocaleString()
            const currentTimeTimestamp = Date.parse(currentTime)
            const timeBoughtTimestamp = Date.parse(completedItemCheck.boughtAt)
            if (
                currentTimeTimestamp <=
                timeBoughtTimestamp + timeToNewGroceryPurchase
            )
                return alert('exists already')
        }

        setGroceries([...groceries, input])
        setInput('')
    }

    const deleteItem = (item) => {
        if (deleteCount < 10) {
            setGroceries(groceries.filter((e) => e !== item))
        } else {
            alert('cannot delete more than 10 items')
        }
        setDeleteCount(deleteCount + 1)
    }

    const setToCompleted = (item) => {
        setGroceries(groceries.filter((it) => it !== item))
        setCompleted([
            ...completed,
            {
                name: item,
                boughtAt: new Date().toLocaleString(),
            },
        ])
    }

    return (
        <div style={{ width: 400, margin: '20px 30px' }}>
            <Input input={input} setInput={setInput} />
            <button onClick={addNewItem}>Add</button>
            <h2>
                {groceries.length !== 0 ? 'Groceries list' : 'No groceries yet'}
            </h2>
            {groceries.length !== 0 && (
                <ul>
                    {groceries.map((item) => (
                        <li
                            key={item}
                            style={{
                                display: 'flex',
                                width: 200,
                                justifyContent: 'space-between',
                                margin: '5px 0',
                            }}
                        >
                            <span style={{ width: 100 }}>{item}</span>
                            <button onClick={() => deleteItem(item)}>X</button>
                            <button onClick={() => setToCompleted(item)}>
                                Done
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {completed.length !== 0 && <h2>Completed Groceries list</h2>}
            {completed.length !== 0 && (
                <ul style={{ padding: 0 }}>
                    {completed.map((item) => (
                        <li
                            key={item.name}
                            style={{
                                display: 'flex',
                                width: 300,
                                justifyContent: 'space-between',
                                margin: '5px 0',
                            }}
                        >
                            <span style={{ margin: 10 }}>{item.name}</span>
                            <span style={{ margin: 10 }}>{item.boughtAt}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
