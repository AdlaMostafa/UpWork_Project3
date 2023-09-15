import React from 'react'
import { StyledRightSection } from './style'
import AboutSection from './About/index'
import ConnectSection from './Connects'
import LinksSection from  './Links/index'
const RightSection:React.FC = () => {
  return (
    <StyledRightSection>
      <AboutSection/>
      <ConnectSection/>
      <LinksSection/>
    </StyledRightSection>
  )
}

export default RightSection