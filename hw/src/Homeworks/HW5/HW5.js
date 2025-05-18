import Lightbulb from './components/Lightbulb'
import Lightbulb2 from './components/Lightbulb2'
import Password from './components/Password'
import TodoItem from './components/TodoItem'
import BigSmallBox from './components/BigSmallBox'
import Box from './components/Box'
import Keyboard from './components/Keyboard'

const todo = {
    text: 'Do Homework',
    completed: 'false',
}

const chars = ['a', 'b', 'c', 'd']

export default function HW5() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
            <Lightbulb />
            <Lightbulb2 />
            <Password />
            <TodoItem todo={todo} />
            <BigSmallBox />
            <Box />
            <Keyboard chars={chars} />
        </div>
    )
}
