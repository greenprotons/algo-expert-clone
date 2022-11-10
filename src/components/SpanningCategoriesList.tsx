import React from 'react'
import {Box, Typography,Button,Grid,List,ListItem, SvgIconProps} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
 
const SpanningCategoriesList = () => {
    const arrowSign = {
        cursor: "pointer", fontSize: "40px", left: "91%", position: "absolute", top: "1.5vh",
        transition: "transform .2s ease-in-out", color:"#fff"
    }
    const listStyle = {
      color: "#fff", display: "grid", gap: "40px", mt:"40px",
      gridTemplateColumns: "1fr 1fr 1fr", margin: "0 auto",  maxWidth: "1000px", padding: 0,
     
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
      display: "flex", flexDirection: "column", padding: "30px", textAlign: "center",
    }
    const subBoxTwo = {
      left: "0", position: "absolute", top: "0", width: "100%", alignItems: "center",
      backfaceVisibility: "hidden", bgcolor: "#15314b", borderRadius: "4px", display: "flex",
      flexDirection: "column", height: "100%", textAlign: "center", justifyContent:"center",
      transform: "rotateY(180deg)",
    }
    function createData(
      icon:(props: SvgIconProps) => JSX.Element,
      name:string,
      desc:string
  ){
      return{icon,name,desc}
  }
  const allData = [
    createData(CheckCircleRoundedIcon,"Array","Harder than they seem."),
    createData(CheckCircleRoundedIcon,"Graphs","Easier than they seem."),
    createData(CheckCircleRoundedIcon,"Tries","Yes.Tries. Not a typo."),
    createData(CheckCircleRoundedIcon,"Linked List","Reverse them."),
    createData(CheckCircleRoundedIcon,"Binary Trees","Invert them."),
    createData(CheckCircleRoundedIcon,"String",`"This is a string."`),
    createData(CheckCircleRoundedIcon,"Dynamic Programing","Everyone hates it."),
    createData(CheckCircleRoundedIcon,"Searching","Searching for the Purchase button?"),
    createData(CheckCircleRoundedIcon,"Sorting",`array = [3, 1, 2] or array == [1, 2, 3]`),
    createData(CheckCircleRoundedIcon,"Greedy Algorithms",`Not too greedy`),
    createData(CheckCircleRoundedIcon,"Recursions","[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]"),
    createData(CheckCircleRoundedIcon,"Famous Algorithm","ヽ( ͡° ͜ʖ ͡°)ﾉ"),
    createData(CheckCircleRoundedIcon,"Heaps","Fancy trees."),
    createData(CheckCircleRoundedIcon,"Binary Search Trees","BS trees."),
    createData(CheckCircleRoundedIcon,"Stacks","Push. Pop.That's about it."),
  ]
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
          <List sx={{...listStyle}}>
            {
              allData.map((item,index)=>{
                return(
                  <ListItem key={index} sx={{...listItemStyle}}>
                      <Box sx={{...mainBoxStyle}}>
                          <Box sx={{...subBoxOne}}>
                            <item.icon sx={{color:"#e4e4e4",mb:"15px",fontSize:"2.7rem"}}/>
                            {/* <Typography>{item.icon}</Typography> */}
                            <Typography>{item.name}</Typography>
                          </Box>
                          <Box sx={{...subBoxTwo}}>
                            <Typography>{item.desc}</Typography>
                          </Box>
                      </Box>
                  </ListItem>
                )
              })
            }
          </List>
    </Box>
  )
}

export default SpanningCategoriesList
