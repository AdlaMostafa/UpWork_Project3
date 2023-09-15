'use client'
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledFavoriteIcon: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      style={{
        border: `2px solid ${isFavorite ? 'green' : 'lightGray'}`, 
        borderRadius: '50%', 
        width: 35, 
        height: 35, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={toggleFavorite}
    >
      <FavoriteIcon
        style={{
          color: isFavorite ? 'green' : 'gray', 
          fontSize: 32,
        }}
      />
    </div>
  );
};

export default StyledFavoriteIcon;

