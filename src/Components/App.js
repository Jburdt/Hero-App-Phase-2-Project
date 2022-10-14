import React, { useState, useEffect } from 'react';
import Home from './Home';
import HerosList from './HerosList';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import NewForm from './NewForm';

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

  const addHero = (hero) => {
    setHeros([...heros, hero])
  };
  
  return (
    <Router>
     <NavBar />
    <Routes> 
      <Route exact path='/' element={<Home />}/>
      <Route path='/heros' element={<HerosList heros={heros}/>}/>
      <Route path='/heros/new'element={<NewForm addHero={addHero} />}/> 
    </Routes>
    </Router>
  );
}

export default App;
