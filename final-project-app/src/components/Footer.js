export default function Footer(props) {
  return (
    <footer>
      <div className="section-center-c">
        <div className="footer-upper-section">
          <div>
            <img src={props.footerimg} className="footer-logo"></img>
          </div>
          <div className="footer-links-flex">
            <div className="footer-links-section">
              <p className="footer-links-title">Navigation</p>
              <ul className="footer-ul">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
              </ul>
            </div>
            <div className="footer-links-section">
              <p className="footer-links-title">Contact</p>
              <ul className="footer-ul">
                <li><a>43 Hazel st. Chicago IL US</a></li>
                <li><a>(+213) 789-792-2679</a></li>
                <li><a>contact@little.lemon.com</a></li>
              </ul>
            </div>
            <div className="footer-links-section">
              <p className="footer-links-title">Social Media Links</p>
              <ul className="footer-ul">
                <li><a>Follow on Instagram</a></li>
                <li><a>Follow on Facebook</a></li>
                <li><a>Follow on Twitter</a></li>
                <li><a>Subscribe on Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rights-reserved-container">
          <p className="rights-reserved">© 2023 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}