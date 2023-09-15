'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import JobInfo from '../jobDiv';
import { jobDetails } from '@/mock/jobData';
import { jobDetails2 } from '@/mock/jobData';

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
          <Typography  sx={{ fontFamily: 'PP Neue Montreal, sans-serif' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function JobTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',fontFamily: 'PP Neue Montreal, sans-serif'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
          style: {
            backgroundColor: 'black',
          },
        }}>
          <Tab label="Best Matches" {...a11yProps(0)}  sx={{
            fontSize:'12px',
            fontWeight:'550',
            color: value === 0 ? 'black' : 'inherit',
            '&.Mui-selected': {
              color: 'black', 
            },
          }}
        />
          <Tab label="Most Recent" {...a11yProps(1)}  sx={{
            fontSize:'12px',
            fontWeight:'550',
            color: value === 0 ? 'black' : 'inherit',
            '&.Mui-selected': {
             color: 'black', 
    },
  }}
 />
          <Tab label=" Saved Jobs" {...a11yProps(2)}
          sx={{
            fontSize:'12px',
            fontWeight:'550',
            color: value === 0 ? 'black' : 'inherit',
            '&.Mui-selected': {
              color: 'black',
            },
          }}        
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Typography variant="body" color="black" >
                {"Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant. "}
              </Typography>
              <div>
              {jobDetails.map((job) => (
                <div key={job.id}>
                  <JobInfo  job={job} />
                  {/* <LikeandDislikeGroup/> */}
                </div>

))}

</div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Typography variant="body" color="black">
                {"Browse the most recent jobs that match your skills and profile description to the skills clients are looking for."}
              </Typography>
              {jobDetails2.map((job) => (
  <JobInfo key={job.id} job={job} />
))}

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Typography variant="body2" color="black">
                {"or "}
              </Typography>
      </CustomTabPanel>
    </Box>
  );
}
