import React from 'react';
import { Typography } from '@mui/material';
import { StyleThirdSection } from './style';
import ThirdLeftSection from '../../../../../../mock/JobPageSectionsContent/LeftSections/Third';

const ThirdSection = ({ thirdLeftSection }) => {
  return (
    <StyleThirdSection>
      {thirdLeftSection.map((item) => (
        <div key={item.id} className='content'>
          <div className='icon'>
            {item.icon}
          </div>
          <div className='about'>
            <h5>{item.title}</h5>
            <Typography variant="body2" color="text.secondary">
              {item.about.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Typography>
          </div>
        </div>
      ))}
    </StyleThirdSection>
  );
};

export default ThirdSection;
