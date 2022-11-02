import React from 'react'
import { Box, Button,Menu,List,ListItem,ListItemText } from '@mui/material'
import {Link} from 'react-router-dom'
import GradingIcon from '@mui/icons-material/Grading';
import CodeIcon from '@mui/icons-material/Code';
import DatasetIcon from '@mui/icons-material/Dataset';
import MonitorIcon from '@mui/icons-material/Monitor';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DataObjectIcon from '@mui/icons-material/DataObject';
import JavascriptIcon from '@mui/icons-material/Javascript';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';


import { NestedMenuItem } from 'mui-nested-menu';

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
      color:"#000",
    }
    const menuListItemTitle = {
      pl:"10px",
      pr:"10px",
      mt:"-8px",
      mb:"-8px",
      bgcolor: "#626ee3",
      color:"#fff",
      display: "flex",
      flexDirection: "column",
    }

    const listItemText = {
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,.3)",
      borderRadius: "4px",
      color: "#fff",
      display: "flex",
      height: "70px",
      padding: "0 20px"
    }
    const linkStyle = {
      textDecoration:"none",
  }
  const listData = [
    {
      id:1,
      title:"Algo Expert",
      submenu: [
        {
          id:1,
          icon:GradingIcon,
          title: 'Coding Interview Questions',
        },
        {
          id:2,
          icon:DatasetIcon,
          title: 'Data Structures Crash Course',
        },
        {
          id:3,
          icon:CodeIcon,
          title: 'Coding Interview Assessments',
        },
        {
          id:4,
          icon:MonitorIcon,
          title: 'Mock Coding Interviews',
        },
        {
          id:5,
          icon:EmojiObjectsIcon,
          title: 'Coding Interview Tips',
        },
      ],
    },
    {
      id:2,
      title:"SystemExpert",
      submenu: [
        {
          id:1,
          icon:AutoAwesomeIcon,
          title: 'Systems Design Fundamentals',
        },
        {
          id:2,
          icon:GradingIcon,
          title: 'Systems Design Questions',
        },
        {
          id:3,
          icon:CodeIcon,
          title: 'Systems Design Quiz',
        },
        {
          id:4,
          icon:EmojiObjectsIcon,
          title: 'Systems Design Interview Tips',
        },
      ],
    },
    {
      id:3,
      title:"MLExpert",
      submenu: [
        {
          id:1,
          icon:AutoAwesomeIcon,
          title: 'ML Crash Course',
        },
        {
          id:2,
          icon:GradingIcon,
          title: 'ML Coding Questions',
        },
        {
          id:3,
          icon:CodeIcon,
          title: 'Large-Scale ML',
        },
        {
          id:4,
          icon:EmojiObjectsIcon,
          title: 'ML Design Questions',
        },
        {
          id:5,
          icon:AutoAwesomeIcon,
          title: 'ML Quiz',
        },
        {
          id:6,
          icon:CodeIcon,
          title: 'ML Interview Tips',
        },
      ],
    },
    {
      id:4,
      title:"FrontEndExpert",
      submenu: [
        {
          id:1,
          icon:AutoAwesomeIcon,
          title: 'Frontend Interview Questions',
        },
        {
          id:2,
          icon:CodeIcon,
          title: 'HTML Crash Course',
        },
        {
          id:3,
          icon:DataObjectIcon,
          title: 'CSS Crash Course',
        },
        {
          id:4,
          icon:JavascriptIcon,
          title: 'JavaScript Crash Course',
        },
        {
          id:5,
          icon:EmojiObjectsIcon,
          title: 'React Crash Course ',
        },
        {
          id:6,
          icon:IntegrationInstructionsOutlinedIcon,
          title: 'Web Dev Fundamentals',
        },
        {
          id:7,
          icon:CodeIcon,
          title: 'Frontend Quiz',
        },
      ],
    },
    {
      id:5,
      title:"Bonus",
      submenu: [
        {
          id:1,
          icon:AutoAwesomeIcon,
          title: 'Behavioral Interview Prep',
        },
      ],
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
          overflow:"hidden",
        }}}
      > 
        <Link to=""  style={linkStyle}>
          {listData.map((list,index)=>{
              return(
                
                  <NestedMenuItem label={list.title} parentMenuOpen={!!anchorEl} key={index} onClick={handleClose} sx={{...menuListItem,display:"flex"}}>
                    {list.submenu?.map((type,index)=>{
                      return(
                        <List key={index} sx={{...menuListItemTitle}}>
                          <ListItem sx={{...listItemText,pt:0,pb:0}}>
                            <type.icon sx={{pr:"10px"}}/>
                            <ListItemText   primary={type.title}/>
                          </ListItem>
                        </List>
                      )
                    })}
                  </NestedMenuItem>
              )
            })
          }
        </Link>
      </Menu>
    </Box>
  )
}

export default ContentNavigationMenu