export default function Task6({ skills }) {
    return (
        <div>
            <h1>Hard Skills</h1>
            <ul>
                {skills
                    .filter((i) => i.type === 'hard')
                    .map((i) => (
                        <li key={i.name} style={{ color: 'red' }}>
                            {i.name}
                        </li>
                    ))}
            </ul>

            <h1>Soft Skills</h1>
            <ul>
                {skills
                    .filter((i) => i.type === 'soft')
                    .map((i) => (
                        <li key={i.name} style={{ color: 'blue' }}>
                            {i.name}
                        </li>
                    ))}
            </ul>

            <h1>Basic Skills</h1>
            <ul>
                {skills
                    .filter((i) => i.type === 'basic')
                    .map((i) => (
                        <li key={i.name}>{i.name}</li>
                    ))}
            </ul>
        </div>
    )
}
