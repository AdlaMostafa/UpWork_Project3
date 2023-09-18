'use client'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { Link, Typography } from '@mui/material';
import { StyledAdditionalDiv } from './style';

const AdditionalDiv = ({ title, src, about, link1,link2 }) => {
  return (
    <StyledAdditionalDiv>
        <div className='parent'>
        <div className='title'>
        <h3>{title}</h3>
        <AddIcon
          sx={{
            borderRadius: '50%',
            fontSize: 28,
            border: '1px solid gray',
            color: 'green',
            marginLeft: '20px',
          }}
        />
      </div>
      <div className='center'>
        <Image src={src} alt='Search' />
        <Typography variant='body2' color='black'>
          {about}
        </Typography>
        <div className='link'>
          <Link href='#' className='link1'>{link1}</Link>
          <Link href='#'>{link2}</Link>
        </div>
      </div>
      </div>
    </StyledAdditionalDiv>
  );
};

export default AdditionalDiv;
