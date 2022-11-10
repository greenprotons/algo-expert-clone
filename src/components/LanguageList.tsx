import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Box,Typography,Button,List,ListItem, SvgIconProps} from '@mui/material'
import DvrIcon from '@mui/icons-material/Dvr';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AndroidIcon from '@mui/icons-material/Android';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WindowIcon from '@mui/icons-material/Window';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DividerDark from './DividerDark';
const LanguageList = () => {
// Flex Column one Styles and Data 
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "20px",
        transition: "transform .2s ease-in-out", color:"#626ee3"
    }
    function createData(
        icon:(props: SvgIconProps) => JSX.Element,
        name:string,
        desc:string
    ){
        return{icon,name,desc}
    }
    const languageList = [
        createData(DvrIcon,"JavaScrip",", for all you Front-End Developers"),
        createData(TagFacesIcon,"TypeScript",", for all you Edgy JavaScripters"),
        createData(CodeIcon,"Python",",  for all you Data Scientists"),
        createData(PhoneAndroidIcon,"Swift",", for all you iOS Engineers"),
        createData(AndroidIcon,"Kotlin",", for all you Androiders"),
        createData(TerminalIcon,"C++",", for all you Old Schoolers"),
        createData(PsychologyIcon,"Java",", for all you Masochists"),
        createData(WindowIcon,"C#",", for all you Microsofters"),
        createData(SentimentVerySatisfiedIcon,"Go",", for all you Kool Kidz"),
    ]
//Rotating Boxes Styles and Data 
    const listStyle = {
        color: "#fff", display: "grid",  
        gridTemplateColumns: "1fr 1fr 1fr", margin: "0 auto",  maxWidth: "1000px", padding: 0,mt:"40px",
       
      }
      const mainBoxStyle = {
        boxShadow: "2px 2px 15px 0 rgb(0 0 0 / 40%)",color:"#fff",
        height: "100%", position: "relative", transformStyle: "preserve-3d",
        transition: "transform .5s",boxSizing: "border-box",
        '&:hover': {
          transform: "rotateY(180deg)",
        },
      }
      const listItemStyle = {
        transform: "translateZ(0)",transitionDelay: ".07s",
        opacity: 1,transition: "opacity 1s,transform 1s",
        transitionTimingFunction: "cubic-bezier(0,1.01,.55,.99)",display:"block",
      }
      const subBoxOne = {
        alignItems: "center", backfaceVisibility: "hidden", bgcolor: "#15314b", borderRadius: "4px",
        display: "flex", flexDirection: "column", padding: "10px 40px", textAlign: "center",
      }
      const subBoxTwo = {
        left: "0", position: "absolute", top: "0", width: "100%", alignItems: "center",
        backfaceVisibility: "hidden", bgcolor: "#15314b", borderRadius: "4px", display: "flex",
        flexDirection: "column", height: "100%", textAlign: "center", justifyContent:"center",
        transform: "rotateY(180deg)",
      }
      function createDataImages(
        icon:(props: SvgIconProps) => JSX.Element,
        name:string,
    ){
        return{icon,name}
    }
    const allData = [
        createDataImages(DvrIcon,"JavaScrip"),
        createDataImages(TagFacesIcon,"TypeScript"),
        createDataImages(CodeIcon,"Python"),
        createDataImages(PhoneAndroidIcon,"Swift"),
        createDataImages(AndroidIcon,"Kotlin"),
        createDataImages(TerminalIcon,"C++"),
        createDataImages(PsychologyIcon,"Java"),
        createDataImages(WindowIcon,"C#"),
        createDataImages(SentimentVerySatisfiedIcon,"Go"),
    ]
//Last Box and Buttons 
    const interviewCardStyle = {
        backgroundColor: "#fff",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgb(50 50 93 / 10%)",
        color: "#445d6e",
        margin: "0 0 20px",
        padding: "20px 25px"
    }
    const buttons = {
        bgcolor:"#fff",color:"#02203c",boxShadow: "0 2px 4px rgba(50,50,93,.1)!important",
        transition:" transform .2s,box-shadow .2s",p:"13px 38px",textTransform:"capitalize",fontSize:"12px",mr:"20px"
    }
  return (
    <>
        <Box sx={{p:"100px 20px",position:"relative"}}>
            <ArrowUpwardIcon sx={{...arrowSign,"&.MuiSvgIcon-root:hover":{
                transform: "scale(1.2)"
            }}}/>
            <Box sx={{maxWidth:"1200px",m:"0 auto",display:"flex"}}>
            {/* Languages List */}
                <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%"}}>
                    <Typography sx={{fontSize:"35px",mb:"20px",fontWeight:"400",color:"#02203c"}}>
                    We Speak 9 Languages.</Typography>
                    <Typography variant="body2" sx={{color:"#445d6e",fontSize:"18px",mb:"25px",pr:"2rem"}}>
                       There's nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in a programming language that you don't know. That's why all of our questions come with complete written solutions in 9 popular languages.
                    </Typography>
                    <List>
                        {languageList.map((item,index)=>{
                                return(
                                    <ListItem sx={{mb:"25px",color:"#445d6e",p:0}} key={index}>
                                        <item.icon sx={{
                                            marginRight: "20px",
                                            verticalAlign: "middle",
                                            fontSize:"3rem"
                                        }}/>
                                        <Typography component="span" sx={{fontSize:"18px"}}><b>{item.name}</b></Typography>
                                        <Typography>{item.desc}</Typography>
                                    </ListItem>
                                )
                            })}
                    </List>
                </Box>
            {/* Column 2 for rotating Boxes  */}
                <Box sx={{width:"50%",display:"flex",flexDirection:"column",flex:"50%",justifyContent:"center",alignItems:"center"}}>
                    <Box sx={{display:"flex",justidyContent:"center",alignItems:"center"}}>
                    <List sx={{...listStyle}}>
                        {
                        allData.map((item,index)=>{
                            return(
                            <ListItem key={index} sx={{...listItemStyle}}>
                                <Box sx={{...mainBoxStyle}}>
                                    <Box sx={{...subBoxOne}}>
                                        <item.icon sx={{color:"#e4e4e4",fontSize:"2.7rem"}}/>
                                    </Box>
                                    <Box sx={{...subBoxTwo}}>
                                        <Typography>{item.name}</Typography>
                                    </Box>
                                </Box>
                            </ListItem>
                            )
                        })
                        }
                    </List>
                    </Box>
                </Box>
            </Box>
        {/* Card and Buttons */}
            <Box sx={{m:"50px auto 0",maxWidth:"1200px"}}>
                <Box sx={{...interviewCardStyle}}>
                    <Typography component="span" sx={{fontSize:"16px"}}>Hey there! Do you want to ace your upcoming coding interviews?</Typography>
                    <Typography component="span" sx={{color:"#6772e5",fontSize:"25px",lineHeight: 0}}>|</Typography>
                </Box>
                <Box>
                <Button sx={{...buttons,"&.MuiButton-root:hover":{
                        bgcolor: '#fff!important',  boxShadow: '0 6px 10px 2px rgba(50,50,93,.1)!important',  color: '#02203c!important',
                        transform: 'translateY(-3px)'
                    }}}>Of Course</Button>
                <Button sx={{...buttons,"&.MuiButton-root:hover":{bgcolor: '#fff!important',
                        boxShadow: '0 6px 10px 2px rgba(50,50,93,.1)!important',color: '#02203c!important',
                        transform: 'translateY(-3px)'
                    }}}>Nope</Button>
                </Box>
            </Box>
      </Box>
      <DividerDark/>
    </>
  )
}

export default LanguageList
