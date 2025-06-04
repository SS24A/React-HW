import React from 'react'
import separatorSVG from './separator.svg'

export default function BreadCrumb({ model, home }) {
    return (
        <div className={'bread-crumb-container'}>
            <nav className={'bread-crumb'}>
                <ol className={'bread-crumb-list'}>
                    <li>
                        <a href={home.url}>
                            <i
                                className={home.icon}
                                style={{ color: '#6b7280' }}
                            ></i>
                        </a>
                    </li>
                    {model.map((i) => (
                        <React.Fragment key={i.label}>
                            <li
                                style={{
                                    margin: '0 0.5rem 0 0.5rem',
                                    lineHeight: '0.7',
                                }}
                            >
                                <img
                                    src={separatorSVG}
                                    alt="separator"
                                    style={{
                                        opacity: '0.7',
                                    }}
                                />
                            </li>
                            <li
                                style={{
                                    lineHeight: '0.7',
                                }}
                            >
                                <a
                                    href="#"
                                    style={{
                                        color: '#4b5563',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <span>{i.label}</span>
                                </a>
                            </li>
                        </React.Fragment>
                    ))}
                </ol>
            </nav>
        </div>
    )
}
