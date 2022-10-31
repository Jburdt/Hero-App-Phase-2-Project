import React, { useState } from 'react';
import HerosCard from './HerosCard';

const HerosList = ({ heros }) => {

  const [ search, setSearch ] = useState('');
  const [ name, setName ] = useState('');
  const [ img_url, setImg_url ] = useState('');
  const [ abilities, setAbilities ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const herosFormat = {
      name: name,
      img_url: img_url,
      abilities: abilities
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value)
  };

  return (
  <> 
    <form onSubmit={handleSubmit}> 
      <input onChange={handleInput} value={search} className='search' type='text' placeholder='Search hero...' ></input>
      <button type='submit' className='submit'>Search</button>
    </form>  
        <main>
          <ul className='cardsholder'>
              {heros.map((hero) => {
                return( 
                  <HerosCard 
                  hero={hero}
                  key={hero.id}
                  />
                )
              })}
          </ul>
        </main>
  </>
  )
}

export default HerosList;