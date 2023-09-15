import React from 'react';
import Chip from '@mui/material/Chip';
import { StyledJobDiv, StyledLocation, StyledRating, StyledVerifiedDiv } from './style';
import Link from 'next/link';
import { Typography } from '@mui/material';
import verified from '../../../../../../../../../public/assets/SocialMedia/verified.png';
import Image from 'next/image';
import HalfRating from '../Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LikeandDislikeGroup from '@/components/molecules/LikeandDislikeGroup';

interface JobInfoProps {
  job: {
    title: string;
    price: string[];
    time: string;
    description: string;
    skills: string[];
    propsalTime: string[];
  };
}

const JobInfo: React.FC<JobInfoProps> = ({ job }) => {
  const { price } = job;

  return (
    <StyledJobDiv>
      <div>
        <Link href='/job' style={{ color: "green", textDecoration: "none" }}>{job.title}</Link>
        <div className='likeandDis'>
          <LikeandDislikeGroup />
        </div>
      </div>
      <Typography variant="body2" color="gray" sx={{
        marginTop: '20px',
        fontSize: '14px'
      }}> {job.time}</Typography>
      <p>{job.description}</p>
      <div className="skills">
        {job.skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" sx={{
            backgroundColor: 'gainsboro',
            color: 'gray',
            fontSize: '15px'
          }} />
        ))}
      </div>
      {job.propsalTime.map((item, index) => (
        <span key={index} style={{ color: index === 0 ? 'gray' : 'black', fontSize: '14px' }}>
          {item}{' '}
        </span>
      ))}
      <StyledVerifiedDiv>
        <Image src={verified} alt='verified' width={16} height={16} />
        <Typography variant="body2" color="gray" sx={{
          marginTop: '20px',
          fontSize: '14px'
        }}>Payment Verified</Typography>
        <StyledRating><HalfRating /></StyledRating>
        {price.map((priceItem, index) => (
          <Typography key={index} variant="body2" color="black" sx={{
            marginTop: '20px',
            marginLeft: '1px'
          }}>
            {priceItem}
          </Typography>
        ))}
        <Typography variant="body2" color="gray" sx={{
          marginTop: '20px',
          fontSize: '14px',
          marginLeft: '5px'
        }}>+spent</Typography>
        <StyledLocation><LocationOnIcon /></StyledLocation>
        <Typography variant="body2" color="gray" sx={{
          marginTop: '20px',
          fontSize: '14px',
          marginLeft: '5px'
        }}>Palestine</Typography>
      </StyledVerifiedDiv>
    </StyledJobDiv>
  );
};

export default JobInfo;
