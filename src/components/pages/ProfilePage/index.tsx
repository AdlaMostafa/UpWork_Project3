'use client'
import React from 'react';
import { StyleParent, StyledSecondPart } from './style';
import ProfileContainer from './components/container';
import TopGridSection from './GirdSections/TopGridSection'
import LeftGridSection from './GirdSections/LeftGridSection/index'
import FirstRightPart from './GirdSections/RightGridSection/FirstRightPart'
import SecondRightPart from './GirdSections/RightGridSection/SecondRightPart'
import ThirdRightPart from './GirdSections/RightGridSection/ThirdRightPart'
import FourthGridSection from './GirdSections/RightGridSection/FourthGridSection'
import FifthRightPart from './GirdSections/RightGridSection/FifthRightPart'
import AdditionalSections from './AdditionalSections/index';
const ProfilePage:React.FC = () => {
  return (
    <ProfileContainer>
      <StyleParent>
        <div className="section top-section">
        <TopGridSection/>
        </div>
        <StyledSecondPart className="section second-section">
          <div className="left-section">
           <LeftGridSection/>
          </div>
          <div className="right-section">
            <div className="right-part0">
              <FirstRightPart/>
            </div>
            <div className="right-part">
              <SecondRightPart/>
              <ThirdRightPart/>
              <FourthGridSection/>
            </div>
            <div className="right-part5">
              <FifthRightPart/>
            </div>
          </div>
        </StyledSecondPart>
      </StyleParent>
    </ProfileContainer>
  );
};

export default ProfilePage;
