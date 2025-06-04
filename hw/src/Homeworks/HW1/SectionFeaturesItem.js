export default function SectionFeaturesItem({ itemNum, slika }) {
    return (
        <div className="feature text-center is-revealing">
            <div className="feature-inner">
                <div className="feature-icon">
                    <img src={slika} alt={`Feature ${itemNum}`} />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                    Fermentum posuere urna nec tincidunt praesent semper feugiat
                    nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                    duis convallis. Mauris rhoncus aenean vel elit scelerisque
                    mauris.
                </p>
            </div>
        </div>
    )
}
