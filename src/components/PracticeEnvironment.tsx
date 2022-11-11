import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DividerDark from './DividerDark';

const PracticeEnvironment = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "20px",
        transition: "transform .2s ease-in-out", color:"#626ee3"
    }
    const imageBoxStyle = {
        borderRadius:"4px",
        boxShadow:"27.1px 62.5px 125px -25px rgb(50 50 93 / 60%), 16.2px 37.5px 75px -37.5px rgb(0 0 0 / 70%)",
        transform:"rotate3d(.5,-.866,0,15deg) rotate(1deg)",
        width:"610px",
        overflow:"hidden",
        background:"linear-gradient(165deg,#fcfcfc 14%,#3e3e68)"
    }
    const imageStyle ={
        verticalAlign: "middle",
        width:"100%"
    }
    const flexSecondBox = {
        width:"50%",display:"flex",flex:"50%",minHeight:"500px",perspective: "1500px",ml:"60px",flexDirection:"column", justifyContent: "center",alignItems:"center"
    }
  return (
    <>
        <Box sx={{p:"100px 20px",position:"relative"}}>
            <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
                transform: "scale(1.2)"
            }}}/>
            <Box sx={{maxWidth:"1200px",m:"0 auto",display:"flex"}}>
                <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
                    <Typography sx={{fontSize:"35px",mb:"20px",fontWeight:"400",color:"#02203c"}}>
                    The Perfect Practice Environment.</Typography>
                    <Typography variant="body2" sx={{color:"#445d6e",fontSize:"18px",mb:"25px",pr:"2rem"}}>
                    In an ideal world, you'd prepare for coding interviews by writing out solutions to problems in your language of choice, getting some hints if necessary, running your code against test cases, and looking at solutions when done.                    <br />
                    <br />
                    We've turned that ideal world into the real world. Pick a language. Read the prompt. Write your solution. Run your code. Get some hints. Run your code again. Check the output. Pass the tests. View our solution. Watch our video. All within the same workspace.                    </Typography>
                    <Button variant="contained" sx={{
                                "&.MuiButton-contained":{
                                    backgroundColor:"#626ee3",fontSize:"16px",
                                    padding:"13px 35px",mt:"10px",textTransform:"capitalize",
                                    width:"39%"
                                },
                                "&.MuiButton-contained:hover":{
                                    backgroundColor:"#4c5adf"
                                },
                            }}>
                    Try Our Workspace
                    </Button>
                </Box>
                <Box sx={{...flexSecondBox}}>
                    <Box sx={{...imageBoxStyle}}>
                        <img src="https://assets.algoexpert.io/spas/main/prod/g9dc7535e22-prod/dist/images/417d6256d903069d4b6b.webp" alt="Memory" style={imageStyle}/>
                    </Box>
                </Box>
            </Box>
        </Box>
        <DividerDark/>
    </>
  )
}

export default PracticeEnvironment
