import { Box, Typography,Button, MenuItem } from '@mui/material'
import {Link} from 'react-router-dom'
import AlgoExpertLogo from '../assets/logoAlgoExpert.png'

import { styled } from "@mui/material/styles";
import ProductNavigationMenu from './MenuNavigation/ProductNavigationMenu';
import ContentNavigationMenu from './MenuNavigation/ContentNavigationMenu';
const MainNavigation = () => {
    const styleLogo= {
        height:"40px",
        marginRight:"15px"
    }
    const linkStyle = {
        textDecoration:"none",
        
    }
    const LogInButton = styled(Button)(() => ({
        color:"#fff",
        height:"35px",
        p:0,
        fontSize:"14px",
        border: "1px solid transparent",
        textTransform: "capitalize",
    }))
  return (
        <Box sx={{
            p:"20px",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"flex-start",
            backgroundColor: '#02203c',
            fontFamily:"Jura,Helvetica,Arial,sans-serif",
            color:"#fff",
        }} >
            <Link to="/" style={linkStyle}>
                <Box sx={{display:"flex",marginBottom:"10px"}}>
                    <img style={styleLogo} src={AlgoExpertLogo} alt="Logo"/>
                    <Typography variant='h4' sx={{letterSpacing:"0.05em",color:"#fff",}}>AlgoExpert</Typography>
                </Box>
                    <Typography variant="h6" color="#8d96eb" sx={{
                        fontSize:"16px",
                        letterSpacing:"0.05em"
                    }}>Ace the Technical Interviews</Typography>
            </Link>
            <Box sx={{display:"flex"}}>
                <ProductNavigationMenu />
                <ContentNavigationMenu/>
                <Link to="" style={linkStyle}>
                    <MenuItem sx={{
                        color:"#fff"
                    }}>Team</MenuItem>
                </Link>
                <Link to="" style={linkStyle}>
                    <MenuItem sx={{
                        color:"#fff",
                        fontStyle:"italic",
                        fontWeight:"bold"
                    }}>Purchases</MenuItem>
                </Link>
            </Box>
            <Box sx={{width:"250px",textAlign:"center"}}>
                <LogInButton variant="outlined" >Log In</LogInButton>
            </Box>
        </Box>
  )
}

export default MainNavigation