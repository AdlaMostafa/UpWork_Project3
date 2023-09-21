'use client'
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Button, TextareaAutosize } from "@mui/material";

interface EditAboutProps {
  initialAbout: string;
  onSave: (editedAbout: string) => void;
  onCancel: () => void;
}

const EditAbout: React.FC<EditAboutProps> = ({ initialAbout, onSave, onCancel }) => {
  const [editedAbout, setEditedAbout] = useState(initialAbout);

  const handleSave = () => {
    onSave(editedAbout);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedAbout(event.target.value);
  };

  return (
    <Dialog open={true} onClose={onCancel}>
      <DialogContent>
        <Typography as="p">Edit about info :</Typography>
        <TextareaAutosize
          rowsMin={4}
          value={editedAbout}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="default" onClick={onCancel}>
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditAbout;
