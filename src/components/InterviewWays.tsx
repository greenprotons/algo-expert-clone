import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DividerDark from './DividerDark';
const InterviewWays = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "1.5vh",
        transition: "transform .2s ease-in-out", color:"#fff"
    }
    function createData(
        waysItem:string
    ){
        return{waysItem}
    }
    const waysList = [
        createData("Earn the AlgoExpert Certificate. Get referred to tech companies."),
        createData("No more InMail messages that get ignored."),
        createData("No more cold emails that go nowhere."),
        createData("No more job applications that get no attention."),
        createData("No more referral programs that don't work."),
        createData("No more recruiting agencies that cost a fortune."),
        createData("With AlgoExpert, preparing for interviews helps you land interviews."),
    ]
    const deleteIconStyle = {
        backgroundColor: "#626ee3",   borderRadius: "8px", height: "90px",  left: "-45px",
        placeItems: "center",  position: "absolute",   top: "calc(50% - 45px)", width: "90px",
        zIndex: 2, color: "#fff"
    }
    const boxItems = [
        {text:"InMail Message"},
        {text:"Cold Email",ml:"18rem"},
        {text:"InMail Message",ml:"44rem",mt:"2rem"},
        {text:"Job Application",ml:"11rem",mt:"4rem"},
        {text:"Recruiting Agency",ml:"30rem",mt:"4rem"},
        {text:"InMail Message",ml:"5rem",mt:"10rem"},
        {text:"Referral Program",ml:"35rem",mt:"10rem"},
        {text:"Job Application",ml:"20rem",mt:"15rem"},
        {text:"InMail Message",ml:"45rem",mt:"15rem"},
        {text:"Job Application",ml:"1rem",mt:"18rem"},
        {text:"Recruiting Agency",ml:"30rem",mt:"18rem"},
        {text:"Cold Email",ml:"10rem",mt:"20rem"},
        {text:"Cold Email",ml:"40rem",mt:"20rem"},
    ]
    const boxItemsStyle = {
        bgcolor:"#626ee3",  color:"#fff", borderRadius:"20px", p:"10px",position:"absolute", zIndex:0,
    }
  return (
    <>
        <Box sx={{p:"100px 20px",position:"relative",bgcolor:"#02203c"}}>
            <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
                transform: "scale(1.2)"
            }}}/>
            <Box sx={{maxWidth:"1200px",m:"0 auto",display:"flex"}}>
                <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
                    <Typography sx={{color:"#fff",fontSize:"35px",mb:"20px",fontWeight:"400",}}>A Better Way To Land Interviews.</Typography>
                    <Box sx={{mb:"25px"}}>
                        {waysList.map((item,index)=>{
                            return(
                                <Typography key={index} sx={{mb:"15px",fontSixe:"17px",color:"#fff"}}>{item.waysItem}</Typography>
                            )
                        })}
                    </Box>
                    <Button variant="contained" sx={{
                                    "&.MuiButton-contained":{
                                        backgroundColor:"#626ee3",fontSize:"16px",
                                        padding:"13px 35px",mt:"10px",textTransform:"capitalize",
                                        width:"30%"
                                    },
                                    "&.MuiButton-contained:hover":{
                                        backgroundColor:"#4c5adf"
                                    },
                                }}>
                        Learn More
                    </Button>
                </Box>
                <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%",ml:"60px"}}>
                    <Box sx={{position:"relative"}}>
                        <Box sx={{position:"absolute"}}>
                            <Box sx={{height:"400px",width:"1500px",position:"relative"}}>
                                    <DeleteOutlineIcon sx={{...deleteIconStyle}}/>
                                <Box sx={{borderRadius:"200px 0 0 200px",
                                            height:"100%",
                                            overflow:"hidden",}}>
                                    <Box sx={{borderRadius:"200px 0 0 200px", height:"100%",  overflow:"hidden",
                                            position:"relative",background:"linear-gradient(90deg,rgba(0,21,40,.8),transparent 20%  )"}}>
                                            {boxItems?.map((item,index)=>{
                                                return(
                                                    <Box key={index} sx={{...boxItemsStyle,mt:item.mt, ml:item.ml}}>
                                                        {item.text}
                                                    </Box>
                                                )
                                            })}
                                                    
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default InterviewWays
