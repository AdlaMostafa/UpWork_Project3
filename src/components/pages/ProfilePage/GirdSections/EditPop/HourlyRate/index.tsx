"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "@/components/atoms/Button";
import { StyledDivhourlyrate } from "./style";

const HourlyRate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowAutocomplete(false);
  };

  const handleEditClick = () => {
    setShowAutocomplete(true);
    setOpen(true);
  };

  const [userHourlyRate, setUserHourlyRate] = useState<string>("");
  const [websiteAmount, setWebsiteAmount] = useState<string>("");
  const [finalPrice, setFinalPrice] = useState<string>("");
  const [editHourlyRate, setEditHourlyRate] = useState<string>("");

  const handleUserHourlyRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setUserHourlyRate(inputValue);
    setEditHourlyRate(inputValue);
    const websiteAmountValue = (parseFloat(inputValue) * 0.1).toFixed(2);
    setWebsiteAmount(websiteAmountValue);
    const finalPriceValue = (
      parseFloat(inputValue) - parseFloat(websiteAmountValue)
    ).toFixed(2);
    setFinalPrice(finalPriceValue);
  };

  return (
    <div>
      <EditIcon
        sx={{
          borderRadius: "50%",
          fontSize: 26,
          border: "1px solid gray",
          color: "green",
          marginLeft: "20px",
          cursor: "pointer",
        }}
        onClick={handleEditClick}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div>
            <div style={{ borderBottom: "1px solid lightgray" }}>
              <Typography as="p">
                Please note that your new hourly rate will only apply to new
                contracts.
              </Typography>
              <Typography as="p">Your profile rate: $18.00/hr</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography as="h4">Hourly Rate</Typography>
                  <Typography as="p">
                    Total amount the client will see
                  </Typography>
                </div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={userHourlyRate}
                    onChange={handleUserHourlyRateChange}
                    endAdornment={
                      <InputAdornment position="end">/hr</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
              </div>
            </div>

            <StyledDivhourlyrate>
              <div>
                <Typography as="h4">10% Upwork Service Fee</Typography>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={websiteAmount}
                    readOnly
                    endAdornment={
                      <InputAdornment position="end">/hr</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
              </div>
            </StyledDivhourlyrate>

            <StyledDivhourlyrate>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography as="h4">You'll Receive</Typography>
                    <Typography as="p">
                      The estimated amount you'll receive after service fees
                    </Typography>
                  </div>
                  <FormControl sx={{ m: 1, width: "29ch" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={finalPrice}
                      readOnly
                      endAdornment={
                        <InputAdornment position="end">/hr</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </div>
              </div>
            </StyledDivhourlyrate>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                marginLeft: "300px",
              }}
            >
              <CustomButton
                variant="contained"
                text="Save"
                style={{
                  backgroundColor: "Green",
                  borderRadius: "20px",
                  width: "110px",
                  height: "40px",
                }}
                onClick={() => {
                  setUserHourlyRate(editHourlyRate);
                  setOpen(false);
                }}
              />
              <CustomButton
                variant="outline"
                text="Cancel"
                style={{
                  backgroundColor: "White",
                  borderRadius: "20px",
                  color: "Green",
                  fontWeight: "500",
                  border: "2px solid Green",
                  width: "110px",
                  height: "40px",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HourlyRate;
