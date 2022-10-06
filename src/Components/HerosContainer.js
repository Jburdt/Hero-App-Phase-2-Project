import React, { useState } from 'react';
import HerosCard from './HerosCard';
import HerosForm from './HerosForm';
import Search from './Search';

const HerosContainer = () => {
    // const [heros, setHeros] = useState([]);
    return (
    <div>
        <ul>
        <HerosCard />
        </ul>
        HerosContainer
        <HerosForm />
        <Search />
    </div>
  )
}

export default HerosContainer;