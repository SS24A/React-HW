export default function List({ items, field, type = 'ul' }) {
    const arrayMap = items.map((item, index) => {
        return (
            <li key={!field ? index : item.id ? item.id : index}>
                {field ? item[field] : item}
            </li>
        )
    })
    return type === 'ul' ? <ul>{arrayMap}</ul> : <ol>{arrayMap}</ol>
}
