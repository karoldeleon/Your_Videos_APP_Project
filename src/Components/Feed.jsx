import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack
    sx={{
      flexDirection : {
        sx : "column", md : "row"}}}>
          
    <Box sx={{ height : { sx : 'auto', md : '92vh'},
    borderRight : '1px solid #3d3d3d', px : {sx :0, md:2 }}}> 
    <SideBar
     selectedCategory={selectedCategory} 
     setSelectedCategory={setSelectedCategory} 
    />
    <Typography className='copyright'
    variant='body2' sx={{mt: 1.5, color : '#2196F3'}}
    > © Copyright Karol De Leon 2023
    </Typography> 
    </Box> 
    
    <Box p={2} sx={{overflow : 'auto', height : '90vh', flex : 2}}
    >
      <Typography variant='h4'
      fontWeight='bold' mb={5} sx={{ color : 'white'}}
      >{selectedCategory}
        <span style={{color : '#512DA8' }}
        > Videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>     

    </Stack>
  )
}

export default Feed