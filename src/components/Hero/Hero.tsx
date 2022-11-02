import { Box, Typography,Button } from '@mui/material'
import ShopIcon from '@mui/icons-material/Shop';
import PromptBox from './PromptBox';
import TestsBox from './TestsBox';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

const Hero = () => {  
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
                color:"#fff",
                perspective:"700px"
            }}>
                <Box sx={{
                   width: "600px",
                   height:"500px" ,
                   pt:"50px",
                   display:"flex",
                   transform:"rotate3d(.5,-.866,0,15deg) rotate(-1deg)"
                }}>

            {/* Flex Column 2.1 */}
                <Box sx={{
                        display:"flex",
                        borderRadius:"4px",
                        flexDirection:"column",
                        width:"50%",
                    }}>
                        <PromptBox/>
                        <TestsBox/>
                    </Box>

                {/* Flex Column 2.2 */}
                    <Box sx={{
                        display:"flex",
                        borderRadius:"4px",
                        flexDirection:"column",
                        width:"50%",
                        ml:"10px"
                    }}>
                        <InputBox/>
                        <OutputBox/>
                    </Box>
                </Box>
            </Box>
    </Box>
    </>
  )
}

export default Hero