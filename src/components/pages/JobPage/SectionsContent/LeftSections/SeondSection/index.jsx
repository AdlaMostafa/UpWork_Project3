import { Typography } from "@mui/material";
import React from "react";
import { StyleSecondSection } from "./style";
const SecondSection = () => {
  return (
    <StyleSecondSection className="">
      <Typography variant="body2" color="text.secondary">
        {
          "We are in search of a skilled and creative Front-End Web Developer to lead the redesign of our e-commerce website. This project offers an exciting opportunity to revamp our online presence and create an engaging user experience. If youre passionate about web development and have a strong portfolio of front-end projects, we want to hear from you"
        }
      </Typography>
    </StyleSecondSection>
  );
};

export default SecondSection;
