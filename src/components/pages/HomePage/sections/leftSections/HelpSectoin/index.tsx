'use client'
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { StyledCard, StyledParent } from './style';
import Medalia from '../../../../../../../public/assets/SocialMedia/medalia.jpg'
import Wood from '../../../../../../../public/assets/SocialMedia/wood.jpg'
import Man from '../../../../../../../public/assets/SocialMedia/man.jpg'

const HelpSection: React.FC = () => {
  return (
    <StyledParent>
      <StyledCard className='first-card'>
        <div className='content'>
        <Typography sx={{ fontSize: 15,fontWeight:500 }} color="text.primary" gutterBottom>
        Important a certification
       </Typography>
      <Typography variant="body2">
      Showing a credential
      <br />
         {'increase your chances of '} <br />
         {'earning by 4 times'}
       </Typography>
       </div>
       <div className='rightContent'>
       <div className='icon'><ArrowForwardIcon/></div>
        <Image src={Medalia} width={40} height={40} alt='medalia'/>
       </div>
      </StyledCard><br />
      <StyledCard className='second-card'>
      <div className='content'>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
        Build your portfolio
       </Typography>
      <Typography variant="body2">
      Adding a project may
      <br />
         {'increase your chances '} <br />
         {'earning by 8 times '}
       </Typography>
       </div>
       <div className='rightContent'>
       <div className='icon'><ArrowForwardIcon/></div>
        <Image src={Wood} width={40} height={40} alt='medalia'/>
       </div>
      </StyledCard><br />
      <StyledCard className='third-card'>
      <div className='content'>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
        Get tips to find work
       </Typography>
      <Typography variant="body2" sx={{ fontSize: 13 }}>
      Learn how to optimize search use Connects
         {'more to land your first job.'}
       </Typography>
       </div>
       <div className='rightContent'>
       <div className='icon'><ArrowForwardIcon/></div>
        <Image src={Man} width={40} height={40} alt='medalia'/>
       </div>
      </StyledCard>    
        
    </StyledParent>
  );
}

export default HelpSection;