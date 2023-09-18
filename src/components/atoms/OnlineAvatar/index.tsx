'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    width: '18px',
    borderRadius:'50%',
    height: '18px',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  }
}));

export default function OnlineAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Adla Mostafa" src="../../../../assets/SocialMedia/adla2.jpg" 
        sx={{
          width:'90px',
          height:'90px'
        }}
        />
      </StyledBadge>
    </Stack>
  );
}
