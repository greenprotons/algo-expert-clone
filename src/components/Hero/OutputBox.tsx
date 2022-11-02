import { Box, Typography,Button } from '@mui/material'
import Link from '@mui/material/Link';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const OutputBox = () => {
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
    const outputListItems = {
        height:"13px",
        borderRadius:"4px",
        mr:"4px",
    }
    const outputList = {
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
            mb:"10px",
            overflow:"hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow:"0 37.5px 40px -17.5px rgb(0 0 0 / 40%), 46.2px 37.5px 70px -7.5px rgb(0 0 0 / 50%)"
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
            <Box sx={{p:"10px",bgcolor:"#02203c",
                        overflow: "auto",
                            '&::-webkit-scrollbar': {
                                width: '0.4em',
                                bgcolor:"#02203c"
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: "#a0a0a0",
                                borderRadius: "3px",
                            }
                    }}>
            {outputProgressBar.map((item,index)=>{
                return(
                    <Box sx={{...outputList,alignItems:"center"}} key={index}>{item.span}
                    {
                        item.nestedSpan.map((nested, index)=>{
                            return( 
                                <>
                                    <nested.icon sx={{width:"20%",fontSize:"29px",color:nested.iconColor}}/>
                                    <Box sx={{...outputListItems,bgcolor: nested.color,width:nested.width}} key={index}>{nested.anotherSpan}</Box>
                                </>
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

export default OutputBox
