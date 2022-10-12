import React, { useState, useEffect } from 'react';
import HerosContainer from './HerosContainer.js';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import Search from './Search'

const App = () => {
  
  const [heros, setHeros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearch = () => {
    return heros.filter((herosObj) => (herosObj.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ""))
  }

  useEffect(() => {
      fetch("http://localhost:3001/herosData")
      .then(r => r.json())
      .then(data => setHeros(data))
      .catch(error => console.log(error))
  }, []);

  if(!heros) {
    return(
      <h2> Loading...</h2>
    )
  };
  
  return (
    <Router>
     <NavBar />
    <Routes> 
     <Route path='/' element={<HerosContainer heros={heros}/>}/>
     <Route path='/search'element={<Search handleSearch={handleSearch}/>}/> 
    </Routes>
    </Router>
  );
}

export default App;
