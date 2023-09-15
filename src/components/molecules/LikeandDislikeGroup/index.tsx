'use client';
import StyledDislikeIcon from '@/components/atoms/DisLike'
import StyledFavoriteIcon from '@/components/atoms/Favourite'
import React from 'react'
import { StyledLikeDiv } from './style'

const LikeandDislikeGroup = () => {
  return (
    <StyledLikeDiv>
       <div className='fav'><StyledFavoriteIcon/></div> 
        <StyledDislikeIcon/>
    </StyledLikeDiv>
  )
}

export default LikeandDislikeGroup