"use client";
import React from "react";
import Container from "./HomePageComponents/container";
import LeftSection from "./sections/leftSections/index";
import RightSection from "./sections/rightSections/index";
import StyledHomePage, { StyledFooter } from "./style";
import SuperFooter from "../../../components/organism/SupFooter";
import SubFooter from "../../../components/organism/SubFooter/index";
import Header from "@/components/organism/Header";
const HomePage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Container>
        <StyledHomePage>
          <LeftSection />
          <RightSection />
        </StyledHomePage>
      </Container>
      <StyledFooter>
        <SuperFooter />
      </StyledFooter>
      <SubFooter />
    </div>
  );
};

export default HomePage;
