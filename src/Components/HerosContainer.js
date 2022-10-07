import React, { useEffect, useState } from 'react';
import HerosCard from './HerosCard';
import HerosForm from './HerosForm';
import Search from './Search';

const HerosContainer = () => {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/herosData")
        .then(r => r.json())
        .then(data => setHeros(data))
    }, []);



    return (
    <div>
        <ul>
        <HerosCard heros={ heros } />
        </ul>
        HerosContainer
        <HerosForm />
        <Search />
    </div>
  )
}

export default HerosContainer;