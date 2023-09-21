'use client';
import React from 'react';
import SignupForm from './SignupForm';
import Image from 'next/image';
import Logo from '../../../../../public/assets/SocialMedia/Upwork Logo.png';
import SubFooter from '@/components/organism/SubFooter';

const SignupPage: React.FC = () => {
  return (
    <div>
      <header>
        <Image src={Logo} width='130' height='60' alt='logo' />
      </header>
      <SignupForm />
      <SubFooter />
    </div>
  );
};

export default SignupPage;
