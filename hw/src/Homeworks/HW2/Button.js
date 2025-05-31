import './fake-bootstrap.css'

export default function Button({ variant, size, children }) {
    if (!['primary', 'secondary', 'danger'].includes(variant)) variant = null
    if (!['sm', 'xl'].includes(size)) size = null

    let classes = 'btn'
    if (variant) classes += ` btn-${variant}`
    if (size) classes += ` btn-${size}`

    return <button className={classes}> {children}</button>
}
