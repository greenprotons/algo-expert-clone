import React from 'react'
import { Box, Button,Menu,MenuItem,Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const ProductNavigationMenu = () => {
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
    const menuListItemDes={
      fontSize: "14px",
      color:"inherit",
    }
    const linkStyle = {
      textDecoration:"none",
  }
  const listData = [
    {
      id:1,
      title:"Algo Expert",
      description:"Ace the Coding Interviews",
      // background:"#4c5adf"
      hover : function(e){
        e.target.style.background = '#8d96eb';
        e.target.style.color = "#fff";
      },
      hoverLeave : function(e){
        e.target.style.background = '#fff';
      }
    },
    {
      id:2,
      title:"SystemExpert",
      description:"Ace the system Interviews",
      "&:hover":{
        background:"#000"
      }
    },
    {
      id:3,
      title:"MLExpert",
      description:"Ace the Machine Learning Interviews"
    },
    {
      id:4,
      title:"FrontEndExpert",
      description:"Ace the Frontend Interviews"
    },
    {
      id:5,
      title:"ProgrammingExpert",
      description:"Learn to code"
    }
  ]
  return (
    <Box sx={{pl:1,pr:1}}>
        <Button 
            id="product-button"
            aria-controls={open ? 'product-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            onMouseOver={handleClick}
            sx={{
              color:"#fff"
            }}
        >Product</Button> 
        <Menu
        id="product-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose,
          'aria-labelledby': 'product-button', }}
        sx={{"& .MuiPaper-root": {
          backgroundColor: "#fff",
          p:"10px",
          width:"260px",
          left:"600px !important",
          position:"absolute",
          overflow:"hidden"
        }}}
      > 
        <Link to=""  style={linkStyle}>
          {listData.map((list,key)=>{
              return(
                <MenuItem key={key} onClick={handleClose} onMouseOver={list.hover} onMouseLeave={list.hoverLeave} sx={{...menuListItem,}}><div></div>
                  <Typography variant="h3" sx={{...menuListItemTitle}}>{list.title}</Typography>
                  <Typography variant="body2" sx={{...menuListItemDes}}>{list.description}</Typography>
                </MenuItem>
              )
            })
          }
        </Link>
      </Menu>
    </Box>
  )
}

export default ProductNavigationMenu