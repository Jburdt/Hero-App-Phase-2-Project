import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const NewForm = ({ addHero }) => {

  const [heroData, setHeroData] =useState({
    id: 0,
    name: "",
    img_url: "",
    abilities: ""
  })

  function handleChange(event) {
    setHeroData({
      ...heroData,
      [event.target.id]: event.target.value,
    });
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/herosData", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(heroData)
    })
    .then(r => r.json())
    .then(addHero)
  }
  
  return (
    <div>
  <form onSubmit={handleSubmit} className="new-hero" noValidate autoComplete="off">
    <label htmlFor='name'/>
    <Input id='name' onChange={handleChange} type='text' value={heroData.name} placeholder="Hero Name..."  />
    <Input id='img_url' onChange={handleChange} type='text' value={heroData.img_url} placeholder="Hero Image Link..."  />
    <Input id='abilities' onChange={handleChange} type='text' value={heroData.abilities} placeholder="Hero Abilities..."  />
    <Button
        type="submit"
        variant="contained"
        color="default"
        className="upload"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
  </form>
  </div>
  )
}

export default NewForm;