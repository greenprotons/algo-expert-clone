import React from 'react'
import { Button,Menu,MenuItem } from '@mui/material'

const NavigationMenu = () => {
    const [anchorEl, setElement] = React.useState<null | HTMLElement>(null);   
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setElement(event.currentTarget);
    };
    const handleClose = () => {
        setElement(null);
    };


  return (
    <>
        <Button 
            id="product-button"
            aria-controls={open ? 'product-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >Product</Button> 
        <Menu
        id="product-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'product-button',
        }}
      ></Menu> 
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> 
    </>
  )
}

export default NavigationMenu