"use client";

import React, { useEffect } from "react";
import Projects from "./components/Projects";
import { useNavigationContext } from './context';
import { Box, Button, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { darkTheme, lightTheme } from "./theme/theme";

export default function Home() {
  const { projects, home, contact } = useNavigationContext();
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
   <>
      {home ? 
         <Box className='home'>
            <Typography variant="h6" component='div'> Hello, </Typography>
            <Typography variant="h6" component='div'> my name is Danny </Typography>
            <Typography variant="h6" component='div'> I enjoy solving complex </Typography>
            <Typography variant="h6" component='div'> problems with simple solutions. </Typography>
         </Box>
         :
         ''
      }
      {projects ? <Projects /> : ''} 
      {contact ? 
         <Box className='contact'>
        <Stack 
              alignItems="flex-start"
              direction='column'
              spacing={1}>
                  <IconButton aria-label="linkedin" size="large" onClick={() => onView('https://www.linkedin.com/in/daniel-trejo-0x/')}> 
                        <LinkedInIcon fontSize='large' color={'primary'}/>
                 </IconButton>
                <IconButton aria-label="github" size="large"  onClick={() => onView('https://github.com/dtrejo112/')}> 
                        <GitHubIcon fontSize='large' />
                 </IconButton>
                 <Button 
                      variant="text" 
                      endIcon={<ArrowOutwardIcon />} 
                      color="inherit" 
                      onClick={() => window.location.href = `mailto:danieltrejo112@gmail.com`}
                      > 
                       danieltrejo112@gmail.com
                </Button>
                <Button 
                      variant="text" 
                      endIcon={<ArrowOutwardIcon />} 
                      color="inherit" 
                      onClick={() => onView('https://dannys-ux-portfolio.vercel.app/')}
                      > 
                       UX/UI Portfolio 
                </Button>
        </Stack>
         </Box>
         :
         ''
      }
   </>
  )
}
