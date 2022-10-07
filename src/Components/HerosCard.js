import React from 'react'

const HerosCard = ({ heros }) => {
    



  return (
    <div>
        <li className='heroCard'>
            <img>{img_url}</img>
            <h4>{name}</h4>
            <p>{abilities}</p>
        </li>
    </div>
  )
}

export default HerosCard;