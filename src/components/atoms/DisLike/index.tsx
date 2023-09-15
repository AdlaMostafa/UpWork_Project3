'use client';
import React, { useState } from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const StyledDislikeIcon: React.FC = () => {
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

  const toggleDislike = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <div
      style={{
        border: `2px solid ${isDisliked ? 'red' : 'gray'}`,
        borderRadius: '50%',
        width: 35, 
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={toggleDislike}
    >
      <ThumbDownIcon
        style={{
          color: isDisliked ? 'red' : 'gray',
          fontSize: 32, 
        }}
      />
    </div>
  );
};

export default StyledDislikeIcon;
