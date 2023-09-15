import { Avatar, Link, Typography } from '@mui/material'
import React from 'react'
import {StyledAboutSecrion} from './style'
const AboutSection:React.FC = () => {
  return (
    <StyledAboutSecrion>
      
      <Avatar 
      alt='Adla Mostafa' 
      src='../../../../../../../assets/SocialMedia/adla2.jpg' 
       style={{ height: '70px', width: '70px' }}/>

      <div className='about_info'>
      <Link href='#'>Adla M.</Link>
      <Typography variant="body2" align="center">
        Frontend developer (React js)
        </Typography>
      </div>
      
      <div className='sliderParent'>
        <div>
        <Link href='#'>Complete your profile</Link>
        </div>
        <div className='sliderInfo'>
          <div className='slider'></div>
        <Typography variant="body2" align="center" sx={{color:'#108a00'}}>70%</Typography>
      </div>
      </div>
        
    </StyledAboutSecrion>
  )
}

export default AboutSection