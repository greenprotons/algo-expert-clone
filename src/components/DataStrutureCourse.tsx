import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DividerDark from './DividerDark';

const DataStrutureCourse = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "1.5vh",
        transition: "transform .2s ease-in-out", color:"#626ee3"
    }
    const imageBoxStyle = {
        borderRadius:"8px",
        boxShadow:"27.1px 62.5px 125px -25px rgb(50 50 93 / 60%), 16.2px 37.5px 75px -37.5px rgb(0 0 0 / 70%)",
        transform:"rotate3d(.5,.866,0,15deg) rotate(-1deg)",
        right:"30px",
        width:"600px",
        overflow:"hidden"
    }
    const imageStyle ={
        verticalAlign: "middle"
    }
    const flexFirstBox = {
        width:"50%",display:"flex",flex:"50%",minHeight:"550px",perspective: "1500px",mr:"60px",flexDirection:"column", justifyContent: "center"
    }
  return (
    <>
    <Box sx={{p:"100px 20px"}}>
      <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
         transform: "scale(1.2)"
      }}}/>
      <Box sx={{maxWidth:"1300px",m:"0 auto",display:"flex"}}>
        <Box sx={{...flexFirstBox}}>
            <Box sx={{...imageBoxStyle}}>
                <img src="https://assets.algoexpert.io/spas/main/prod/g32892a7ef9-prod/dist/images/570289ba1a8f570f5942.webp" alt="Memory" style={imageStyle}/>
            </Box>
        </Box>
        <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
            <Typography sx={{fontSize:"35px",mb:"20px",fontWeight:"400",color:"#02203c"}}>
            Data Structures Crash Course.</Typography>
            <Typography variant="body2" sx={{color:"#445d6e",fontSize:"18px",mb:"25px",pr:"2rem"}}>
            Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.
            <br />
            <br />
            Our video series on data structures is the ultimate crash course on this important topic. We cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation, and then break down popular data structures to give you a detailed look at how these concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear in your heart again.
            </Typography>
            <Button variant="contained" sx={{
                        "&.MuiButton-contained":{
                            backgroundColor:"#626ee3",fontSize:"16px",
                            padding:"13px 35px",mt:"10px",textTransform:"capitalize",
                            width:"34%"
                        },
                        "&.MuiButton-contained:hover":{
                            backgroundColor:"#4c5adf"
                        },
                    }}>
            Start the Course
        </Button>
        </Box>
      </Box>
    </Box>
    <DividerDark/>
    </>
  )
}

export default DataStrutureCourse
