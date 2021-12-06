
import React from 'react';
import Typography from '@mui/material/Typography';
import './css/Projects.css';
import dog from '../common/dog.gif';
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <>
        <div className="ProjectsContainer">
            <div className="ProjectItem">
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        minWidth: 200
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
                        minWidth: 200
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
                        minWidth: 200
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
    </>
  );
}

export default Projects;
