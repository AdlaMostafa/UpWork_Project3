import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  StyledConnectSection,
  StyledIconTitle,
  StyledPropsalContent,
} from "./style";
import { Typography } from "@mui/material";
import axios from "axios";

function Section({ title, content, isOpen, onClick, isSubMenu = false }) {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen}>
        <List component="div" disablePadding>
          {isSubMenu ? (
            <ListItemButton sx={{ pl: 4 }}>{content}</ListItemButton>
          ) : (
            content
          )}
        </List>
      </Collapse>
    </>
  );
}

export default function ConnectSection() {
  const [connects, setConnects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/connects");
        setConnects(res.data);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };
    fetchData();
  }, []);

  const [sections, setSections] = useState([
    {
      title: "Connects",
      isOpen: true,
      content: (
        <span>
          Available: 50
          <a
            href="/details"
            style={{
              color: "green",
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
            (view details)
          </a>
          <br />
          <a href="/terms" style={{ color: "green", textDecoration: "none" }}>
            Buy connects
          </a>
        </span>
      ),
    },
    {
      title: "Preferences",
      isOpen: true,
      content: (
        <List component="div">
          {connects.map((item) => (
            <ListItemButton
              key={item.id}
              sx={{
                pl: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledIconTitle className="iconTitle">
                <Typography
                  variant="body2"
                  sx={{ mt: 1, marginLeft: "-20px", marginRight: "70px" }}
                >
                  {item.title}
                </Typography>
              </StyledIconTitle>
              <Typography variant="body2" sx={{ mt: 1, marginRight: "70px" }}>
                {item.about}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      ),
    },
    {
      title: "Proposals",
      isOpen: true,
      content: (
        <StyledPropsalContent>
          <a
            href="/terms"
            style={{
              color: "green",
              textDecoration: "none",
              marginLeft: "-160px",
            }}
          >
            My Proposal
          </a>
          <br />
          <Typography variant="body2" sx={{ mt: 0.8, marginRight: "50px" }}>
            Looking for work? Browse jobs <br />
            and get started on a proposal
          </Typography>
        </StyledPropsalContent>
      ),
    },
    {
      title: "Project catalog",
      isOpen: true,
      content: (
        <StyledPropsalContent>
          <a
            href="/terms"
            style={{
              color: "green",
              textDecoration: "none",
              marginLeft: "-70px",
            }}
          >
            My Project Dashboard
          </a>
          <br />
          <Typography
            variant="body2"
            sx={{
              mt: 0.6,
              margin: "5px 10px 10px 30px",
            }}
          >
            <a
              href="/details"
              style={{
                color: "green",
                textDecoration: "none",
                marginBottom: "5px",
              }}
            >
              Create a Catalog project
            </a>
            for clients to purchase instantly
          </Typography>
        </StyledPropsalContent>
      ),
    },
  ]);

  const toggleSection = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].isOpen = !sections[index].isOpen;
    setSections(updatedSections);
  };

  return (
    <StyledConnectSection
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "background.paper",
        marginTop: 10,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {sections.map((section, index) => (
        <Section
          key={section.title}
          title={section.title}
          content={section.content}
          isOpen={section.isOpen}
          onClick={() => toggleSection(index)}
          isSubMenu={index === 0} // First section is a sub-menu
        />
      ))}
    </StyledConnectSection>
  );
}
