import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Searchbar() {

  return (
    <div>
        <form style={{display: 'flex', alignItems: 'center'}}>
            <TextField style={{width: '40vw'}} label="Enter a City" variant="outlined" name='search-input'/>
            <Button type='submit' sx={{ my: 2, color: 'white', display: 'flex', background: '#757ce8', height: '4em' }}>Search</Button>
        </form>
    </div>
  )
}

export default Searchbar