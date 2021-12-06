
import React from 'react';
import Container from '@mui/material/Container';
import Slideshow from '../components/Slideshow';
import Projects from '../components/ProjectList';
import Title from '../components/Title';

const Showcase = () => {
  return (
    <Container>
        <Title title={'Showcase'}  />
        <Slideshow/>
        <Projects/>
    </Container>
  );
}

export default Showcase;
