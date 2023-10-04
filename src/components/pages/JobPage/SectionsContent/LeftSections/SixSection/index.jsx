import { Typography } from "@mui/material";
import React from "react";
import { StyleSixSection } from "./style";
const SixSection = () => {
  return (
    <StyleSixSection>
      <h5>Activity on this job</h5>
      <div>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="black">
          {title}
        </Typography>
      </div>
    </StyleSixSection>
  );
};

export default SixSection;
