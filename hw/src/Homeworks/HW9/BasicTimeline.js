// https://ant.design/components/timeline

// Basic timeline

export default function BasicTimeline({ items }) {
    return (
        <section className="timeline-container">
            <ol className="timeline">
                {items.map((item, index) => (
                    <li key={index} className={`timeline-item`}>
                        {index !== items.length - 1 && (
                            <div className="item-tail"></div>
                        )}
                        <div className="item-head"></div>
                        <div className="item-content">{item.children}</div>
                    </li>
                ))}
            </ol>
        </section>
    )
}
