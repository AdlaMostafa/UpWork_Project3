import { Typography } from '@mui/material'
import React from 'react'
import { StyledJobSection } from './style'
import JobTabs from './components/Tabs'

const JobsSection: React.FC = () => {
  return (
    <StyledJobSection>
      <h3>Jobs you might like</h3>
      <JobTabs/>
    </StyledJobSection>
  )
}

export default JobsSection
