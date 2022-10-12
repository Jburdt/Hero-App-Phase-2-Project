import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav> 
      <h1>Avenger Lister</h1>
      <li>
      <Link to="/">Home</Link>
      </li>
      <br></br>
      <li>
      <Link to="/search">Search</Link>
      </li>
      <br></br>
      <li>
      <Link to="/heros-container">Heros</Link>
      </li>
    </nav>
  )
}

export default NavBar;