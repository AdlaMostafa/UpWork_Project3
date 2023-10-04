"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import EditIcon from "@mui/icons-material/Edit";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DialogContentText } from "@mui/material";

export default function EditableAlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [showAutocomplete, setShowAutocomplete] = React.useState(false);
  const [selectedSkills, setSelectedSkills] = React.useState([]);
  const [newSkill, setNewSkill] = React.useState("");

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

  const handleSkillSelection = (event, values) => {
    setSelectedSkills(values);
  };

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddNewSkill = () => {
    if (newSkill.trim() !== "") {
      setSelectedSkills([...selectedSkills, { title: newSkill }]);
      setNewSkill("");
    }
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
          {showAutocomplete ? (
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={topFrontEndSkills}
                getOptionLabel={(option) => option.title}
                value={selectedSkills}
                onChange={handleSkillSelection}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label=""
                    placeholder="Skills"
                  />
                )}
              />
              <TextField
                variant="standard"
                label="New Skill"
                placeholder="Add new skill"
                value={newSkill}
                onChange={handleNewSkillChange}
              />
              <Button
                variant="contained"
                onClick={handleAddNewSkill}
                style={{
                  color: "white",
                  backgroundColor: "green",
                }}
              >
                Add Skill
              </Button>
            </Stack>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Skills
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: "white",
              backgroundColor: "green",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              color: "white",
              backgroundColor: "green",
            }}
            onClick={() => {
              handleClose();
              console.log(selectedSkills);
            }}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {selectedSkills.length > 0 && (
        <div>
          {selectedSkills.map((skill, index) => (
            <Chip
              key={index}
              label={skill.title}
              style={{ marginBottom: "0px" }}
              variant="outlined"
              sx={{
                color: "white",
                backgroundColor: "green",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const topFrontEndSkills = [
  { title: "CSS" },
  { title: "HTML" },
  { title: "CSS5" },
  { title: "HTML5" },
  { title: "JavaScript" },
  { title: "React" },
  { title: "ResponsiveWebsites" },
  { title: "Next.js" },
  { title: "Redux" },
  { title: "Context" },
  { title: "Figma" },
  { title: "PhotoShop" },
];
