export default function ManySkills({ skills }) {
    return (
        <ul>
            {skills.map((skill, index) => {
                return (
                    <li
                        key={index}
                        style={{
                            color: skill.type === 'hard' ? 'red' : 'blue',
                        }}
                    >
                        {skill.name} ({skill.type})
                    </li>
                )
            })}
        </ul>
    )
}
