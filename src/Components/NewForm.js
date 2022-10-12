import React from 'react';

import Input from '@material-ui/core/Input';

const NewForm = () => {
  return (
  <form className="new-hero" noValidate autoComplete="off">
    <Input defaultValue={null} placeholder="Hero Name..." inputProps={{ 'aria-label': 'description' }} />
    <Input placeholder="Hero Link..." inputProps={{ 'aria-label': 'description' }} />
    <Input placeholder="Hero Abilities..." inputProps={{ 'aria-label': 'description' }} />
  </form>
  )
}

export default NewForm;