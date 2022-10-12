import React, { useState } from 'react'

const HerosCard = ({ hero }) => {

  const [toggle, setToggle]= useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return (
   <> 
    <div className='Card'>
      <h2> Avenger: {hero.name}</h2>
      <img src={hero.img_url} alt="Avengers" />
      <br></br>
      <button onClick={handleToggle}>{toggle ? "Show Abilities" : "Hide Abilities"}</button>
      { toggle ? <p>Abilities: {hero.abilities}</p> : null }  
      <hr></hr>
    </div>
   </> 
  )
}

export default HerosCard;