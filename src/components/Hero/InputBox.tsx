import { Box, Typography,Button } from '@mui/material'
import Link from '@mui/material/Link';

const InputBox = () => {
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
    const inputProgressItems = {
        height:"13px",
        borderRadius:"4px",
        mr:"4px",
    }
  return (
    <>
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
                            <Box sx={{...inputProgressItems,bgcolor: nested.color,width:nested.width}} key={nestedkey}>{nested.anotherProgress}</Box>
                            )
                        })
                    }
                    </Box>
                )
            })}
            </Box>
        </Box>
    </>
  )
}

export default InputBox
