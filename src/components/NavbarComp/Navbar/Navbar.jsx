import { useState } from "react";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import "./Navbar.scss";

function Navbar() {
  const [query, setQuery] = useState(" ");
  function handleSearch() {
    console.log("Search : ", query);
    setQuery(" ");
  }
  return (
    <nav className="nav">
      <div className="inputBox">
        <img src="/IsearchIcon.svg" alt="icon" onClick={handleSearch} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>

      <NavbarLinks />
    </nav>
  );
}

export default Navbar;
