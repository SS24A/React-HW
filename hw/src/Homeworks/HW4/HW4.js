import Counter from './Counter'
import Counter2 from './Counter2'
import Counter3 from './Counter3'
import LuckyCounter from './LuckyCounter'
import RevealText from './RevealText'
import TV from './TV'

const tvChannels = [
    'ABC',
    'CBS',
    'NBC',
    'FOX',
    'CNN',
    'Fox News',
    'MSNBC',
    'ESPN',
    'BBC',
    'HBO',
    'Discovery Channel',
    'National Geographic Channel',
    'Netflix',
    'Hulu',
]

export default function HW4() {
    return (
        <div>
            <Counter />
            <Counter2 amount={3} />
            <Counter3 amount={2} />
            <LuckyCounter />
            <RevealText text="Superstar" />
            <TV channels={tvChannels} />
        </div>
    )
}
