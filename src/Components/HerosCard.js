import React from 'react'

const HerosCard = ({ hero }) => {
  return (
   <> 
    <div className='Card'>
      <h2> Avenger: {hero.name}</h2>
      <img src={hero.img_url} alt="Avengers" />
      <button>See Abilities</button>
      <p>Abilities: {hero.abilities}</p>  
      <hr></hr>
    </div>
   </> 
  )
}

export default HerosCard;