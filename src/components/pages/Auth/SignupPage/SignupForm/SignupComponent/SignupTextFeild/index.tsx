import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { StyleTextFeild } from './style';

interface SignupTextFeildProps {
  placeholder: string;
  style?: React.CSSProperties;
}

const SignupTextFeild: React.FC<SignupTextFeildProps> = ({ placeholder, style }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.2 },
      }}
      autoComplete="on"
    >
      <StyleTextFeild style={style}>
        <Input
          placeholder={placeholder}
          disableUnderline
        />
      </StyleTextFeild>
    </Box>
  );
};

export default SignupTextFeild;
