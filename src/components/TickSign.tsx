import React from 'react'
import {Box} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

const TickSign = () => {
  return (
    <Box sx={{
        backgroundColor: "rgba(58,179,87,.1)",
        p: "3px",
        justifyContent: "center",
        display: "flex"
    }}>
        <DoneIcon sx={{color:"#3ab357",fontSize:"27px"}}/>
    </Box>
  )
}

export default TickSign
