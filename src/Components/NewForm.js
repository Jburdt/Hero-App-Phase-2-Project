import React from 'react';
import TextField from '@material-ui/core/TextField';

const NewForm = () => {
  return (
    <form className="new-hero" noValidate autoComplete="off">
      <TextField id="standard-basic" label="Hero Name" />
      <TextField id="filled-basic" label="Hero Image Link" variant="filled" />
      <TextField id="outlined-basic" label="Hero Abilities" variant="outlined" />
    </form>
  )
}

export default NewForm;