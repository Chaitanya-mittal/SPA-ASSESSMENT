import { NavLink } from "react-router-dom";
import "./AppNavbar.scss";
function AppNavbar() {
  return (
    <ul className="appNavbar">
      <li className="appNavItem">
        <NavLink>Tools</NavLink>
      </li>
      <li className="appNavItem">
        <NavLink>AWS Builder</NavLink>
      </li>
      <li className="appNavItem">
        <NavLink>Start Build</NavLink>
      </li>
      <li className="appNavItem">
        <NavLink>Build Supplies</NavLink>
      </li>
      <li className="appNavItem">
        <NavLink>Tooling</NavLink>
      </li>
      <li className="appNavItem">
        <NavLink>BlueHosting</NavLink>
      </li>
    </ul>
  );
}

export default AppNavbar;
