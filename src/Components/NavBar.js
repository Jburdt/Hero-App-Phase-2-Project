import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar"> 
      <h2>Avenger Lister</h2>
      <li>
      <Link className="link" to="/">Home</Link>
      </li>
      <br></br>
      <li>
      <Link className="link" to="/heros/new">Add New Hero</Link>
      </li>
      <br></br>
      <li>
      <Link className="link" to="/heros">Heros</Link>
      </li>
    </nav>
  )
}

export default NavBar;