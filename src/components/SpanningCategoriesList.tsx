import React from 'react'
import {Box, Typography,Button} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
 
const SpanningCategoriesList = () => {
    const arrowSign = {
        cursor: "pointer",
        fontSize: "40px",
        left: "91%",
        position: "absolute",
        top: "1.5vh",
        transition: "transform .2s ease-in-out",
        color:"#fff"
    }
  return (
    <Box sx={{p:"100px 20px",position:"relative",bgcolor:"#02203c",textAlign:"center"}}>
      <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
         transform: "scale(1.2)"
      }}}/>
      <Typography sx={{color:"#fff",fontSize:"35px",mb:"20px",fontWeight:"400",textAlign: "center"}}>160 Questions Spanning 15 Categories.</Typography>
      <Typography variant="body2" sx={{maxWidth:"800px",m:"0 auto 20px",color:"#fff",fontSize:"16px",textAlign:"center"}}>If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 160 questions spanning 15 categories and 4 difficulty levels, we've got you covered.</Typography>
      <Button variant="contained" sx={{
                        "&.MuiButton-contained":{
                            backgroundColor:"#626ee3",fontSize:"16px",
                            padding:"13px 35px",mt:"10px",textTransform:"capitalize"
                        },
                        "&.MuiButton-contained:hover":{
                            backgroundColor:"#4c5adf"
                        },
                    }}>
            Explore Questions
        </Button>
        <Box sx={{}}>

        </Box>
    </Box>
  )
}

export default SpanningCategoriesList
