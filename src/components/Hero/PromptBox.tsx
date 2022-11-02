import { Box, Typography } from '@mui/material'

const PromptBox = () => {
    const transactionLines = {
        backgroundColor:"#1f384e",
        borderRadius:"4px",
        height:"13px",
        m:"0 0 4px",
    }
  return (
    <>
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
    </>
  )
}

export default PromptBox