'use client'
import React from 'react';
import AdditionalDiv from '../components/AdditionalDiv';
import bag from '../../../../../public/assets/SocialMedia/bag.jpg';
import Search from '../../../../../public/assets/SocialMedia/search.jpg'
import cup from '../../../../../public/assets/SocialMedia/cup.jpg'
import File from '../../../../../public/assets/SocialMedia/file.jpg'
import {StyledHistoryDiv} from './style'
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import SuperFooter from '@/components/organism/SupFooter';
import SubFooter from '@/components/organism/SubFooter';
const AdditionalSections = () => {
  return (
    <div>
      <AdditionalDiv
        title="Testimonials"
        src={Search}
        about="Showcasing client testimonials can strengthen your profile. (+5%)"
        link1="Request a testimonial"
      />
      <AdditionalDiv
        title="Certifications"
        src={cup} 
        about="Listing your certifications can help prove your specific knowledge or abilities. (+10%)
        You can add them manually or import them from Credly. 
        "
        link1='Add manually' 
        link2='Import from Credly'
      />
      <StyledHistoryDiv>
      <div className='parent'>
        <div className='title'>
        <h3>Employment history</h3>
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
        <Typography variant='body' color='black'>
        Frontend developer | I dont work
        </Typography>
        <div className='icons'>
        <EditIcon className='icon'
                  sx={{
                    borderRadius: "50%",
                    fontSize: 27,
                    border: "1px solid gray",
                    color: "green",
                    marginLeft:'20px'
                  }}
                />
                <DeleteIcon className='icon'
                  sx={{
                    borderRadius: "50%",
                    fontSize: 27,
                    border: "1px solid gray",
                    color: "green",
                    marginLeft:'20px'
                  }}
                />
        </div>
      </div>
      <Typography variant='body2' color='black' className='history'>
      May 2023 - September 2023
        </Typography>
      </div>
      </StyledHistoryDiv>
      <AdditionalDiv
        title="Other Experiences"
        src={File}
        about="DHighlighting relevant experiences can boost your visibility in our search results. (+5%)"
        link1="Add an experience"
      />
      <SuperFooter/>
      <SubFooter/>
    </div>
  );
};

export default AdditionalSections;
