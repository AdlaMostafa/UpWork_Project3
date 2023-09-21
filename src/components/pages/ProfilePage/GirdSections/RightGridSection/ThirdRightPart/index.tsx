import React from 'react';
import { ThirdRightPartData } from '../../../../../../mock/ThirdRightPartData';
import { StyledCenterDiv, StyledParent3 } from './style';
import AddIcon from '@mui/icons-material/Add';
import Bag from '../../../../../../../public/assets/SocialMedia/bag.jpg';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from 'next/link';

const ThirdRightPart: React.FC = () => {
  return (
    <StyledParent3>
      <div className='title'>
        <h3>{ThirdRightPartData.title}</h3>
        <AddIcon
          sx={{
            borderRadius: "50%",
            fontSize: 28,
            border: "1px solid gray",
            color: "green",
            marginLeft:'20px'
          }}
        />
      </div>
      <StyledCenterDiv>
        <Image src={Bag} alt='bag' />
        <Typography variant="body2" color="black">{ThirdRightPartData.about}</Typography>
        <div className='link'><Link href='/'>{ThirdRightPartData.link}</Link></div> 
      </StyledCenterDiv>
    </StyledParent3>
  );
}

export default ThirdRightPart;
