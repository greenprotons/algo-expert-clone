import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {Box} from '@mui/material'
const CloseSign = () => {
  return (
    <Box sx={{
        backgroundColor: "rgba(255,0,0,.1)",
        justifyContent: "center",
        display: "flex"
    }}>
        <CloseIcon sx={{color:"red",fontSize:"30px"}}/>
    </Box>
  )
}

export default CloseSign
