import React, { useState } from 'react';
import HerosCard from './HerosCard';

const HerosList = ({ heros }) => {

  const [ search, setSearch ] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value)
  };

  return (
  <> 
    <input onChange={handleInput} value={search} className='search' type='text' placeholder='Search hero...' ></input>
    <button type='submit' className='submit'>Search</button>
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