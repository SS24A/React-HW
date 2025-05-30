import DemoUseEventListener from './components/DemoUseEventListener'
import DemoUseIsFirstRender from './components/DemoUseIsFirstRender'

import { DemoUseMouse1, DemoUseMouse2 } from './components/DemoUseMouse'
import DemoUseRenderCount from './components/DemoUseRenderCount'

import DemoUseTimer from './components/DemoUseTimer'
import DemoUseWindowScroll from './components/DemoUseWindowScroll'

import './style.css'

export default function HW10() {
    return (
        <div>
            {/* <DemoUseWindowScroll /> */}

            {/* <DemoUseMouse1 /> */}
            {/* <DemoUseMouse2 /> */}

            <DemoUseEventListener />
            {/* <DemoUseTimer /> */}

            {/* <DemoUseRenderCount isStrictModeOn={true} /> */}
            {/* <DemoUseRenderCount /> */}

            {/* <DemoUseIsFirstRender /> */}
        </div>
    )
}
