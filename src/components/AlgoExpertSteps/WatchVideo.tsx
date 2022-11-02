import { Box, Button, Typography } from '@mui/material'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import React from 'react'

const WatchVideo = () => {
  return (
    <Box sx={{mb:"50px",display:"flex",textAlign:"center",justifyContent:"center"}}>
        <Button sx={{
            "&.MuiButton-root":{
            textTransform:"capitalize",
            color:"#000",
            border: "2px solid #000",
            background: "transparent",
            p: "6px 18px",
            },
            "&.MuiButton-root:hover":{
                color:"white",
                bgcolor:"#02203c",
                transition:"width .4s cubic-bezier(.34,.63,.29,.96)"
            }
        }} variant="outlined">
            <PlayCircleFilledWhiteIcon sx={{mr:"10px",fontSize:"35px"}}/>
            <Typography>Watch the Video</Typography>
        </Button>
    </Box>
  )
}

export default WatchVideo
