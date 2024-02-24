import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="mainBox">
        <div className="cetegories">
          <p>CATEGORIES</p>
          <ul className="categoriesLinks">
            <li>WebBuilder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="contact">
          <p>CONTACT</p>
          <ul className="contactLinks">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="country">
          <p>
            <span>United States</span>
            <img src="/dropdown.png" alt="ddicon"></img>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
