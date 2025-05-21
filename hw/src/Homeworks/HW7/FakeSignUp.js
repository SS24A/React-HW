import { useRef, useState } from 'react'
import processData from './processData'

//Version with checkboxes
export function FakeSignUp1() {
    const firstNameInputRef = useRef(null)
    const lastNameInputRef = useRef(null)
    const genderMaleRef = useRef(null)
    const genderFemaleRef = useRef(null)
    const colorInputRef = useRef(null)
    const birthdayInputRef = useRef(null)
    const ageInputRef = useRef(null)
    const countFailedAttempts = useRef(0)
    const [message, setMessage] = useState('')
    const bannedSubmitText = 'You are banned from submitting again'

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                const result = processData({
                    age: ageInputRef.current.value,
                    gender: genderMaleRef.current.checked ? 'male' : 'female',
                    color: colorInputRef.current.value,
                    firstname: firstNameInputRef.current.value,
                    lastname: lastNameInputRef.current.value,
                    birthdate: birthdayInputRef.current.value,
                })
                if (!result.success)
                    countFailedAttempts.current =
                        countFailedAttempts.current + 1

                const messageToDisplay =
                    countFailedAttempts.current < 6
                        ? result.message
                        : bannedSubmitText
                setMessage(messageToDisplay)
            }}
        >
            <input
                placeholder="First Name"
                ref={firstNameInputRef}
                name="firstName"
            />
            <input
                placeholder="Last Name"
                ref={lastNameInputRef}
                name="lastName"
            />

            <p>
                <input
                    type="checkbox"
                    name="gender"
                    ref={genderMaleRef}
                    onChange={(e) => {
                        if (e.target.checked)
                            genderFemaleRef.current.checked = false //added to disable selection of both male and female
                    }}
                />
                Male
            </p>
            <p>
                <input
                    type="checkbox"
                    name="gender"
                    ref={genderFemaleRef}
                    onChange={(e) => {
                        if (e.target.checked)
                            genderMaleRef.current.checked = false
                    }}
                />
                Female
            </p>

            <p>
                Favorite Color
                <input type="color" ref={colorInputRef} name="color" />
            </p>

            <p>
                Birthday
                <input type="date" ref={birthdayInputRef} name="birthday" />
            </p>

            <p>
                Age
                <input
                    style={{ width: '35px' }}
                    type="number"
                    name="age"
                    min={1}
                    max={100}
                    ref={ageInputRef}
                />
            </p>

            <button disabled={message === bannedSubmitText}>Submit</button>
            <div>{message}</div>
        </form>
    )
}

//Version with dropdown (select)
export function FakeSignUp2() {
    const firstNameInputRef = useRef(null)
    const lastNameInputRef = useRef(null)
    const genderRef = useRef(null)
    const colorInputRef = useRef(null)
    const birthdayInputRef = useRef(null)
    const ageInputRef = useRef(null)
    const countFailedAttempts = useRef(0)
    const [message, setMessage] = useState('')
    const bannedSubmitText = 'You are banned from submitting again'

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                const result = processData({
                    age: ageInputRef.current.value,
                    gender: genderRef.current.value,
                    color: colorInputRef.current.value,
                    firstname: firstNameInputRef.current.value,
                    lastname: lastNameInputRef.current.value,
                    birthdate: birthdayInputRef.current.value,
                })
                if (!result.success)
                    countFailedAttempts.current =
                        countFailedAttempts.current + 1

                const messageToDisplay =
                    countFailedAttempts.current < 6
                        ? result.message
                        : bannedSubmitText
                setMessage(messageToDisplay)
            }}
        >
            <input
                placeholder="First Name"
                ref={firstNameInputRef}
                name="firstName"
            />
            <input
                placeholder="Last Name"
                ref={lastNameInputRef}
                name="lastName"
            />
            <p>
                Gender
                <select ref={genderRef} name="gender" defaultValue={''}>
                    <option value={''} disabled>
                        -------
                    </option>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                </select>
            </p>

            <p>
                Favorite Color
                <input type="color" ref={colorInputRef} name="color" />
            </p>

            <p>
                Birthday
                <input type="date" ref={birthdayInputRef} name="birthday" />
            </p>

            <p>
                Age
                <input
                    style={{ width: '35px' }}
                    type="number"
                    name="age"
                    min={1}
                    max={100}
                    ref={ageInputRef}
                />
            </p>

            <button disabled={message === bannedSubmitText}>Submit</button>
            <div>{message}</div>
        </form>
    )
}
