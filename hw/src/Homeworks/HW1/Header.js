export default function Header({
    srcHeaderLogo,
    srcDesktop,
    srcMobile,
    srcClose,
}) {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <a href="#">
                            <img
                                className="header-logo-image"
                                src={srcHeaderLogo}
                                alt="Logo"
                            />
                        </a>
                    </div>

                    <div>
                        <img src={srcDesktop} alt="desktop" />
                        <img src={srcMobile} alt="mobile" />
                    </div>

                    <div>
                        <button>
                            <a href="#" target="_blank">
                                Download
                            </a>
                        </button>
                        <img src={srcClose} alt="close" />
                    </div>
                </div>
            </div>
        </header>
    )
}
