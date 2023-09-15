import React from 'react';
import UlComponent from '@/components/atoms/UlComponent';
import { FooterData } from '@/mock/FooterData';
import { StyledFooterParent, StyledSocialIcon, StyledSocialIcon2, StyledUlDataFooter } from './style';
import FaceBook from '../../../../public/assets/SocialMedia/facebook (2).png';
import Instagram from '../../../../public/assets/SocialMedia/instagram.png';
import Linkdin from '../../../../public/assets/SocialMedia/linkdin.png';
import Twitter from '../../../../public/assets/SocialMedia/twitter.png';
import Youtube from '../../../../public/assets/SocialMedia/you tube.png';
import Apple from '../../../../public/assets/SocialMedia/apple-logo .png';
import Android from '../../../../public/assets/SocialMedia/android-logo.png';
import Image from 'next/image';

interface FooterItem {
  id: number;
  items: string[];
}

const SuperFooter: React.FC = () => {
  return (
    <StyledFooterParent>
      <StyledUlDataFooter>
        {FooterData.map((data: FooterItem) => (
          <UlComponent key={data.id} items={data.items} />
        ))}
      </StyledUlDataFooter>
      <StyledSocialIcon>
        <p>Follow Us</p>
        <Image src={FaceBook} alt="facebook" />
        <Image src={Instagram} alt="instagram" />
        <Image src={Linkdin} alt="linkedin" />
        <Image src={Twitter} alt="twitter" />
        <Image src={Youtube} alt="youtube" />
      </StyledSocialIcon>
      <StyledSocialIcon2>
        <p>Mobile App</p>
        <Image src={Apple} alt="Apple" />
        <Image src={Android} alt="Android" />
      </StyledSocialIcon2>
    </StyledFooterParent>
  );
};

export default SuperFooter;
