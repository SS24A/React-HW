import DifferentSkills from './DifferentSkills'
import HardSkills from './HardSkills'
import ManySkills from './ManySkills'
import MySkills from './MySkills'
import Property from './Property'
import RandomButton from './RandomButton'
import SoftSkills from './SoftSkills'
import Task6 from './Task6'
import TodoList from './TodoList'
import TwoButton from './TwoButton'
import Property2 from './Property2.js'
import AirbnbListings from './AirbnbListings.js'

import {
    softSkills,
    hardSkills,
    bio,
    skills,
    skillsData,
    skillsTask6,
    styleButton31,
    styleButton1,
    todos,
    airbnbListings,
} from './data.js'

export default function HW3() {
    return (
        <div style={{ margin: 10 }}>
            <SoftSkills skills={softSkills} />
            <HardSkills skills={hardSkills} />
            <MySkills
                softSkills={softSkills}
                hardSkills={hardSkills}
                bio={bio}
            />
            <ManySkills skills={skills} />
            <DifferentSkills skills={skillsData} />
            <Task6 skills={skillsTask6} />

            <Property />
            <Property2
                imgSrc={
                    'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM1NzQzMzI%3D/original/231bdce1-e536-4eac-9bf4-afe4ae6f91d9.jpeg?im_w=720'
                }
                location={'Bled, Slovenia'}
                closestTo={'743 kilometers away'}
                suggestedDate={'Aug 26 – 31'}
                rating={'4.99'}
                price={'1,136'}
                currency={'$'}
                isGuestFavorite={true}
            />

            <TwoButton
                leftButtonStyle={styleButton31}
                rightButtonStyle={styleButton1}
            />
            <RandomButton />
            <TodoList todos={todos} />

            <AirbnbListings listings={airbnbListings} />
        </div>
    )
}
