import React from 'react'
import { FirstLeftSection } from '../../../../../../mock/JobPageSectionsContent/LeftSections/First'
import { Link, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { StyleFirstSection } from './style';

const FirstSection = () => {
  return (
    <StyleFirstSection>
        <h3>{FirstLeftSection.title}</h3>
        <Link to='/'>{FirstLeftSection.link}</Link>
        <Typography variant="body2" color="text.secondary">
            {FirstLeftSection.time}
        </Typography>
        <div className='country'>
        <LocationOnIcon sx={{fontSize:'18px',marginRight:'2px',color:'blue'}}/>
        <Typography variant="body1" color="black">
             {FirstLeftSection.country}
        </Typography>
        </div>
    </StyleFirstSection>
  )
}

export default FirstSection