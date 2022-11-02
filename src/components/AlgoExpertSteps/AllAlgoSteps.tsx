import { Box, Typography } from '@mui/material'
import React from 'react'
import WatchVideo from './WatchVideo'

const AllAlgoSteps = () => {
  return (
    <Box sx={{
        p:"100px 20px 0 20px"
    }}>
        <Typography variant='h2' sx={{textAlign:"center",mb:"20px"}}>What is ALgoExpert?</Typography>
        <WatchVideo/>
    </Box>
  )
}

export default AllAlgoSteps
