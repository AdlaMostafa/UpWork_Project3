import React from 'react';
import { SecondRightPartData } from '../../../../../../mock/SecondRightPartData';
import { StyledParent2 } from './style';
import { Typography } from '@mui/material';
import Link from 'next/link';

const SecondRightPart: React.FC = () => {
  return (
    <StyledParent2>
      <h3>{SecondRightPartData.title}</h3>
      <Typography variant="body2" color="black">{SecondRightPartData.about}</Typography>
      <div className='link'><Link href='/'>{SecondRightPartData.link}</Link></div>
    </StyledParent2>
  );
}

export default SecondRightPart;
