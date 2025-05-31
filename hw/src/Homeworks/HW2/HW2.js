import Person from './Person'
import Button from './Button'

export default function HW2() {
    return (
        <div style={{ margin: 20 }}>
            <div>
                <Person gender="female" name="Stefani" age="15" />
                <Person gender="male" name="Simeon" age="25" />
                <Person gender="female" name="Sara" age="28" />
            </div>
            <div>
                <Button>Standard Btn</Button>
                <Button variant="primary" size="sm">
                    Sized Btn
                </Button>
                <Button variant="secondary">Variant Btn</Button>
                <Button variant="danger" size="xl">
                    Sized and Variant Btn
                </Button>
                <Button variant="primary" size="ss">
                    Wrong size Btn
                </Button>
            </div>
        </div>
    )
}
