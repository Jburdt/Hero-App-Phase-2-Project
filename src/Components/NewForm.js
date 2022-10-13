import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const NewForm = ({ addHero }) => {

  const [heroName, setHeroName] = useState('')
  const [heroImage, setHeroImage] = useState('')
  const [heroAbilities, setHeroAbilites] = useState('')

  
  
  const handleHeroName = (e) => {
    e.preventDefault()
    setHeroName(e.target.value)
  }; 
  
  const handleHeroImage = (e) => {
    e.preventDefault()
    setHeroImage(e.target.value)
  }; 
  
  const handleHeroAbilities = (e) => {
    e.preventDefault()
    setHeroAbilites(e.target.value)
  }; 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const heroData = {
      id: heroName,
      name: heroName,
      img_url: heroImage,
      abilities: heroAbilities
    }

    fetch('http://localhost:3001/herosData', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type/": "application/json"
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
    <Input onChange={handleHeroName} type='text' value={heroName} placeholder="Hero Name..."  />
    <Input onChange={handleHeroImage} type='text' value={heroImage} placeholder="Hero Link..."  />
    <Input onChange={handleHeroAbilities} type='text' value={heroAbilities} placeholder="Hero Abilities..."  />
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