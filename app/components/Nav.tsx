import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Roboto } from 'next/font/google';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import { useNavigationContext } from '../context';
import { useState } from 'react';

export default function Nav() {
  const {  
            setProjects, 
            setContact,
            setHome } = useNavigationContext();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
       setSelectedIndex(index);
       if(index == 0) {
        setProjects(true);
        setHome(false);
        setContact(false);
       }
       if(index == 1) {
        setHome(true);
        setProjects(false);
        setContact(false);
       }
       if(index == 2) {
        setContact(true);
        setHome(false);
        setProjects(false);
       }
    };
    return (
      <Grid sx={{ p: 2}}>
      <nav aria-label="main navigation">
      <List sx={{maxWidth: 345}}>
      <ListItem disablePadding >
          <ListItemButton selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0)}
                          className='navItem'> 
            <ListItemText primary="Projects" 
                          primaryTypographyProps={{
                            fontWeight: 700,
                            letterSpacing: 0,
                        }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1)}
                          className='navItem'> 
            <ListItemText primary="About" 
                            primaryTypographyProps={{
                              fontWeight: 700,
                              letterSpacing: 0,
                        }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 2}
                          onClick={(event) => handleListItemClick(event, 2)}
                          className='navItem'>
            <ListItemText primary="Contact" 
                          primaryTypographyProps={{
                            fontWeight: 700,
                            letterSpacing: 0,
                        }}/>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    </Grid>
    );
  }