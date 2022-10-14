import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav> 
      <h1>Avenger Lister</h1>
      <li>
      <Link to="/">Home</Link>
      </li>
      <br></br>
      <li>
      <Link to="/heros/new">Add New Hero</Link>
      </li>
      <br></br>
      <li>
      <Link to="/heros">Heros</Link>
      </li>
    </nav>
  )
}

export default NavBar;