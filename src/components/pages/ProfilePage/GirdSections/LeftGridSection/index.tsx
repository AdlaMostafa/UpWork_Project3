"use client";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import {
  StyleFive,
  StyleFour,
  StyleOne,
  StyleParent,
  StyleThree,
  StyleTwo,
} from "./style";
import CustomButton from "@/components/atoms/Button";
import StackOverFlow from "../../../../../../public/assets/SocialMedia/stack-overflow.png";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";

interface LanguageData {
  0: string;
  1: string;
}
interface ProfileData {
  videoInstruction: {
    title: string;
  };
  hoursPerWeek: {
    title: string;
    content: {
      hours: string;
      preference: string;
    };
  };
  languages: {
    title: string;
    content: LanguageData[];
  };
  verifications: {
    title: string;
    content: string;
  };
  education: {
    title: string;
    content: {
      university: string;
      details: string;
      date: string;
    };
  };
}

interface CustomButtonProps {
  icon: JSX.Element;
  variant: string;
  text: string;
  style: React.CSSProperties;
}

const LeftGridSection: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profileData"); 
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <StyleParent>
      <StyleOne>
        <Typography variant="body" color="black">
          {profileData.videoInstruction.title}
        </Typography>
        <AddIcon
          sx={{
            borderRadius: "50%",
            fontSize: 28,
            border: "1px solid gray",
            color: "green",
            marginLeft: "20px",
          }}
        />
      </StyleOne>
      <StyleTwo>
        <div className="titleandIcon">
          <Typography variant="body" color="black">
            {profileData.hoursPerWeek.title}
          </Typography>
          <EditIcon
            className="icon"
            sx={{
              borderRadius: "50%",
              fontSize: 27,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
          />
        </div>
        <div className="workHours">
          <Typography variant="body2" color="black">
            {profileData.hoursPerWeek.content.hours}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profileData.hoursPerWeek.content.preference}
          </Typography>
        </div>
      </StyleTwo>
      <StyleThree>
        <div className="textandIcons">
          <Typography variant="body" color="black">
            {profileData.languages.title}
          </Typography>
          <AddIcon
            sx={{
              borderRadius: "50%",
              fontSize: 28,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
          />
          <EditIcon
            sx={{
              borderRadius: "50%",
              fontSize: 27,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
          />
        </div>
        <div className="languages">
          {profileData.languages.content.map((languageData, index) => (
            <div key={index} className="content">
              <Typography variant="body2" color="black">
                {languageData[0]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {languageData[1]}
              </Typography>
            </div>
          ))}
        </div>
      </StyleThree>
      <StyleFour>
        <div className="title">
          <Typography variant="body" color="black">
            {profileData.verifications.title}
          </Typography>
        </div>
        <div className="iconandText">
          <Typography variant="body2" color="black">
            {profileData.verifications.content}
          </Typography>
          <AddIcon
            sx={{
              borderRadius: "50%",
              fontSize: 28,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
          />
        </div>
      </StyleFour>
      <StyleFive>
        <div className="titleandIcon">
          <Typography variant="body" color="black">
            {profileData.education.title}
          </Typography>
          <AddIcon
            sx={{
              borderRadius: "50%",
              fontSize: 28,
              border: "1px solid gray",
              color: "green",
              marginLeft: "45px",
            }}
          />
        </div>
        <div className="titleandIcon">
          {profileData.education.content.university}
          <EditIcon
            sx={{
              borderRadius: "50%",
              fontSize: 27,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
          />
        </div>
        <div className="education">
          <Typography variant="body2" color="text.secondary" align="center">
            <span style={{ textAlign: "start" }}>
              {profileData.education.content.details} <br />
              {profileData.education.content.date}
            </span>
          </Typography>
        </div>
        <div>
          <CustomButton
            text="GitHub"
            icon={
              <GitHubIcon
                sx={{
                  width: "17px",
                  height: "17px",
                  margin: "4px 4px 0 0",
                }}
              />
            }
            variant="outline"
            style={{
              backgroundColor: "White",
              borderRadius: "20px",
              color: "gray",
              fontWeight: "500",
              border: "2px solid gray",
              width: "270px",
              marginTop: "15px",
              marginBottom: "20px",
              height: "40px",
            }}
          />{" "}
          <br />
          <CustomButton
            icon={
              <Image
                src={StackOverFlow}
                alt="stack over flow icon"
                width={16}
                height={16}
              />
            }
            variant="outline"
            text="StackOverflow"
            style={{
              backgroundColor: "White",
              borderRadius: "20px",
              color: "gray",
              fontWeight: "500",
              border: "2px solid gray",
              width: "270px",
              marginBottom: "200px",
              height: "40px",
            }}
          />
        </div>
      </StyleFive>
    </StyleParent>
  );
};
export default LeftGridSection;
