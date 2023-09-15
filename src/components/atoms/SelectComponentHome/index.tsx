'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { countries } from '@/mock/countries'; 

interface NestedListProps{
    mockData:{id:number; value:string}[];
}

export default function NestedList({mockData}:NestedListProps) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 280, bgcolor: 'red' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {countries.map((item)=>(
              <ListItemButton key={item.id} sx={{ pl: 2 }}>
            <ListItemText primary={item.value} />
          </ListItemButton>  
            ))}
          
        </List>
      </Collapse>
    </List>
  );
}