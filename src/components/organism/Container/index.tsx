import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiContainer from '@mui/material/Container';

function MyContainer({ children, noSpaces }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiContainer
        maxWidth="sm"
        sx={{
          padding: noSpaces ? 0 : undefined,
        }}
      >
        {children}
      </MuiContainer>
    </React.Fragment>
  );
}

export default MyContainer;
