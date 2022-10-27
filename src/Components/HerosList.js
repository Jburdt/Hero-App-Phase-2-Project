import React from 'react';
import HerosCard from './HerosCard';

const HerosList = ({ heros }) => {
  return (
  <> 
    <input className='search' type='text' placeholder='Search hero...' ></input>
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