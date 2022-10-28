import React from 'react'
import { Box, Button,Menu,MenuItem,Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ContentNavigationMenu = () => {
    const [anchorEl, setElement] = React.useState<null | HTMLElement>(null);   
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (anchorEl !== event.currentTarget) {
        setElement(event.currentTarget);
      }
      }
      const handleClose = () => {
          setElement(null);
      }

    const menuListItem = {
      padding: "15px",
      borderRadius: "4px",
      display:"block",
      color:"#000"
    }
    const menuListItemTitle = {
      alignItems: "center",
    color: "#inherit",
    display: "flex",
    fontFamily: "Open Sans,Helvetica,Arial,sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    m: 0,
    }
    const linkStyle = {
      textDecoration:"none",
  }
  const listData = [
    {
      id:1,
      title:"Algo Expert",
      chevronIcon: KeyboardArrowRightIcon,
      detail:{
        id:1,
        item1:"Coding Interview Questions"
      }
    },
    {
      id:2,
      title:"SystemExpert",
    },
    {
      id:3,
      title:"MLExpert",
    },
    {
      id:4,
      title:"FrontEndExpert",
    },
    {
      id:5,
      title:"Bonus",
    }
  ]
  return (
    <Box sx={{pl:1,pr:1}}>
        <Button 
            id="content-button"
            aria-controls={open ? 'content-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            onMouseOver={handleClick}
            sx={{
              color:"#fff"
            }}
        >Content</Button> 
        <Menu
        id="content-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose,
            'aria-labelledby': 'content-button', }}
        sx={{"& .MuiPaper-root": {
          backgroundColor: "#fff",
          p:"10px",
          width:"260px",
          left:"720px !important",
          position:"absolute",
          overflow:"hidden"
        }}}
      > 
        <Link to=""  style={linkStyle}>
          {listData.map((list,key)=>{
              return(
                <MenuItem key={key} onClick={handleClose} sx={{...menuListItem,display:"flex",justifyContent:"space-between"}}>
                  <Typography variant="h3" sx={{...menuListItemTitle}}>{list.title}</Typography><ExpandMoreIcon    />
                </MenuItem>
              )
            })
          }
        </Link>
      </Menu>
    </Box>
  )
}

export default ContentNavigationMenu