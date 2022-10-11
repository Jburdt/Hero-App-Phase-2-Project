import React, { useState } from 'react'


const Search = ({ handleSearch }) => {
  const [heroSearch, setHeroSearch] = useState("")

  const handleChange = (e) => {
    setHeroSearch(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(heroSearch)
  }


  return (
    <div className='search'>Search
      <form onSubmit={handleSubmit}>
        <input type="text" value={heroSearch} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Search