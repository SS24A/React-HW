export default function HardSkills({ skills }) {
    return (
        <div>
            <h1>Hard Skills</h1>
            <ol>
                {skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })}
            </ol>
        </div>
    )
}
