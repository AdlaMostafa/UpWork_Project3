import { Chip } from '@mui/material';
import React from 'react';
import { jobDetails } from '../../../../../../mock/jobData';
import { StyleThirdSection } from './style';

const FifthSection = () => {
  const skills = jobDetails[4].skills; // Get the skills array from jobDetails[4]

  return (
    <StyleThirdSection>
      <div>
        <h5>Skills and Expertise</h5>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            // style={{ marginBottom: '0px' }}
            variant="outlined"
            sx={{
              color: 'green',
              fontWeight:'BOLD',
              textDecoration:'underline',
              backgroundColor: '#dbf2db',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          />
        ))}
      </div>
    </StyleThirdSection>
  );
};

export default FifthSection;
