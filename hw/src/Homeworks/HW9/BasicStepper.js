import { useState } from 'react'

const items = [
    { title: 'Header 1', content: 'Content 1' },
    { title: 'Header 2', content: 'Content 2' },
    { title: 'Header 3', content: 'Content 3' },
]

export default function StepperDemo() {
    return (
        <div style={{ width: 700, margin: 'auto' }}>
            <Stepper items={items} />
        </div>
    )
}

function Stepper({ items }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    function btnOnclick(indexChange) {
        setSelectedIndex(selectedIndex + indexChange)
    }

    return (
        <div>
            <ul className="header-ul">
                {items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                index === items.length - 1 ? 'li-last' : 'li'
                            }
                            onClick={() => setSelectedIndex(index)}
                        >
                            <button className="num-btn">
                                <span
                                    style={{
                                        backgroundColor:
                                            selectedIndex === index
                                                ? '#06b6d4'
                                                : '#ffffff',
                                        color:
                                            selectedIndex === index
                                                ? '#ffffff'
                                                : '#4b5563',
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <span
                                    style={{
                                        color:
                                            selectedIndex === index
                                                ? '#4b5563'
                                                : '#6b7280',
                                    }}
                                >
                                    {item.title}
                                </span>
                            </button>
                            {index !== items.length - 1 && (
                                <span
                                    className="tape"
                                    style={{
                                        backgroundColor:
                                            selectedIndex > index
                                                ? '#06b6d4'
                                                : '#e5e7eb',
                                    }}
                                ></span>
                            )}
                        </li>
                    )
                })}
            </ul>

            <div className="panel-wrap">
                <div>
                    <StepperPanel
                        onClick={btnOnclick}
                        content={items[selectedIndex].content}
                        order={
                            selectedIndex === 0
                                ? 'end'
                                : selectedIndex === items.length - 1
                                ? 'start'
                                : 'between'
                        }
                    />
                </div>
            </div>
        </div>
    )
}

function StepperPanel({ content, order, onClick }) {
    const buttonBack = (
        <Button
            label="Back"
            icon="fa fa-arrow-left"
            onClick={() => onClick(-1)}
        />
    )
    const buttonNext = (
        <Button
            label="Next"
            icon="fa fa-arrow-right"
            iconPos="right"
            onClick={() => onClick(1)}
        />
    )

    return (
        <span className="span-stepper">
            <div className="middle-div">
                <div>{content}</div>
            </div>
            <div className={`${order} end-div`}>
                {order === 'start' ? (
                    buttonBack
                ) : order === 'between' ? (
                    <>
                        {buttonBack}
                        {buttonNext}
                    </>
                ) : (
                    buttonNext
                )}
            </div>
        </span>
    )
}

function Button({ label, icon, iconPos, onClick }) {
    return (
        <button
            onClick={onClick}
            className={iconPos === 'right' ? 'next-btn' : 'back-btn'}
        >
            <i
                className={icon}
                style={{
                    order: iconPos === 'right' ? '1' : '0',
                    marginRight: iconPos !== 'right' ? '10px' : '0',
                    marginLeft: iconPos === 'right' ? '10px' : '0',
                }}
            ></i>
            <span>{label}</span>
        </button>
    )
}
