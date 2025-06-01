import HardSkills from './HardSkills'
import SoftSkills from './SoftSkills'

export default function MySkills({ softSkills, hardSkills, bio }) {
    return (
        <div style={{ marginTop: 50 }}>
            <p>{bio}</p>
            <SoftSkills skills={softSkills} />
            <HardSkills skills={hardSkills} />
        </div>
    )
}
