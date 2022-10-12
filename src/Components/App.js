import React, { useState, useEffect } from 'react';
import HerosContainer from './HerosContainer.js';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import NewForm from './NewForm'

const App = () => {
  
  const [heros, setHeros] = useState([]);
 
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
     <Route path='/new-form'element={<NewForm />}/> 
    </Routes>
    </Router>
  );
}

export default App;
