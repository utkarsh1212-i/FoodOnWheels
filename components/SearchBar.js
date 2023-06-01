import { IconButton, InputBase, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import React from 'react'

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
         <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Discover Delicacies..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>

    </Paper>
  )
}

export default SearchBar