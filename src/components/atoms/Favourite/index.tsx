import React from "react";
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
interface StyledFavoriteIconProps {
  isFavorite: boolean;
  onClick: () => void;
}

const StyledFavoriteIcon: React.FC<StyledFavoriteIconProps> = ({
  isFavorite,
  onClick,
}) => {
  return (
    <div
      style={{
        border: `2px solid ${isFavorite ? "green" : "lightGray"}`,
        borderRadius: "50%",
        width: 32,
        height: 31,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FavoriteIcon
        style={{
          color: isFavorite ? "green" : "gray",
          fontSize: 28,
        }}
      />
    </div>
  );
};

export default StyledFavoriteIcon;
