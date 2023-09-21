import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JobInfo from "../jobDiv";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontFamily: "PP Neue Montreal, sans-serif" }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function JobTabs() {
  const [value, setValue] = React.useState(0);
  const [jobDetails, setJobDetails] = useState([]);
  const [jobDetails2, setJobDetails2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://localhost:8080/JobDetails");
        console.log("Response 1:", response1.data);
        setJobDetails(response1.data);
      } catch (error) {
        console.error("Error fetching data 1:", error);
      }

      try {
        const response2 = await axios.get("http://localhost:8080/JobDetails2");
        console.log("Response 2:", response2.data);
        setJobDetails2(response2.data);
      } catch (error) {
        console.error("Error fetching data 2:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", fontFamily: "PP Neue Montreal, sans-serif" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab
            label="Best Matches"
            {...a11yProps(0)}
            sx={{
              fontSize: "12px",
              fontWeight: "550",
              color: value === 0 ? "black" : "inherit",
              "&.Mui-selected": { color: "black" },
            }}
          />
          <Tab
            label="Most Recent"
            {...a11yProps(1)}
            sx={{
              fontSize: "12px",
              fontWeight: "550",
              color: value === 1 ? "black" : "inherit",
              "&.Mui-selected": { color: "black" },
            }}
          />
          <Tab
            label="Saved Jobs"
            {...a11yProps(2)}
            sx={{
              fontSize: "12px",
              fontWeight: "550",
              color: value === 2 ? "black" : "inherit",
              "&.Mui-selected": { color: "black" },
            }}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Typography variant="body" color="black">
          {
            "Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant. "
          }
        </Typography>
        <div>
          {jobDetails.map((job) => (
            <div key={job.id}>
              <JobInfo job={job} />
            </div>
          ))}
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Typography variant="body" color="black">
          {
            "Browse the most recent jobs that match your skills and profile description to the skills clients are looking for."
          }
        </Typography>
        {jobDetails2.map((job) => (
          <JobInfo key={job.id} job={job} />
        ))}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Typography variant="body2" color="black">
          {"Content for the third tab"}
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}