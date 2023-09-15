import React from 'react';
import CustomButton from "@/components/atoms/Button";
import HeroImage from '../../../../../../../public/assets/SocialMedia/heroimage.jpg';
import Image from 'next/image';
import { StyledHero } from './style';

const HeroSection = () => {
  return (
    <StyledHero>
      <div className='leftContent'>
        <h1>Get 80 Connects each month</h1>
        <p>
          Join Freelancer Plus to start each month fresh with 80 Connects. Youll get a lot 
          of other perks too! Join now to unlock new features to help you grow your
          network and market your skills.
        </p>
        <CustomButton
          variant="outline"
          text="Learn more"
          style={{
            backgroundColor: "White",
            borderRadius: "20px",
            color: "Green",
            fontWeight: "600",
            fontSize: "12px",
            border: "2px solid Green",
            width: "130px",
            marginBottom: "30px",
            height: "35px",
          }}
        />
      </div>
      <div>
        <Image src={HeroImage} width={50} height={50} alt='HeroImage'/>    
      </div>
    </StyledHero>
  );
}

export default HeroSection;
