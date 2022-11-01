import { Box, Typography,Button } from '@mui/material'
import Link from '@mui/material/Link';
import ShopIcon from '@mui/icons-material/Shop';
import React from 'react'

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Hero = () => {

    const transactionLines = {
        backgroundColor:"#1f384e",
        borderRadius:"4px",
        height:"13px",
        m:"0 0 4px",
    }

    const testProgressBar = [
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"", color: "#48aca2",width:"10%"},
                {id:2,anotherSpan:"" , color: "#626ee3",width:"20%"},
                {id:3,anotherSpan:"", color: "#5a395a",width:"13%"},
                {id:4,anotherSpan:"", color: "#626ee3",width:"7%"},
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"", color: "#be8a28",width:"20%"},
                {anotherSpan:"" , color: "#78c078",width:"30%"},
                {anotherSpan:"", color: "#5e5efb",width:"15%"},
                {anotherSpan:"", color: "#5e5efb",width:"5%"},
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"", color: "#78c078",width:"20%"},
                {anotherSpan:"" , color: "#5e5efb",width:"15%"},
                {anotherSpan:"" , color: "#be8a28",width:"30%"},
                {anotherSpan:"", color: "#be8a28",width:"18%"},
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"", color: "#5e5efb",width:"5%"},
                {anotherSpan:"" , color: "#5e5efb",width:"10%"},
                {anotherSpan:"", color: "#78c078",width:"25%"},
                {anotherSpan:"", color: "#be8a28",width:"25%"},
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"", color: "#78c078",width:"15%"},
                {anotherSpan:"" , color: "#be8a28",width:"10%"},
                {anotherSpan:"", color: "#78c078",width:"29%"},
                {anotherSpan:"", color: "#5e5efb",width:"25%"},
            ]
        },
        
    ]
    const testList = {
        p:"15px",
        m:"10px",
        backgroundColor:"#15314b",
        borderRadius:"4px",
        display:"flex",
    }
    const testListItems = {
        height:"13px",
        borderRadius:"4px",
        mr:"4px",
    }

    const inputProgressBar = [
        {
            nestedProgress:[
                {anotherProgress:"", color: "#48aca2",width:"10%"},
                {anotherSpan:"" , color: "#78c078",width:"30%"},
                {anotherSpan:"", color: "#5a395a",width:"20%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"7%"},
                {anotherSpan:"" , color: "#be8a28",width:"25%"},
                {anotherSpan:"", color: "#5a395a",width:"25%"},
                {anotherSpan:"", color: "#626ee3",width:"7%"},
                {anotherSpan:"", color: "#5a395a",width:"25%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"20%"},
                {anotherSpan:"" , color: "#78c078",width:"20%"},
                {anotherSpan:"", color: "#5a395a",width:"13%"},
                {anotherSpan:"", color: "#be8a28",width:"7%"},
                {anotherSpan:"", color: "#5a395a",width:"23%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"20%"},
                {anotherSpan:"" , color: "#be8a28",width:"10%"},
                {anotherSpan:"", color: "#5a395a",width:"20%"},
                {anotherSpan:"", color: "#626ee3",width:"20%"},
                {anotherSpan:"" , color: "#626ee3",width:"10%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"10%"},
                {anotherSpan:"" , color: "#78c078",width:"20%"},
                {anotherSpan:"", color: "#5a395a",width:"40%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"100%"}
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "#48aca2",width:"40%"},
                {anotherSpan:"" , color: "#be8a28",width:"20%"},
                {anotherSpan:"", color: "#78c078",width:"15%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"10%"},
                {anotherSpan:"" , color: "#626ee3",width:"20%"},
                {anotherSpan:"", color: "#5a395a",width:"13%"},
                {anotherSpan:"", color: "#be8a28",width:"7%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"20%"},
                {anotherSpan:"" , color: "#be8a28",width:"20%"},
                {anotherSpan:"", color: "#5a395a",width:"13%"},
                {anotherSpan:"", color: "#626ee3",width:"7%"},
                {anotherSpan:"" , color: "#78c078",width:"20%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"10%"},
                {anotherSpan:"" , color: "#626ee3",width:"20%"},
                {anotherSpan:"", color: "#78c078",width:"13%"},
                {anotherSpan:"", color: "#be8a28",width:"7%"},
                {anotherSpan:"" , color: "#626ee3",width:"20%"},
            ]
        },
        {
            nestedProgress:[
                {anotherProgress:"", color: "transparent",width:"5%"},
                {anotherSpan:"" , color: "#626ee3",width:"20%"},
                {anotherSpan:"", color: "#78c078",width:"13%"},
                {anotherSpan:"" , color: "#be8a28",width:"20%"},
                {anotherSpan:"", color: "#626ee3",width:"7%"},
            ]
        },
        
    ]

    const outputProgressBar = [
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"",icon:CancelOutlinedIcon,iconColor:"#c54242", color: "#c54242",width:"60%"}
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"",icon:CheckCircleOutlineOutlinedIcon,iconColor:"#3f8854", color: "#3f8854",width:"60%"}
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"",icon:CheckCircleOutlineOutlinedIcon,iconColor:"#3f8854", color: "#3f8854",width:"60%"}
            ]
        },
        {
            span:"",
            nestedSpan:[
                {anotherSpan:"",icon:CheckCircleOutlineOutlinedIcon,iconColor:"#3f8854", color: "#3f8854",width:"60%"}
            ]
        },
    ]
  return (
    <>
    <Box sx={{
        display: "flex",
        flex: "1 1 auto",
        gap: "50px",
        justifyContent: "center",
        minHeight: "320px",
        backgroundColor:"#02203c"
        }}>

    {/* Flex Colomn 1 */}
            <Box sx={{
                alignItems: "center",
                display: "flex",
                flex: "50%",
                pl: "20px"      
            }}>
                <Box sx={{
                   margin: "0 0 0 auto",
                   maxWidth: "500px",
                   transition: "margin .4s",
                   width: "100%" 
                }}>
                    <Typography variant="h1" sx={{color:"#fff",fontSize:"38px",mb:"20px"}}>Algo Expert</Typography>
                    <Typography variant="body1" sx={{fontSize:"18px",mb:"20px",color:"#fff"}}>The ultimate resource to prepare for coding interviews.
                    <br />
                    Everything you need, in one streamlined platform.
                    </Typography>
                    <Button variant="contained" startIcon={<ShopIcon/>} sx={{
                        "&.MuiButton-contained":{
                            backgroundColor:"#626ee3",
                            padding:"13px 35px"
                        },
                        "&.MuiButton-contained:hover":{
                            backgroundColor:"#4c5adf"
                        },
                    }}>
                        Buy AlgoExpert
                    </Button>
                </Box>
            </Box>

        {/* Flex Column 2 */}
            <Box sx={{
                alignItems: "center",
                display: "flex",
                flex: "50%",
                color:"#fff"
                // pl: "20px"      
            }}>
                <Box sx={{
                   width: "600px",
                   height:"500px" ,
                   pt:"50px",
                   display:"flex"
                }}>

                {/* Flex Column 2.1 */}
                    <Box sx={{
                        display:"flex",
                        borderRadius:"4px",
                        flexDirection:"column",
                        width:"50%",
                    }}>
                        <Box sx={{
                            border:"2px solid #15314b",
                            borderRadius:"4px",
                            mb:"10px"
                        }}>
                            <Typography variant="body2" sx={{
                                backgroundColor:"#15314b",
                                borderBottom:"2px solid #15314b",
                                height:"30px",
                                display:"flex",
                                alignItems:"center",
                                pl:"5px",
                                fontWeight:"bold"
                            }}>Prompt</Typography>
                            <Box sx={{p:"10px"}}>
                                <Typography variant="h4" sx={{fontSize:"14px",fontWeight:"bold",mb:"10px"}}>Max Profit With K Transactions</Typography>
                                <Typography sx={{...transactionLines,width:"70%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"75%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"60%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"83%"}}></Typography>
                                <br />
                                <Typography sx={{...transactionLines,width:"60%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"75%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"50%"}}></Typography>
                                <Typography sx={{...transactionLines,width:"83%"}}></Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            border:"2px solid #15314b",
                            borderRadius:"4px",
                            bgcolor:"#02203c"
                        }}>
                            <Typography variant="body2" sx={{
                                backgroundColor:"#15314b",
                                borderBottom:"2px solid #15314b",
                                height:"30px",
                                display:"flex",
                                alignItems:"center",
                                pl:"5px",
                                fontWeight:"bold"
                            }}>Tests</Typography>
                            {testProgressBar.map((item,key)=>{
                                return(
                                    <Box sx={{...testList}} key={key}>{item.span}
                                    {
                                        item.nestedSpan.map((nested, nestedkey)=>{
                                            return( 
                                            <Box sx={{...testListItems,bgcolor: nested.color,width:nested.width}} key={nestedkey}>{nested.anotherSpan} 
                                                {/* {nested.color} */}
                                                
                                            </Box>
                                            )
                                        })
                                    }
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>

                {/* Flex Column 2.2 */}
                    <Box sx={{
                        display:"flex",
                        borderRadius:"4px",
                        flexDirection:"column",
                        width:"50%",
                        ml:"10px"
                    }}>
                        <Box sx={{
                            border:"2px solid #15314b",
                            borderRadius:"4px",
                            mb:"10px",
                            
                        }}>
                            <Box sx={{
                                backgroundColor:"#15314b",
                                borderBottom:"2px solid #15314b",
                                height:"30px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between"
                            }}>
                                <Typography variant="body2" sx={{
                                    pl:"5px",
                                    fontWeight:"bold"
                                }}>Input</Typography>
                                <Link sx={{
                                    "&.MuiLink-root":{
                                        textDecoration:"none"
                                    }
                                }}>
                                    <Button variant="contained" sx={{
                                        "&.MuiButton-contained":{
                                            backgroundColor:"#0046c7",
                                            padding:"2px 0px",
                                            borderRadius:"0",
                                            textTransform:"capitalize"
                                        },
                                    }}>Run</Button>
                                </Link>
                            </Box>
                            <Box sx={{p:"10px"}}>
                               {inputProgressBar.map((item,key)=>{
                                return(
                                    <Box sx={{display:"flex",mb:"4px"}} key={key}>{
                                    item.nestedProgress.map((nested, nestedkey)=>{
                                            return( 
                                            <Box sx={{...testListItems,bgcolor: nested.color,width:nested.width}} key={nestedkey}>{nested.anotherProgress}</Box>
                                            )
                                        })
                                    }
                                    </Box>
                                )
                            })}
                            </Box>
                        </Box>
                        <Box sx={{
                            border:"2px solid #15314b",
                            borderRadius:"4px",
                            mb:"10px",
                            
                        }}>
                            <Box sx={{
                                backgroundColor:"#15314b",
                                borderBottom:"2px solid #15314b",
                                height:"20px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between"
                            }}>
                                <Typography variant="body2" sx={{
                                    pl:"5px",
                                    fontWeight:"bold"
                                }}>Output</Typography>
                                <Link sx={{
                                    "&.MuiLink-root":{
                                        textDecoration:"none"
                                    }
                                }}>
                                    <Button variant="contained" sx={{
                                        "&.MuiButton-contained":{
                                            backgroundColor:"#008529",
                                            padding:"0px",
                                            height:"18px",
                                            borderRadius:"0",
                                            textTransform:"capitalize"
                                        },
                                    }}>Submit</Button>
                                </Link>
                            </Box>
                            <Box sx={{p:"10px",bgcolor:"#02203c"}}>
                            {outputProgressBar.map((item,key)=>{
                                return(
                                    <Box sx={{...testList,alignItems:"center"}} key={key}>{item.span}
                                    {
                                        item.nestedSpan.map((nested, nestedkey)=>{
                                            return( 
                                               <>
                                                <nested.icon sx={{width:"20%",fontSize:"29px",color:nested.iconColor}}/>
                                            <Box sx={{...testListItems,bgcolor: nested.color,width:nested.width}} key={nestedkey}>{nested.anotherSpan}</Box>
                                            </>
                                            )
                                        })
                                    }
                                    </Box>
                                )
                            })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
    </Box>
    </>
  )
}

export default Hero