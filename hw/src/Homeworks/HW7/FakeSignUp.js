import { useRef, useState } from 'react'
import processData from './processData'

//Version with checkboxes
export function FakeSignUp1() {
    const [formData, setFormData] = useState({ age: "", gender: "", color: "#000000", firstName: "", lastName: "", birthdate: "" })
    const countFailedAttempts = useRef(0)
    const [message, setMessage] = useState('')
    const bannedSubmitText = 'You are banned from submitting again'

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = processData({
            age: formData.age,
            gender: formData.gender,
            color: formData.color,
            firstname: formData.firstName,
            lastname: formData.lastName,
            birthdate: formData.birthdate,
        })
        if (!result.success) countFailedAttempts.current += 1
        console.log(formData)

        setMessage(countFailedAttempts.current < 6
            ? result.message
            : bannedSubmitText)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

            <p>
                <input
                    type="checkbox"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                Male
            </p>
            <p>
                <input
                    type="checkbox"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                Female
            </p>

            <p>
                Favorite Color
                <input type="color" name="color" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })} />
            </p>

            <p>
                Birthday
                <input type="date" name="birthday" value={formData.birthdate} onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })} />
            </p>

            <p>
                Age
                <input
                    style={{ width: '35px' }}
                    type="number"
                    name="age"
                    min={1}
                    max={100}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
            </p>

            <button disabled={message === bannedSubmitText}>Submit</button>
            <div>{message}</div>
        </form>
    )
}

//Version with dropdown (select)
export function FakeSignUp2() {
    const [formData, setFormData] = useState({ age: "", gender: "", color: "#000000", firstName: "", lastName: "", birthdate: "" })
    const countFailedAttempts = useRef(0)
    const [message, setMessage] = useState('')
    const bannedSubmitText = 'You are banned from submitting again'

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = processData({
            age: formData.age,
            gender: formData.gender,
            color: formData.color,
            firstname: formData.firstName,
            lastname: formData.lastName,
            birthdate: formData.birthdate,
        })
        if (!result.success) countFailedAttempts.current += 1
        console.log(formData)
        setMessage(countFailedAttempts.current < 6
            ? result.message
            : bannedSubmitText)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

            <p>
                Gender
                <select name="gender" defaultValue={''} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                    <option value={''} disabled>
                        -------
                    </option>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                </select>
            </p>

            <p>
                Favorite Color
                <input type="color" name="color" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })} />
            </p>

            <p>
                Birthday
                <input type="date" name="birthday" value={formData.birthdate} onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })} />
            </p>

            <p>
                Age
                <input
                    style={{ width: '35px' }}
                    type="number"
                    name="age"
                    min={1}
                    max={100}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
            </p>

            <button disabled={message === bannedSubmitText}>Submit</button>
            <div>{message}</div>
        </form>
    )
}

