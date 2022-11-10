import { Box,Typography,Divider } from '@mui/material'
import Link from '@mui/material/Link';
import DividerComponent from './DividerComponent';
const Footer = () => {

    const footerLinkItems = [
        {name:"Contact Us",divider:[{dividerTag:Divider}]},
        {name:"FAQ",divider:[{dividerTag:Divider}]},
        {name:"Reviews",divider:[{dividerTag:Divider}]},
        {name:"Blog",divider:[{dividerTag:Divider}]},
        {name:"Jobs",divider:[{dividerTag:Divider}]},
        {name:"SWE Project Contests",divider:[{dividerTag:Divider}]},
        {name:"Legal Stuff",divider:[{dividerTag:Divider}]},
        {name:"Privacy Policy"},
    ]
    const dividerStyle = {
        orientation:"vertical",
        m:"0 15px",
        height:"19px",
        width:"2px",
        bgcolor:"hsla(0,0%,100%,.3)"
    }
  return (
    <>
        <Box sx={{bgcolor:"#02203c",color:"#fff",fontFamily:"Open Sans,Helvetica,Arial,sans-serif"}}>
            <DividerComponent/>
            <Box sx={{
                p:"30px 20px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <Box sx={{
                    display:"flex",
                    mb:"10px"
                }}>
                {footerLinkItems.map((item,index)=>{
                    return(
                        <Link sx={{
                            "&.MuiLink-root":{
                                textDecoration:"none",
                                color:"#fff",
                                cursor:"pointer",
                                fontSize:"14px"
                            },
                            "&.MuiLink-root:hover":{
                                textDecoration:"underline",
                            }
                        }} key={index}>
                            <Box  sx={{display:"flex"}}>{item.name}
                                {
                                    item.divider?.map((nested, index)=>{
                                        return(
                                        <nested.dividerTag sx={{...dividerStyle}} key={index} />
                                        )
                                    })
                                }
                            </Box>
                        </Link>
                    )
                })}
                </Box>
                <Box>
                    <Typography sx={{fontSize:"13px"}}>Copyright © 2017-2022 AlgoExpert LLC. All rights reserved.</Typography>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Footer
