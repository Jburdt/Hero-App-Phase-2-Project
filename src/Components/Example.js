import React, { useState } from 'react';

const Example = () => {

    const [ team, setTeam ] = useState('');
    const [ player, setPlayer ] = useState('');
    const [ position, setPosition ] = useState('');

    const handleTeamChange = (e) => {
        setTeam(e.target.value)
    };
    
    const handlePlayerChange = (e) => {
        setPlayer(e.target.value)
    };
    
    const handlePositionChange = (e) => {
        setPosition (e.target.value)
    };


  return (
    <form>
        <input type="text" value={team} onChange={handleTeamChange} />
        <input type="text" value={player} onChange={handlePlayerChange} />
        <input type="text" value={position} onChange={handlePositionChange} />
    </form>
  )
}

export default Example;