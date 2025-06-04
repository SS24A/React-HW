import BreadCrumb from './BasicBreadcrumb'
import StepperDemo from './BasicStepper'
import List from './List'
import MultipleMetergroup from './MultipleMetergroup'
import BasicTimeline from './BasicTimeline.js'
import './style.css'

import {
    items,
    home,
    valuesForMultipleMetergroupVer1,
    valuesForMultipleMetergroupVer2,
    stringArray,
    numbers,
    cityArray,
    mountainArray,
    timelineItems,
} from './data.js'

export default function HW9() {
    return (
        <div style={{ margin: 50 }}>
            <BreadCrumb model={items} home={home} />
            <MultipleMetergroup values={valuesForMultipleMetergroupVer1} />
            <MultipleMetergroup values={valuesForMultipleMetergroupVer2} />
            <List items={stringArray} />
            <List items={stringArray} type={'ol'} />
            <List items={numbers} type={'ul'} />
            <List items={cityArray} field={'name'} type={'ol'} />
            <List items={mountainArray} field={'mountain'} />
            <StepperDemo />
            <BasicTimeline items={timelineItems} />
        </div>
    )
}
