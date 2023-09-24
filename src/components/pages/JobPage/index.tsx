'use client';
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomButton from "@/components/atoms/Button";
import CopyLinkTextField from '../../../components/atoms/CopyLinkTextFeild'; 
import styled from "styled-components";
import { Chip, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HalfRating from '../../../components/pages/HomePage/sections/leftSections/Jobs/components/Rating';
import verified from '../../../../public/assets/SocialMedia/verified.png';
import axios from "axios";
import {
  LeftSection,
  RightSection,
  StyleParent1,
  StyleParent2,
  StyleSixSection,
  StyleThirdSection,
  StyledRating,
  Subsection,
} from "./style";

const iconComponents = {
};

const StyledJobDrawerContent = styled.div`
  width: 1200px;
  padding: 5px;
`;

interface JobDrawerContentProps {
  selectedJob: {
    title: string;
    time: string;
    description: string;
    skills: string[];
    proposalTime: string[];
  } | null;
  onClose: () => void;
}

const JobDrawerContent: React.FC<JobDrawerContentProps> = ({
  selectedJob,
  onClose,
}) => {
  const [jobDetails, setJobDetails] = useState<any | null>(null);
  const [thirdLeftSection, setThirdLeftSection] = useState<any | null>(null);
  const [sixLeftSection, setSixLeftSection] = useState<any | null>(null);

  const fetchSixLeftSection = async () => {
    try {
      const response = await axios.get("http://localhost:8080/SixLeftSection");
      setSixLeftSection(response.data);
    } catch (error) {
      console.error("Error fetching SixLeftSection:", error);
    }
  };

  const fetchThirdLeftSectionJobPage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/ThirdLeftSectionJobPage"
      );
      setThirdLeftSection(response.data);
    } catch (error) {
      console.error("Error fetching ThirdLeftSectionJobPage:", error);
    }
  };

  const fetchThirdLeftSection = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/ThirdLeftSection"
      );
      setThirdLeftSection(response.data);
    } catch (error) {
      console.error("Error fetching ThirdLeftSection:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/JobDetails");
      console.log("Response:", response.data);
      setJobDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSixLeftSection();
    fetchThirdLeftSectionJobPage();
    fetchThirdLeftSection();
    fetchData();
  }, []);

  if (!sixLeftSection || !thirdLeftSection || !jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {selectedJob && (
        <StyledJobDrawerContent>
          <StyleParent1>
            <div className="title">
              <div className="exit">
                <h1>{"<"}</h1>
              </div>
              <Link href="/">Open job in a new window</Link>
            </div>
            <StyleParent2>
              <LeftSection>
                <Subsection>
                  <div className="one">
                    <Typography variant="h6" className="jobTitle">
                      {selectedJob.title}
                    </Typography>
                    <Link href="/">Front-End Development</Link>
                    <Typography
                      variant="body2"
                      color="gray"
                      sx={{ fontSize: "16px" }}
                    >
                      {selectedJob.time}
                    </Typography>
                    <div className="location">
                      <div className="icon">
                        <LocationOnIcon />
                      </div>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          marginTop: "20px",
                          fontSize: "14px",
                          marginLeft: "5px",
                        }}
                      >
                        WorldWide
                      </Typography>
                    </div>
                  </div>
                </Subsection>
                <Subsection>
                  <div className="two">
                    <Typography
                      variant="body1"
                      color="black"
                      sx={{ fontSize: "14px", margin: "5px" }}
                    >
                      {selectedJob.description}
                    </Typography>
                  </div>
                </Subsection>
                <Subsection>
                  <StyleThirdSection>
                    {thirdLeftSection.map((item) => (
                      <div key={item.id} className="content">
                        <div className="icon">
                          {iconComponents[item.icon]}
                        </div>
                        <div className="about">
                          <Typography
                            variant="body2"
                            color="black"
                            sx={{ fontSize: "18px", margin: "5px" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.about.split("\n").map((line, index) => (
                              <p key={index}>{line}</p>
                            ))}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </StyleThirdSection>
                </Subsection>
                <Subsection>
                  <div className="four">
                    <p>Project Type:</p>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      className="typeo"
                    >
                      Ongoing project
                    </Typography>
                  </div>
                </Subsection>
                <Subsection>
                  <div className="fourLeft">
                    <Typography
                      variant="h6"
                      className="jobTitle"
                      sx={{
                        marginTop: "20px",
                        fontSize: "18px",
                        marginLeft: "5px",
                      }}
                    >
                      Skills and Expertise
                    </Typography>
                    <Typography
                      variant="h6"
                      className="jobTitle"
                      sx={{
                        marginTop: "20px",
                        fontSize: "16px",
                        marginLeft: "5px",
                        marginBottom: "10px",
                      }}
                    >
                      Developer skills
                    </Typography>
                    {selectedJob.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        color="primary"
                        sx={{
                          fontWeight: "BOLD",
                          backgroundColor: "#dbf2db",
                          color: "green",
                          marginRight: "5px",
                          fontSize: "13px",
                          marginBottom: "10px",
                        }}
                      />
                    ))}
                  </div>
                </Subsection>
                <Subsection>
                  <StyleSixSection className="six">
                    <Typography
                      variant="body2"
                      color="black"
                      sx={{ fontSize: "18px", margin: "5px" }}
                    >
                      Activity on this job
                    </Typography>
                    <div>
                      {sixLeftSection[0].title.map(
                        (title: string, i: number) => (
                          <div className="sixSection" key={i}>
                            <div className="first">
                              <Typography
                                variant="body2"
                                color="black"
                                sx={{ fontSize: "16px", margin: "5px" }}
                              >
                                {title}
                              </Typography>
                            </div>
                            <div className="second">
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {sixLeftSection[1].number[i]}
                              </Typography>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </StyleSixSection>
                </Subsection>
              </LeftSection>
              <RightSection>
                <Subsection>
                  <div className="firstRight">
                    <CustomButton
                      variant="contained"
                      text="Apply Now"
                      style={{
                        backgroundColor: "green",
                        borderRadius: "20px",
                        width: "240px",
                        height: "40px",
                        fontSize: "14px",
                      }}
                      className="apply"
                    />
                    <CustomButton
                      icon={<FavoriteIcon />}
                      variant="outline"
                      text="Save Job"
                      style={{
                        backgroundColor: "White",
                        borderRadius: "20px",
                        color: "Green",
                        fontWeight: "500",
                        border: "2px solid Green",
                        width: "240px",
                        height: "40px",
                      }}
                      className="save"
                    />
                    <div className="link">
                      {" "}
                      <Link href="/">Flag as inappropriate</Link>
                    </div>
                    <Typography
                      variant="body2"
                      color="Black"
                      className="Connects"
                    >
                      {"Send a proposal for : 12 Connects"} <br />
                      <br />
                      {"Available Connects : 50"}
                    </Typography>
                  </div>
                </Subsection>
                <Subsection>
                  <div className="secondRight">
                    <Typography
                      variant="h4"
                      className="jobTitle"
                      sx={{
                        marginTop: "20px",
                        fontSize: "18px",
                        marginLeft: "5px",
                        fontWeight: "300",
                      }}
                    >
                      About the client
                    </Typography>
                    <div className="verified">
                      <Image
                        src={verified}
                        alt="verified"
                        width={16}
                        height={16}
                      />
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: "14px",
                          marginLeft: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        payment method verified
                      </Typography>
                    </div>
                    <div className="rate">
                      <StyledRating>
                        <HalfRating />
                      </StyledRating>
                      <Typography variant="body2" color="text.secondary">
                        {"5 of 43 reviews"}
                      </Typography>
                    </div>
                    <div>
                      {thirdLeftSection[0].title.map(
                        (item: string, index: number) => (
                          <Typography
                            key={index}
                            variant="h2"
                            sx={{
                              fontSize: "14px",
                              marginLeft: "5px",
                              fontWeight: "bold",
                              marginBottom: "15px",
                            }}
                          >
                            {item}
                            <br />
                            <Typography
                              key={index}
                              variant="body2"
                              color="text.secondary"
                            >
                              {thirdLeftSection[1].about[index]}
                            </Typography>
                          </Typography>
                        )
                      )
                     }
                    </div>
                  </div>
                </Subsection>
                <Subsection>
                  <CopyLinkTextField link="Your Link Here" /> 
                </Subsection>
              </RightSection>
            </StyleParent2>
          </StyleParent1>
        </StyledJobDrawerContent>
      )}
    </div>
  );
};

export default JobDrawerContent;
