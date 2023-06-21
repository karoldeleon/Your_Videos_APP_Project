import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';

const SearchBar = () => {
  return (
    <Paper 
    component={"form"}
    onSubmit={() => {}}
    sx={{
        borderRadius : 20,
        border : '1px solid #e3e3e3',
        pl: 2,
        boxShadow : 'none',
        mr : {sm : 3} 
    }}
    >
       <input
       className='search-bar'
       placeholder='Search...'
       value=""
       onChange={() => {}}
       >
       </input>
        <IconButton type="submit"
        sx={{
            p : '7px',
            color : '#512DA8',
        }}
        >
            <SearchIcon/>
        </IconButton> 
    </Paper>
  )
}

export default SearchBar