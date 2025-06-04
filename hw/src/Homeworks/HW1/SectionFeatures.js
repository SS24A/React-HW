import slika1 from './svg/slika1.svg'
import slika2 from './svg/slika2.svg'
import slika3 from './svg/slika3.svg'
import slika4 from './svg/slika4.svg'
import slika5 from './svg/slika5.svg'
import slika6 from './svg/slika6.svg'

import SectionFeaturesItem from './SectionFeaturesItem'

export default function SectionFeatures() {
    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        <SectionFeaturesItem itemNum={1} slika={slika1} />
                        <SectionFeaturesItem itemNum={2} slika={slika2} />
                        <SectionFeaturesItem itemNum={3} slika={slika3} />
                        <SectionFeaturesItem itemNum={4} slika={slika4} />
                        <SectionFeaturesItem itemNum={5} slika={slika5} />
                        <SectionFeaturesItem itemNum={6} slika={slika6} />
                    </div>
                </div>
            </div>
        </section>
    )
}
