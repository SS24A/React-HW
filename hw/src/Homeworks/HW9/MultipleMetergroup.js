export default function MultipleMetergroup({ values }) {
    return (
        <div className="meter-group-container">
            <div className="meter-group">
                <div className="meter-group-meters">
                    {values.map((i) => (
                        <span
                            key={i.label}
                            style={{
                                backgroundColor: i.color,
                                width: `${i.value}%`,
                                height: 'auto',
                            }}
                        ></span>
                    ))}
                </div>
                <ol>
                    {values.map((i) => (
                        <li key={i.label}>
                            {i.icon ? (
                                <i
                                    className={i.icon}
                                    style={{
                                        color: i.color,
                                        marginRight: '0.5rem',
                                    }}
                                ></i>
                            ) : (
                                <span
                                    style={{ backgroundColor: `${i.color}` }}
                                    className="meter-group-marker"
                                ></span>
                            )}
                            <span style={{ marginRight: '1rem' }}>
                                {`${i.label} (${i.value}%)`}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
