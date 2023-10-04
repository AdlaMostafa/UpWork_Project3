import React from "react";
import OnlineAvatar from "../../../../atoms/OnlineAvatar";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import { StyleLeftSection, StyleTopSection, StyledRightDiv } from "./style";
import OffLineIconChip from "@/components/atoms/OffLineChip";
import CustomButton from "@/components/atoms/Button";
const TopGridSection: React.FC = () => {
  return (
    <StyleTopSection>
      <StyleLeftSection>
        <div className="avatar">
          <OnlineAvatar />
        </div>
        <div>
          <h2>Adla M.</h2>
          <Typography variant="body2" color="black">
            <LocationOnIcon
              sx={{ fontSize: "18px", marginRight: "2px", marginTop: "4px" }}
            />
            {"Gaza, Palestine Territories _ 12:45 pm local time"}
          </Typography>
          <div className="availableDiv">
            <OffLineIconChip />
            <span style={{ marginLeft: "18px" }}>Off</span>
            <EditIcon
              sx={{
                borderRadius: "50%",
                fontSize: 26,
                border: "1px solid gray",
                color: "green",
                marginLeft: "20px",
              }}
            />
          </div>
        </div>
      </StyleLeftSection>
      <StyledRightDiv>
        <CustomButton
          variant="outline"
          text="See Public View"
          style={{
            borderRadius: "20px",
            color: "Green",
            fontWeight: "548",
            border: "2px solid Green",
            width: "220px",
            height: "40px",
          }}
        />
        <CustomButton
          variant="contained"
          text="Profile Settings"
          style={{
            backgroundColor: "green",
            borderRadius: "20px",
            width: "220px",
            height: "40px",
            marginLeft: "10px",
          }}
        />
      </StyledRightDiv>
    </StyleTopSection>
  );
};

export default TopGridSection;
