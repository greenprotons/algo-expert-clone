import React from 'react'
import {Box,Typography,Button, SvgIconProps} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LayersIcon from '@mui/icons-material/Layers';
import EastIcon from '@mui/icons-material/East';
const NotationLanguage = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "20px",
        transition: "transform .2s ease-in-out", color:"#626ee3"
    }
    function createData(
        name:string,
        desc:string,
        icon:(props: SvgIconProps) => JSX.Element,
    ){
        return{name,desc,icon,}
    }
    const allNotationData = [
        createData("Time Complexity","Why does building a heap only take O(N) time? What does O(logN) really mean? What's the time-complexity difference between appending a value to an array and adding a character to a string? We address all of these things, and more.",HourglassEmptyIcon),
        createData("Space Complexity","You know that thing you're kinda familiar with but not really? Yeah, that's space complexity. And it turns out it's pretty important. All of our video explanations dive deep into space-complexity to turn you into a well rounded Big O expert.",LayersIcon),
    ]
  return (
    <Box sx={{p:"100px 20px",position:"relative",textAlign:"center"}}>
            <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
                transform: "scale(1.2)"
            }}}/>
            <Typography sx={{fontSize:"35px",mb:"60px",fontWeight:"400",color:"#02203c"}}>
                Big O Notation Made Easy.</Typography>
            <Box sx={{maxWidth:"1200px",m:"0 auto",display:"flex"}}>
                {allNotationData.map((item,index)=>{
                    return(
                        <Box key={index} sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
                            <Typography sx={{fontSize:"25px",mb:"20px",fontWeight:"400",color:"#02203c"}}>
                                {item.name}</Typography>
                            <Typography variant="body2" sx={{color:"#445d6e",fontSize:"18px",mb:"25px",pr:"2rem"}}>{item.desc}</Typography>
                            <Box>
                                <item.icon sx={{color:"#02203c",mt:"40px",fontSize:"16rem"}}/>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{mt:"60px",}}>
                <Button variant="contained" sx={{
                                    "&.MuiButton-contained":{
                                        backgroundColor:"#626ee3",fontSize:"16px",
                                        padding:"12px 43px",textTransform:"capitalize",
                                        boxShadow:"0 2px 5px 0 rgb(0 0 0 / 50%)"
                                    },
                                    "&.MuiButton-contained:hover":{
                                        backgroundColor:"#4c5adf"
                                    },
                                }}>
                        Become an AlgoExpert <EastIcon sx={{ml:"10px"}}/>
                </Button>
            </Box>
    </Box>
  )
}

export default NotationLanguage
