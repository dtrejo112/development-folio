"use client";
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import catroom from '../../public/projects/cat-room.png';
import uxFolio from '../../public/projects/uxFolio.png';
import migraineTracker from '../../public/projects/migraine-tracker.png';
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

interface Project {
 projectImage: StaticImport;
 title: string;
 description: string;
 url: string;
}

let projects: Array<Project> = [
  {
    projectImage: uxFolio, 
    title: 'UX/UI Portfolio',
    description:  `A Portfolio containing case studies for various UX/UI projects
                   hosted with Vercel, created using TypeScript, 
                   Next.Js, Material UI and Notion's API`,
    url:'https://dannys-ux-portfolio.vercel.app/'
  },
  {
    projectImage: migraineTracker, 
    title: 'Migraine Tracker App',
    description:    `A simple full stack app for tracking migraines hosted on Vercel built with
    TypeScript, Next.js, Material UI and SupaBase`,
    url: 'https://migraine-buddy.vercel.app/' 
  },
  {
    projectImage: catroom,
    title: '3D Game',
    description: `A 3D game built with Spline, hosted with vercel, 
                  created using React, Next.Js and Material UI`,
    url: 'https://3d-game-room.vercel.app/'
  },
]

export default function Projects() {
  useEffect(() => {
    console.log([projects[0].projectImage]);
 }, []);
  return (
    <Grid container sx={{mb: 2}}>
    {/* Project Section */}
    <Grid item>
      <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
              <CardActionArea sx={{maxWidth: 345}} onClick={() => window.open( project.url, "_blank")}>
              <Card sx={{ maxWidth: 345 ,minHeight: 325}}>
                <Box>
                  <Image
                    src={project.projectImage}
                    alt={'Hero image for linkedin projext'}
                    className={`responsive w-full h-auto`}
                    sizes="100vw"
                    width="0"
                    height="0"
                    quality={100}
                    priority
                    placeholder='blur' /> 
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {project.description}
                      </Typography>
                    </CardContent>
                </Card>
                </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Grid>
  </Grid>
  )
}