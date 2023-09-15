'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { StyledConnectSection, StyledIconTitle, StyledPropsalContent } from './style';
import {connects} from '../../../../../../mock/connects'
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function ConnectSction() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <StyledConnectSection
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', marginTop: 10 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick1}>
        <ListItemText primary="Connects" />
        {open1 ? <ExpandLess onClick={stopPropagation} /> : <ExpandMore onClick={stopPropagation} />}
      </ListItemButton>
      <Collapse in={open1}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} className='content1'>
            {
              <span>
                Available: 50
                <a href="/details" style={{ color: "green", textDecoration: "none", marginBottom: '10px' }}>(view details)</a><br />
                <a href="/terms" style={{ color: "green", textDecoration: "none" }}>Buy connects</a>
              </span>
            }

          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="Preferences" />
        {open2 ? <ExpandLess onClick={stopPropagation} /> : <ExpandMore onClick={stopPropagation} />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
      <List component="div">
    {connects.map((item) => (
      <ListItemButton key={item.id} sx={{ pl: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledIconTitle className='iconTitle'>
        <Typography variant="body2" sx={{ mt: 1 ,marginLeft:'-20px',marginRight:'70px'}}>{item.title}</Typography>
        <EditIcon sx={{ borderRadius: '50%', fontSize: 24,border:'1px solid white',color:'green' }} />
        </StyledIconTitle>
        <Typography variant="body2" sx={{ mt: 1 ,marginRight:'70px'}}>{item.about}</Typography>
      </ListItemButton>
    ))}
  </List>


      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemText primary="Proposals" />
        {open3 ? <ExpandLess onClick={stopPropagation} /> : <ExpandMore onClick={stopPropagation} />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton sx={{ pl: 4 }}>
            <StyledPropsalContent>
          <a href="/terms" style={{ color: "green", textDecoration: "none" , marginLeft:'-160px'}}>My Proposal</a><br />
          <Typography variant="body2" sx={{ mt: 0.8 ,marginRight:'50px'}}>
            Looking for work? Browse jobs <br/>and get started on a propsal
            </Typography>
            </StyledPropsalContent>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick4}>
        <ListItemText primary="Project catalog" />
        {open4 ? <ExpandLess onClick={stopPropagation} /> : <ExpandMore onClick={stopPropagation} />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton sx={{ pl: 4 }}>
          <StyledPropsalContent>
          <a href="/terms" style={{ color: "green", textDecoration: "none" , marginLeft:'-70px'}}>My Project Dashboard</a><br />
            <Typography variant="body2" sx={{ mt: 0.8 ,marginRight:'50px'}}>
                <a href="/details" style={{ color: "green", textDecoration: "none", marginBottom: '10px' }}>Create a Catalog project</a> for<br />
                clients to purchase instantly
              </Typography>
            </StyledPropsalContent>
          </ListItemButton>
        </List>
      </Collapse>
    </StyledConnectSection>
  );
}
