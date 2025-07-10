import headerLogo from './svg/header-logo.svg'
import desktop from './svg/desktop.svg'
import mobile from './svg/mobile.svg'
import close from './svg/close.svg'

import logo from './svg/logo.svg'
import facebook from './svg/facebook.svg'
import twitter from './svg/twitter.svg'
import google from './svg/google.svg'

import Header from './Header'
import Footer from './Footer'
import SectionHero from './SectionHero'
import SectionFeatures from './SectionFeatures'
import SectionCTA from './SectionCTA'
import SectionPricing from './SectionPricing'
// import './h1styles.css'

export default function Cruip() {
    return (
        <div>
            <Header
                srcHeaderLogo={headerLogo}
                srcDesktop={desktop}
                srcMobile={mobile}
                srcClose={close}
            />
            <main>
                <SectionHero />
                <SectionFeatures />
                <SectionPricing />
                <SectionCTA />
            </main>
            <Footer
                srcLogo={logo}
                srcFacebook={facebook}
                srcTwitter={twitter}
                srcGoogle={google}
            />
        </div>
    )
}
