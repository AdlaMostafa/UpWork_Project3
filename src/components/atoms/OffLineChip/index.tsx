'use client';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BoltIcon from '@mui/icons-material/Bolt';
import { Typography } from '@mui/material';
export default function OffLineIconChip() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  return (
    <Stack direction="row" spacing={0}>
      <Chip
        deleteIcon={<BoltIcon/>}
        label={
        <Typography variant="body" color="text.secondary" align="center">
        {"Available now "}
      </Typography>
      } 
        onDelete={handleClick}
        variant="outlined"
        sx={{
          height:'25px',
        }}
      />
      
    </Stack>
  );
}
