import React from 'react'
import HerosCard from './HerosCard'

const HerosContainer = ({ heros }) => {
  return (
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
  )
}

export default HerosContainer