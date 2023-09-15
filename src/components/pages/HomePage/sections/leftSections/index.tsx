import React from 'react'
import { StyledLeftSection } from './style'
import HeroSection from '../leftSections/HeroSection'
import HelpSection from './HelpSectoin'
import SearchSection from './SearchSection'
import JobsSection from '../leftSections/Jobs/index'
const LeftSection:React.FC = () => {
  return (
    <StyledLeftSection>
      <HeroSection/>
      <HelpSection/>
      <SearchSection/>
      <JobsSection/>
      </StyledLeftSection>
  )
}

export default LeftSection