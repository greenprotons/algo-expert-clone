import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CodeIcon from '@mui/icons-material/Code';
import DividerDark from './DividerDark';


const VideoOverView = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "20px",
        transition: "transform .2s ease-in-out", color:"#626ee3"
    }
    const overviewPara = [
        {icon:TipsAndUpdatesIcon,heading:"Conceptual Overview",para:"Our videos all start with an in-depth conceptual overview of the algorithm at hand: how to approach it, how to implement it, how to optimize it, and how to analyze its space-time complexity.",link:"See an example."},
        {icon:CodeIcon,heading:"Code Walkthrough",para:"Our videos all end with a complete walkthrough from start to finish of the actual code implementation of the algorithm. This is done in Python, since Python is very easy to read. ",link:"See an example."}
    ]
    const videoStyle = {
        width:"100%",height:"70%",borderRadius:"4px",
    }
  return (
    <>
    <Box sx={{p:"100px 20px",position:"relative"}}>
      <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
         transform: "scale(1.2)"
      }}}/>
      <Box sx={{maxWidth:"1200px",m:"0 auto",display:"flex"}}>
        <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
            <Typography sx={{fontSize:"35px",mb:"20px",fontWeight:"400",color:"#02203c"}}>Our Videos Set Us Apart.</Typography>
            <Typography variant="body2" sx={{color:"#445d6e",fontSize:"17px",mb:"25px",pr:"2rem"}}>The truth is that interview questions and algorithms are difficult. Even more difficult is trying to understand the inner workings of a complex algorithm from a book or from a poorly thought-out video shot on your grandma's camera. Our crisp 1080p videos boast crystal-clear audio and are strategically divided into two parts to give you the most comprehensive explanations to questions. That's over</Typography>
            <Box sx={{mt:"15px",display:"flex",flexDirection:"row",pr:"2rem"}}>
                {overviewPara.map((item,index)=>{
                        return(
                            <Box sx={{mr:"10px"}} key={index}>
                                <Box sx={{display:"flex",cursor:"pointer",mb:"10px",}}>
                                    <item.icon sx={{mr:"15px",fontSize:"35px","&:hover":{
                                                color: "#626ee3",
                                                transform: "scale(1.2)"          
                                            }}}/>
                                    <Typography sx={{fontSize:"20px"}}>{item.heading}</Typography>
                                </Box>
                                <Typography sx={{color:"#445d6e",fontSize:"17px"}}>{item.para}
                                    <Link sx={{"&.MuiLink-root":{
                                                color:"#626ee3",
                                                fontWeight:"600",
                                                textDecoration:"none",
                                                cursor:"pointer"
                                            },
                                            "&.MuiLink-root:hover":{
                                                textDecoration:"underline",
                                            }}}>{item.link}</Link>
                                </Typography>
                            </Box>
                        )
                })}
            </Box>
        </Box>
        <Box sx={{flex:"46%",alignItems:"center",pl:"2rem",display:"flex"}}>
            {/* <iframe style={videoStyle} src="https://player.vimeo.com/video/225692229?pip=1"  frameborder="0" loading="lazy" data-ready="true"></iframe> */}
            <iframe style={videoStyle} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  frameBorder="0" loading="lazy" data-ready="true"></iframe>
        </Box>
      </Box>
    </Box>
    <DividerDark/>
    </>
  )
}

export default VideoOverView
