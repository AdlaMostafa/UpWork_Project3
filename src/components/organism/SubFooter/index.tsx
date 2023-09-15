import React from 'react';
import { Typography } from '@mui/material';
import { StyledSubFooter } from './style';

interface SubFooterProps {
}

const SubFooter: React.FC<SubFooterProps> = () => {
  return (
    <StyledSubFooter square elevation={3}>
      <Typography variant="body2" align="center">
        © 2015-2023 UpWork Global Inc. Privacy Policy
      </Typography>
    </StyledSubFooter>
  );
};

export default SubFooter;
