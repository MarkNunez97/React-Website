
import React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
    title: string,
}

const Title = (props: Props) => {
  return (
        <Typography variant="h2">
            {props.title}
        </Typography>
  );
}

export default Title;
