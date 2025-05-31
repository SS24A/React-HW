export default function Person({ gender, name, age }) {
    return (
        <div style={{ margin: '50px' }}>
            <p>Gender: {gender}</p>
            <p>
                Name:
                <span style={{ margin: 2 }}>
                    {age >= 18 && gender === 'male'
                        ? 'Gospodin'
                        : age >= 18 && gender === 'female'
                        ? 'Gospoga'
                        : ''}
                </span>
                <span style={{ margin: 2 }}>{name}</span>
            </p>
            <p>Age: {age}</p>
        </div>
    )
}
