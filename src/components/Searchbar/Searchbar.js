import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Searchbar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form style={{display: 'flex', alignItems: 'center'}} onSubmit={handleSubmit}>
            <TextField style={{width: '30vw'}} label="Enter a City" variant="outlined" name='search'/>
            <FormControl>
              <InputLabel>Type</InputLabel>
              <Select label='Type' name='type' sx={{ width: '10vw'}}>
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </Select>
            </FormControl>
            <Button type='submit' sx={{ my: 2, color: 'white', display: 'flex', background: '#757ce8', height: '4em' }}>Search</Button>
        </form>
    </div>
  )
}

export default Searchbar