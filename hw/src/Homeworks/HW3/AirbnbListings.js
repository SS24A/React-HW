import Property2 from './Property2'

export default function AirbnbListings({ listings }) {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 20,
                maxWidth: 1000,
                margin: '30px auto',
            }}
        >
            {listings.map((i, index) => (
                <div
                    key={index}
                    style={{
                        border: `1px solid ${i.price > 100 ? 'red' : 'black'}`,
                        borderRadius: 10,
                    }}
                >
                    <Property2 {...i} />
                </div>
            ))}
        </div>
    )
}
