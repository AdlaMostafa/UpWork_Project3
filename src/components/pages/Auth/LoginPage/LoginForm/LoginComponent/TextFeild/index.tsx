'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import PersonIcon from '@mui/icons-material/Person';
import { StyleTextFeild } from './style';

const TextFeild: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.3 },
      }}
      autoComplete="on"
    >
      <StyleTextFeild>
        <PersonIcon sx={{ marginLeft: '10px' }} />
        <Input
          placeholder="Username or Email"
          inputProps={{ 'aria-label': 'description' }}
          disableUnderline
        />
      </StyleTextFeild>
    </Box>
  );
};

export default TextFeild;
