import { Box, Typography } from '@mui/material'

const TestsBox = () => {
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
    const testListItems = {
        height:"13px",
        borderRadius:"4px",
        mr:"4px",
    }
    const testList = {
        p:"15px",
        m:"10px",
        backgroundColor:"#15314b",
        borderRadius:"4px",
        display:"flex",
    }
    return (
    <>
        <Box sx={{
            border:"2px solid #15314b",
            borderRadius:"4px",
            bgcolor:"#02203c", 
            overflow:"hidden",
            display: "flex",
            flexDirection: "column",
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
            <Box sx={{ overflow: "auto",
                            '&::-webkit-scrollbar': {
                                width: '0.4em',
                                bgcolor:"#02203c"
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: "#a0a0a0",
                                borderRadius: "3px",
                            }}}>
                {testProgressBar.map((item,key)=>{
                    return(
                        <Box sx={{...testList}} key={key}>{item.span}
                        {
                            item.nestedSpan.map((nested, nestedkey)=>{
                                return(
                                <Box sx={{...testListItems,bgcolor: nested.color,width:nested.width}} key={nestedkey}>{nested.anotherSpan}</Box>
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

export default TestsBox