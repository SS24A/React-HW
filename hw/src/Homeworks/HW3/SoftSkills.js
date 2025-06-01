export default function SoftSkills({ skills }) {
    return (
        <div>
            <h1>Soft Skills</h1>
            <ul>
                {skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })}
            </ul>
        </div>
    )
}
