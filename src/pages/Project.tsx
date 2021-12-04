import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../common/logo.svg';
import './css/Home.css';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const Project =() => {
  return (
    <Container maxWidth={false}>
        <Typography variant="h2">
            Showcase
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={2} >
                <Button variant="contained">
                    <ChevronLeft />
                </Button>
            </Grid>
            <Grid item xs={8} >
                stuff go here
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained">
                    <ChevronRight />
                </Button>
            </Grid>
        </Grid>
        {/* 
            grid
                button
                container
                button

            projects
        
        */}
    </Container>
  );
}

export default Project;
