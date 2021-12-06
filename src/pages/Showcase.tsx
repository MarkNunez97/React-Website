
import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './css/Project.css';
import dog from '../common/dog.gif';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';

const Showcase = () => {
  return (
    <Container>
        {/* title */}
        <Typography variant="h2">
            Showcase
        </Typography>
        {/* SlideShow */}
        <div className="ShowcaseContainer">
            <div className="ButtonLeft"> 
                <ChevronLeft />
            </div>
            <div className="ProjectMid"> 
                <div className="ProjectImage">
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            maxWidth: 500,
                            minWidth: 300
                        }}
                        component="img"
                        alt="The house from the offer."
                        src={dog}
                    />
                </div> 
                <div className="ProjectDescription">
                    <div style={{textAlign: "center", paddingBottom: 20}}>
                        <Typography variant="h5">
                            Title
                        </Typography>
                    </div>
                    <div >
                        <Typography variant="body2" sx={{display: "-webkit-box", textOverflow: "ellipsis", maxHeight: 100, overflow: "hidden", WebkitLineClamp: 4, WebkitBoxOrient: "vertical"}} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Typography>
                    </div>
                    <div style={{paddingTop: 20}}>
                        <Typography variant="caption">
                            <li>some</li>
                            <li>bullet</li>
                            <li>point</li>
                        </Typography>
                    </div>
                    <div style={{textAlign: "center", marginTop: 'auto'}}>
                        <Button variant="text">Learn More</Button>
                    </div>
                    
                </div> 
            </div>
            <div className="ButtonRight">
                <ChevronRight />
            </div>       
        </div>
        {/* Project list */}
        <div className="ProjectsContainer">
            <div className="ProjectItem">
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        minWidth: 300
                    }}
                    component="img"
                    alt="The house from the offer."
                    src={dog}
                />
                <Typography variant="h6">
                            Title
                </Typography>
            </div>
            <div className="ProjectItem">
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        minWidth: 300
                    }}
                    component="img"
                    alt="The house from the offer."
                    src={dog}
                />
                <Typography variant="h6">
                    Title
                </Typography>
            </div>
            <div className="ProjectItem">
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        minWidth: 300
                    }}
                    component="img"
                    alt="The house from the offer."
                    src={dog}
                />
                <Typography variant="h6">
                    Title
                </Typography>
            </div>
        </div>
    </Container>
  );
}

export default Showcase;
