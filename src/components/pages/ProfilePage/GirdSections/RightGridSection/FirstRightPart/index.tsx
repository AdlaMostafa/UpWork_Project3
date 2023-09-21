"use client";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { StyledDialogWrapper, StyledParent } from "./style";
import {
  Typography,
  Button,
  TextareaAutosize,
  Dialog,
  DialogContent,
} from "@mui/material";
import { FirstRightPartData } from "../../../../../../mock/FirstRightPartData";

const initialShowMore = false;
import HourlyRate from "../../../GirdSections/EditPop/HourlyRate";
import CustomButton from "@/components/atoms/Button";

const FirstRightPart: React.FC = () => {
  const [showMore, setShowMore] = useState(initialShowMore);
  const [about, setAbout] = useState(FirstRightPartData.about.join("\n"));
  const [editedAbout, setEditedAbout] = useState(about);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSaveAbout = () => {
    setAbout(editedAbout);
    toggleDialog();
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedAbout(event.target.value);
  };

  return (
    <StyledParent>
      <div className="titlePart">
        <div className="right">
          <h2>{FirstRightPartData.jobTitle}</h2>
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
        <div className="left">
          <h2>{FirstRightPartData.hourPrice}</h2>
          <HourlyRate />
          <InsertLinkIcon
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
      <div>
        <div className="about">
          <Typography variant="body2" color="black">
            {about.split("\n").map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </Typography>
          <EditIcon
            sx={{
              borderRadius: "50%",
              fontSize: 26,
              border: "1px solid gray",
              color: "green",
              marginLeft: "20px",
            }}
            onClick={toggleDialog}
          />
        </div>
        <ul>
          <Typography variant="body2" color="black">
            <li>{FirstRightPartData.skills.join(", ")}</li>
            {showMore && <li>{FirstRightPartData.projectManagement}</li>}
            {showMore && <li>{FirstRightPartData.communication}</li>}
          </Typography>
        </ul>
        <button
          onClick={() => setShowMore(!showMore)}
          style={{
            background: "none",
            border: "none",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {showMore ? "Less" : "More"}
        </button>
      </div>

      <StyledDialogWrapper>
        <Dialog
          open={isDialogOpen}
          onClose={toggleDialog}
          sx={{ width: "100%" }}
        >
          <DialogContent className="DialodContent">
            <Typography
              as="p"
              color="green"
              sx={{
                marginBottom: "10%",
              }}
            >
              Edit about info :
            </Typography>
            <TextareaAutosize
              rowsMin={4}
              value={editedAbout}
              onChange={handleChange}
              style={{ width: "100%", fontFamily: "cursive" }}
            />
            <div>
              {" "}
              <CustomButton
                variant="contained"
                text="Save"
                style={{
                  backgroundColor: "green",
                  borderRadius: "20px",
                  color: "White",
                  fontWeight: "500",
                  border: "2px solid Green",
                  width: "150px",
                  height: "35px",
                  marginRight: "170px",
                  marginTop: "40px",
                }}
                onClick={handleSaveAbout}
              />
              <CustomButton
                variant="contained"
                text="Cancel"
                style={{
                  backgroundColor: "White",
                  borderRadius: "20px",
                  color: "green",
                  fontWeight: "500",
                  border: "2px solid Green",
                  width: "150px",
                  height: "35px",
                  marginTop: "40px",
                }}
                onClick={toggleDialog}
              />
            </div>
          </DialogContent>
        </Dialog>
      </StyledDialogWrapper>
    </StyledParent>
  );
};

export default FirstRightPart;
