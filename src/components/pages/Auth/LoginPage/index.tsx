'use client'
import React from 'react'
import LoginForm from './LoginForm/index'
import Image from 'next/image'
import Logo from '../../../../../public/assets/SocialMedia/Upwork Logo.png'
import SubFooter from '@/components/organism/SubFooter'

const LoginPage:React.FC = () => {
  return (
    <div>
        <header>
        <Image src={Logo} width='130' height='60' alt='logo'/></header>
        <LoginForm/>
      <SubFooter/>       
    </div>
  )
}

export default LoginPage