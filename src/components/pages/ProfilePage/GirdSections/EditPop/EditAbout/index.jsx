"use client";
import React, { useState } from "react";
import Dialog from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Button, TextareaAutosize } from "@mui/material";

const EditAbout = ({ initialAbout, onSave, onCancle }) => {
  const [editedAbout, setEditedAbout] = useState(initialAbout);
  const handleSave = () => {
    onSave(editedAbout);
  };
  const handleChange = (event) => {
    setEditedAbout(event.target.value);
  };
  return (
    <Dialog open={true} onClose={onCancle}>
      <DialogContent>
        <Typography as="p">Edit about info :</Typography>
        <TextareaAutosize
          rowsMin={4}
          value={editedAbout}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <Button variant="contained" color="green" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="green" onClick={onCancle}>
          Cancle
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditAbout;
