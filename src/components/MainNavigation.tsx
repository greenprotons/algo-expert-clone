import { Box, Typography,ThemeProvider, createTheme,List,ListItem,ListItemButton,ListItemText,Button, MenuItem } from '@mui/material'
import {Link} from 'react-router-dom'
import AlgoExpertLogo from '../assets/logoAlgoExpert.png'

import { styled } from "@mui/material/styles";
import ProductNavigationMenu from './MenuNavigation/ProductNavigationMenu';
import ContentNavigationMenu from './MenuNavigation/ContentNavigationMenu';
const MainNavigation = () => {

    const theme = createTheme({
        palette:{
            primary:{
                main:"#8d96eb"
            },
            background:{
                paper:"#02203c"
            }
        },
        typography:{
            h4:{
                fontFamily:"Jura,Helvetica,Arial,sans-serif",
                color:"#fff",
                letterSpacing:"0.05em"
            },
            h6:{
                fontFamily:"Jura,Helvetica,Arial,sans-serif",
                fontSize:"16px",
                letterSpacing:"0.05em"
            },
            // myTypography:{  //name it whatever you want
            //     // color: orange[500],
            //     fontSize:"6rem"
            //   }
        }
    })

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
    <ThemeProvider theme={theme}>
        <Box sx={{
            p:"20px",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"flex-start",
            backgroundColor: 'background.paper',
        }} >
            <Link to="/" style={linkStyle}>
                <Box sx={{display:"flex",marginBottom:"10px"}}>
                    <img style={styleLogo} src={AlgoExpertLogo} alt="Logo"/>
                    <Typography variant='h4'>AlgoExpert</Typography>
                </Box>
                    <Typography variant="h6" color="primary.main">Ace the Technical Interviews</Typography>
            </Link>
            <Box sx={{display:"flex"}}>
                {/* <List sx={{display:"flex",color:"#fff",ml:"80px",mr:"80px",p:0}}>
                    <ListItem sx={{p:0,"&:focus":{
                        backgroundColor:"none"
                    }}}>
                        <ListItemButton>
                            <ListItemText primary="Products"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{p:0}}>
                        <ListItemButton>
                            <ListItemText primary="Content"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{p:0}}>
                        <ListItemButton>
                            <ListItemText primary="Team"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{p:0}}>
                        <ListItemButton >
                            <ListItemText primary="Purchase" sx={{
                                fontWeight:"bold",
                                fontStyle:"italic",
                                fontSize:"14px"
                            }}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List> */}
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
        
    </ThemeProvider>
  )
}

export default MainNavigation