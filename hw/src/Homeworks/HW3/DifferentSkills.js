export default function DifferentSkills({ skills }) {
    return (
        <div>
            {Object.keys(skills).map((category) => {
                return (
                    <div key={category}>
                        <h1>
                            {category[0]
                                .toUpperCase()
                                .concat(category.slice(1))}{' '}
                            {'Skills'}
                        </h1>
                        <ul>
                            {skills[category].map((skill) => {
                                return (
                                    <li
                                        key={skill}
                                        style={{
                                            color:
                                                category === 'hard'
                                                    ? 'red'
                                                    : category === 'soft'
                                                    ? 'blue'
                                                    : 'black',
                                        }}
                                    >
                                        {skill}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
