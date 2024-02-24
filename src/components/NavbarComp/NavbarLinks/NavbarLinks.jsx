import { NavLink } from "react-router-dom";
import "./NavbarLinks.scss";

function NavbarLinks() {
  return (
    <ul className="navLinks">
      <li className="navItems">
        <NavLink to="/">Categories</NavLink>
      </li>
      <li className="navItems">
        <NavLink to="/">Website Builders</NavLink>
      </li>
      <li className="navItems">
        <NavLink to="/">{`Today's deals`}</NavLink>
      </li>
    </ul>
  );
}

export default NavbarLinks;
