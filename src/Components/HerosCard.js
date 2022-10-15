import React, { useState } from 'react';

const HerosCard = ({ hero }) => {

  const [toggle, setToggle]= useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return (
   <> 
  <div className='card-container'>  
   <div className='Card'>
      <h2 className='style-name'> Avenger: {hero.name}</h2>
      <img className="custom-style" src={hero.img_url} alt={"Avengers" }/>
      <br />
      <button className='btn' onClick={handleToggle}>{toggle ? "Hide Abilities" : "Show Abilities"}</button>
      { toggle ? <p>Abilities: {hero.abilities} </p> : null }  
      <hr></hr>
    </div>
    </div>
   </> 
  )
}

export default HerosCard;