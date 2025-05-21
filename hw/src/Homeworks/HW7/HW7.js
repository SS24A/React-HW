import { FakeSignUp1, FakeSignUp2 } from './FakeSignUp'

export default function HW7() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 50,
                justifyContent: 'space-between',
                width: 1000,
                margin: '50px auto',
            }}
        >
            <FakeSignUp1 />
            <FakeSignUp2 />
        </div>
    )
}
