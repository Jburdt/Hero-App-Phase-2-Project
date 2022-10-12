import React from "react";
import { Link } from "react-router-dom"
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu'


const NavBar = () => {
  return (
//     <AppBar position="static">
//   <Toolbar>
//     {/* <IconButton edge="start" className='kjh' color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton> */}
//     <Typography variant="h6" className="kh">
//       Avengers Heros
//     </Typography>
//     <Button color="inherit">Home</Button>
//   </Toolbar>
// </AppBar>
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