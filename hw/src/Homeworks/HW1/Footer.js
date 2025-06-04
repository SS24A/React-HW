function Logo({ srcLogo }) {
  return <div className="brand footer-brand">
    <a href="#">
      <img className="header-logo-image" src={srcLogo} alt="Logo" />
    </a>
  </div>
}

function SocialLinks({ srcFacebook, srcTwitter, srcGoogle }) {
  return <ul className="footer-social-links list-reset">
    <li>
      <a href="#">
        <span className="screen-reader-text">Facebook</span>
        <img src={srcFacebook} alt="facebook" />
      </a>
    </li>
    <li>
      <a href="#">
        <span className="screen-reader-text">Twitter</span>
        <img src={srcTwitter} alt="twitter" />
      </a>
    </li>
    <li>
      <a href="#">
        <span className="screen-reader-text">Google</span>
        <img src={srcGoogle} alt="google" />
      </a>
    </li>
  </ul>
}

function Nav() {
  return <ul className="footer-links list-reset">
    <li>
      <a href="#">Contact</a>
    </li>
    <li>
      <a href="#">About us</a>
    </li>
    <li>
      <a href="#">FAQ's</a>
    </li>
    <li>
      <a href="#">Support</a>
    </li>
  </ul>
}

export default function Footer({ srcLogo, srcFacebook, srcTwitter, srcGoogle }) {
  return <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner">
        <Logo srcLogo={srcLogo} />
        <Nav />
        <SocialLinks srcFacebook={srcFacebook} srcTwitter={srcTwitter} srcGoogle={srcGoogle} />
        <div className="footer-copyright">&copy; 2019 Solid, all rights reserved</div>
      </div>
    </div>
  </footer>
}